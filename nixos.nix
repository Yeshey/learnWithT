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
    };

  };

  config = lib.mkMerge [ ( lib.mkIf ( cfg.development.openPorts.enable /*&& cfg.enable*/) {
      networking.firewall = {
        allowedUDPPorts = cfg.development.openPorts.portsToOpen;
        allowedTCPPorts = cfg.development.openPorts.portsToOpen;
      };
    })
    
    ( lib.mkIf ( cfg.appwrite.enable /*&& cfg.enable*/) {
      


    })
  ];

}
