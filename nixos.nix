# Not being used right now because I can't I don't know T-T

{ lib, pkgs, config, ... }:

let
  cfg = config.learnWithT;
  inherit (pkgs.stdenv.hostPlatform) system;
in
{
  options.learnWithT = {
    enable = lib.mkEnableOption "Enable the Learn With T service.";

    development.openPorts = {
      enable = lib.mkOption {
        type = lib.types.bool;
        default = false;
        description = "Whether to open specific ports for the service.";
      };
      portsToOpen = lib.mkOption {
        type = lib.types.listOf lib.types.port;
        default = [ 8081 ];
        description = "List of ports to open for the service. By default opens port 8081";
      };
    };
  };

  config = lib.mkIf cfg.enable {
    networking.firewall = lib.mkIf cfg.development.openPorts.enable {
      allowedUDPPorts = cfg.development.openPorts.portsToOpen;
      allowedTCPPorts = cfg.development.openPorts.portsToOpen;
    };
  };
}
