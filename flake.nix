# https://discourse.nixos.org/t/building-expo-react-native-android-app-on-nixos/38194/4
{
  description = "ecommerce";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    android-nixpkgs.url = "github:tadfisher/android-nixpkgs";
  };

  outputs = { self, nixpkgs, flake-utils, android-nixpkgs }@inputs: flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs {
        inherit system;
        config = {
          android_sdk.accept_license = true;
          allowUnfree = true;
        };
      };

      pinnedJDK = pkgs.jdk17;
      buildToolsVersion = "34.0.0";
      ndkVersion = "25.1.8937393";
      androidComposition = pkgs.androidenv.composeAndroidPackages {
        cmdLineToolsVersion = "8.0";
        toolsVersion = "26.1.1";
        platformToolsVersion = "34.0.4";
        buildToolsVersions = [ buildToolsVersion "33.0.1" ];
        includeEmulator = false;
        emulatorVersion = "30.3.4";
        platformVersions = [ "34" ];
        includeSources = false;
        includeSystemImages = false;
        systemImageTypes = [ "google_apis_playstore" ];
        abiVersions = [ "armeabi-v7a" "arm64-v8a" ];
        cmakeVersions = [ "3.10.2" "3.22.1" ];
        includeNDK = true;
        ndkVersions = [ ndkVersion ];
        useGoogleAPIs = false;
        useGoogleTVAddOns = false;
        includeExtras = [
          "extras;google;gcm"
        ];
      };
      sdk = androidComposition.androidsdk;
    in
    {
      devShell = pkgs.mkShell rec {
        buildInputs = with pkgs; [
          # Android
          pinnedJDK
          sdk
          pkg-config
          nodejs_23
          #nodePackages_latest.eas-cli
          microsoft-edge
          yarn
        ];

        shellHook = ''
          export LD_LIBRARY_PATH="${pkgs.libxml2.out}/lib:$LD_LIBRARY_PATH"
          EDGE_PATH=${pkgs.microsoft-edge}/bin/edge
        '';

        JAVA_HOME = pinnedJDK;
        ANDROID_SDK_ROOT = "${androidComposition.androidsdk}/libexec/android-sdk";
        ANDROID_NDK_ROOT = "${ANDROID_SDK_ROOT}/ndk-bundle";

        GRADLE_OPTS = "-Dorg.gradle.project.android.aapt2FromMavenOverride=${ANDROID_SDK_ROOT}/build-tools/${buildToolsVersion}/aapt2";
      };

    }) // {
      #nixosModules = import ./nixos.nix { inherit inputs; }; # don't get why this doesnt work at all T-T

      #nixosModules.default = import ./nixos.nix {
      #  lib = nixpkgs.lib;
      #  pkgs = import nixpkgs { system = "x86_64-linux"; };
      #  config = { }; # Or pass additional configuration if required
      #};

      nixosModules.default = { lib, pkgs, config, ... }: 
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
      };

    };
}