# Not being used right now because I can't I don't know T-T

{ lib, pkgs, config, ... }:

let
  cfg = config.learnWithT;
  inherit (pkgs.stdenv.hostPlatform) system;
in
{
  options.learnWithT = {
    #enable = lib.mkEnableOption "Can disable all options from the module";

    development.openPorts = {
      enable = lib.mkOption {
        type = lib.types.bool;
        default = false;
        description = "Whether to open specific ports for `npx expo start`, react native development";
      };
      portsToOpen = lib.mkOption {
        type = lib.types.listOf lib.types.port;
        default = [ 8081 ];
        description = "List of ports to open for `npx expo start`, react native development. By default opens port 8081";
      };
    };

    appwrite = {
      enable = lib.mkOption {
        type = lib.types.bool;
        default = false;
        description = "appwrite local-host docker";
      };
      docker-directory = lib.mkOption {
        description = "Path to your folder with docker containers";
        default = "/opt/docker";
        example = "/dockers";
        type = lib.types.str;
      };
    };

  };

  config = lib.mkMerge [ ( lib.mkIf ( cfg.development.openPorts.enable /*&& cfg.enable*/) {
      networking.firewall = {
        allowedUDPPorts = cfg.development.openPorts.portsToOpen;
        allowedTCPPorts = cfg.development.openPorts.portsToOpen;
      };
    })
    
    (lib.mkIf (cfg.appwrite.enable) {
      virtualisation.oci-containers.containers = {
        appwrite = {
          image = "appwrite/appwrite:latest";
          imageFile = pkgs.dockerTools.pullImage {
            imageName = "appwrite/appwrite";
            imageDigest = "sha256:269f8953594890a62f015e29c6343f7f2119468180d0dcecdfdc331bcbadf845";
            sha256 = "0fqlikyjkzvwhv6p54yxhb7ag4l2i08rpkkb78asq22m9b3irhvh";
          };
          entrypoint = "install";
          volumes = [
            "/var/run/docker.sock:/var/run/docker.sock"
            "${cfg.appwrite.docker-directory}/lwt_appwrite:/usr/src/code/appwrite:rw"
          ];
          autoStart = true; # Ensure the container starts automatically.
          
          # Set environment variables (https://appwrite.io/docs/advanced/self-hosting/environment-variables)
          environment = {
            _APP_ENV = "development"; # 'production' or, default is 'development'
            _APP_OPTIONS_FORCE_HTTPS = "enabled";
            _APP_DOMAIN = "localhost";
            _APP_DOMAIN_TARGET = "localhost";
            _APP_OPENSSL_KEY_V1 = "my_identity"; # Replace with your secret API key
            _APP_SYSTEM_SECURITY_EMAIL_ADDRESS = "yesheysangpo@gmail.com";

            # Ports (these are not environment variables but for clarity)
            # HTTP_PORT = "80"; # Not used directly by Appwrite but included for reference
            # HTTPS_PORT = "443";
          };
        };
      };

    # Ensure the directorys exist
      systemd.services.appwrite-mgr = {
        enable = true;
        path = [ ];
        script = ''
  WORKING_DIR=${cfg.appwrite.docker-directory}/lwt_appwrite
  CERT_CHANGED=false

  echo "Ensuring working directory exists..."
  if [ ! -d $WORKING_DIR ]; then
    mkdir -p $WORKING_DIR
  fi
  '';
        wantedBy = [ "multi-user.target" ]; # Run after system boot
        serviceConfig = {
          Type = "oneshot";
          User = "root";
        };
      };

    })

  ];

}
