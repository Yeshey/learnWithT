# Not being used right now because I can't I don't know T-T

{ lib, pkgs, config, ... }:

let
  cfg = config.learnWithT;
  inherit (pkgs.stdenv.hostPlatform) system;
in
{
  imports = [
    ./appwriteDockerCompose_docker.nix # right now I'm commenting and uncommenting
  ];

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
    
    # (lib.mkIf (cfg.appwrite.enable) (import ./appwriteDockerCompose.nix)) # would like to make this work
    (lib.mkIf (cfg.appwrite.enable) {

      systemd.timers."podman-auto-update".wantedBy = [ "timers.target" ]; # upgrade on mid night
      # networking.firewall.enable = lib.mkForce false;
      # virtualisation.docker.enable = lib.mkForce false;

      # makeDesktopItem https://discourse.nixos.org/t/proper-icon-when-using-makedesktopitem/32026
      # appwrite desktop shortcut
      environment.systemPackages =
        let   
          port = "80";
        in 
        with pkgs;
        let
          appwriteDesktopItem = makeDesktopItem {
            name = "Appwrite";
            desktopName = "Appwrite";
            genericName = "Appwrite";
            exec = ''xdg-open "http://localhost:${port}#"'';
            icon = "firefox";
            categories = [
              "GTK"
              "X-WebApps"
            ];
            mimeTypes = [
              "text/html"
              "text/xml"
              "application/xhtml_xml"
            ];
          };
        in
        [
          xdg-utils
          appwriteDesktopItem

          docker-compose
        ];

    })

  ];

}
