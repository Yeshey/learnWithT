# Auto-generated using compose2nix v0.3.2-pre.
# generated with:
# nix run github:aksiksi/compose2nix -- --env_files=/opt/docker/lwt_appwrite/appwrite/.env --include_env_files=true --project=learnwitht --runtime "docker" --output /mnt/DataDisk/Downloads/dockerlearnWithT.nix
{ pkgs, lib, ... }:

{
  # Runtime
  virtualisation.docker = {
    enable = true;
    autoPrune.enable = true;
  };
  virtualisation.oci-containers.backend = "docker";

  # Containers
  virtualisation.oci-containers.containers."appwrite" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_ASSISTANT_OPENAI_API_KEY" = "";
      "_APP_CONSOLE_HOSTNAMES" = "";
      "_APP_CONSOLE_SESSION_ALERTS" = "disabled";
      "_APP_CONSOLE_WHITELIST_EMAILS" = "";
      "_APP_CONSOLE_WHITELIST_IPS" = "";
      "_APP_CONSOLE_WHITELIST_ROOT" = "enabled";
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_DOMAIN" = "localhost";
      "_APP_DOMAIN_FUNCTIONS" = "functions.localhost";
      "_APP_DOMAIN_TARGET" = "localhost";
      "_APP_EMAIL_SECURITY" = "";
      "_APP_ENV" = "production";
      "_APP_EXECUTOR_HOST" = "http://exc1/v1";
      "_APP_EXECUTOR_SECRET" = "your-secret-key";
      "_APP_FUNCTIONS_BUILD_TIMEOUT" = "900";
      "_APP_FUNCTIONS_CPUS" = "0";
      "_APP_FUNCTIONS_MEMORY" = "0";
      "_APP_FUNCTIONS_RUNTIMES" = "node-16.0,php-8.0,python-3.9,ruby-3.0";
      "_APP_FUNCTIONS_SIZE_LIMIT" = "30000000";
      "_APP_FUNCTIONS_TIMEOUT" = "900";
      "_APP_GRAPHQL_MAX_BATCH_SIZE" = "10";
      "_APP_GRAPHQL_MAX_COMPLEXITY" = "250";
      "_APP_GRAPHQL_MAX_DEPTH" = "3";
      "_APP_LOCALE" = "en";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_MAINTENANCE_DELAY" = "0";
      "_APP_MAINTENANCE_INTERVAL" = "86400";
      "_APP_MAINTENANCE_RETENTION_ABUSE" = "86400";
      "_APP_MAINTENANCE_RETENTION_AUDIT" = "1209600";
      "_APP_MAINTENANCE_RETENTION_CACHE" = "2592000";
      "_APP_MAINTENANCE_RETENTION_EXECUTION" = "1209600";
      "_APP_MAINTENANCE_RETENTION_SCHEDULES" = "86400";
      "_APP_MAINTENANCE_RETENTION_USAGE_HOURLY" = "8640000";
      "_APP_MIGRATIONS_FIREBASE_CLIENT_ID" = "";
      "_APP_MIGRATIONS_FIREBASE_CLIENT_SECRET" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_OPTIONS_ABUSE" = "enabled";
      "_APP_OPTIONS_FORCE_HTTPS" = "disabled";
      "_APP_OPTIONS_FUNCTIONS_FORCE_HTTPS" = "disabled";
      "_APP_OPTIONS_ROUTER_PROTECTION" = "disabled";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_SMS_FROM" = "";
      "_APP_SMS_PROVIDER" = "";
      "_APP_SMTP_HOST" = "";
      "_APP_SMTP_PASSWORD" = "";
      "_APP_SMTP_PORT" = "";
      "_APP_SMTP_SECURE" = "";
      "_APP_SMTP_USERNAME" = "";
      "_APP_STORAGE_ANTIVIRUS" = "disabled";
      "_APP_STORAGE_ANTIVIRUS_HOST" = "clamav";
      "_APP_STORAGE_ANTIVIRUS_PORT" = "3310";
      "_APP_STORAGE_BACKBLAZE_ACCESS_KEY" = "";
      "_APP_STORAGE_BACKBLAZE_BUCKET" = "";
      "_APP_STORAGE_BACKBLAZE_REGION" = "us-west-004";
      "_APP_STORAGE_BACKBLAZE_SECRET" = "";
      "_APP_STORAGE_DEVICE" = "local";
      "_APP_STORAGE_DO_SPACES_ACCESS_KEY" = "";
      "_APP_STORAGE_DO_SPACES_BUCKET" = "";
      "_APP_STORAGE_DO_SPACES_REGION" = "us-east-1";
      "_APP_STORAGE_DO_SPACES_SECRET" = "";
      "_APP_STORAGE_LIMIT" = "30000000";
      "_APP_STORAGE_LINODE_ACCESS_KEY" = "";
      "_APP_STORAGE_LINODE_BUCKET" = "";
      "_APP_STORAGE_LINODE_REGION" = "eu-central-1";
      "_APP_STORAGE_LINODE_SECRET" = "";
      "_APP_STORAGE_PREVIEW_LIMIT" = "20000000";
      "_APP_STORAGE_S3_ACCESS_KEY" = "";
      "_APP_STORAGE_S3_BUCKET" = "";
      "_APP_STORAGE_S3_REGION" = "us-east-1";
      "_APP_STORAGE_S3_SECRET" = "";
      "_APP_STORAGE_WASABI_ACCESS_KEY" = "";
      "_APP_STORAGE_WASABI_BUCKET" = "";
      "_APP_STORAGE_WASABI_REGION" = "eu-central-1";
      "_APP_STORAGE_WASABI_SECRET" = "";
      "_APP_SYSTEM_EMAIL_ADDRESS" = "noreply@appwrite.io";
      "_APP_SYSTEM_EMAIL_NAME" = "Appwrite";
      "_APP_SYSTEM_RESPONSE_FORMAT" = "";
      "_APP_USAGE_STATS" = "enabled";
      "_APP_VCS_GITHUB_APP_ID" = "";
      "_APP_VCS_GITHUB_APP_NAME" = "";
      "_APP_VCS_GITHUB_CLIENT_ID" = "";
      "_APP_VCS_GITHUB_CLIENT_SECRET" = "";
      "_APP_VCS_GITHUB_PRIVATE_KEY" = "";
      "_APP_VCS_GITHUB_WEBHOOK_SECRET" = "";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    volumes = [
      "learnwitht_appwrite-cache:/storage/cache:rw"
      "learnwitht_appwrite-certificates:/storage/certificates:rw"
      "learnwitht_appwrite-config:/storage/config:rw"
      "learnwitht_appwrite-functions:/storage/functions:rw"
      "learnwitht_appwrite-uploads:/storage/uploads:rw"
    ];
    labels = {
      "traefik.constraint-label-stack" = "appwrite";
      "traefik.docker.network" = "appwrite";
      "traefik.enable" = "true";
      "traefik.http.routers.appwrite_api_http.entrypoints" = "appwrite_web";
      "traefik.http.routers.appwrite_api_http.rule" = "PathPrefix(`/`)";
      "traefik.http.routers.appwrite_api_http.service" = "appwrite_api";
      "traefik.http.routers.appwrite_api_https.entrypoints" = "appwrite_websecure";
      "traefik.http.routers.appwrite_api_https.rule" = "PathPrefix(`/`)";
      "traefik.http.routers.appwrite_api_https.service" = "appwrite_api";
      "traefik.http.routers.appwrite_api_https.tls" = "true";
      "traefik.http.services.appwrite_api.loadbalancer.server.port" = "80";
    };
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--network-alias=appwrite"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-cache.service"
      "docker-volume-learnwitht_appwrite-certificates.service"
      "docker-volume-learnwitht_appwrite-config.service"
      "docker-volume-learnwitht_appwrite-functions.service"
      "docker-volume-learnwitht_appwrite-uploads.service"
    ];
    requires = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-cache.service"
      "docker-volume-learnwitht_appwrite-certificates.service"
      "docker-volume-learnwitht_appwrite-config.service"
      "docker-volume-learnwitht_appwrite-functions.service"
      "docker-volume-learnwitht_appwrite-uploads.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-assistant" = {
    image = "appwrite/assistant:0.4.0";
    environment = {
      "_APP_ASSISTANT_OPENAI_API_KEY" = "";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    log-driver = "journald";
    extraOptions = [
      "--network-alias=appwrite-assistant"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-assistant" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-console" = {
    image = "appwrite/console:5.0.12";
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    labels = {
      "traefik.constraint-label-stack" = "appwrite";
      "traefik.docker.network" = "appwrite";
      "traefik.enable" = "true";
      "traefik.http.routers.appwrite_console_http.entrypoints" = "appwrite_web";
      "traefik.http.routers.appwrite_console_http.rule" = "PathPrefix(`/console`)";
      "traefik.http.routers.appwrite_console_http.service" = "appwrite_console";
      "traefik.http.routers.appwrite_console_https.entrypoints" = "appwrite_websecure";
      "traefik.http.routers.appwrite_console_https.rule" = "PathPrefix(`/console`)";
      "traefik.http.routers.appwrite_console_https.service" = "appwrite_console";
      "traefik.http.routers.appwrite_console_https.tls" = "true";
      "traefik.http.services.appwrite_console.loadbalancer.server.port" = "80";
    };
    log-driver = "journald";
    extraOptions = [
      "--network-alias=appwrite-console"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-console" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-mariadb" = {
    image = "mariadb:10.11";
    environment = {
      "MARIADB_AUTO_UPGRADE" = "1";
      "MYSQL_DATABASE" = "appwrite";
      "MYSQL_PASSWORD" = "password";
      "MYSQL_ROOT_PASSWORD" = "rootsecretpassword";
      "MYSQL_USER" = "user";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    volumes = [
      "learnwitht_appwrite-mariadb:/var/lib/mysql:rw"
    ];
    cmd = [ "mysqld" "--innodb-flush-method=fsync" ];
    log-driver = "journald";
    extraOptions = [
      "--network-alias=mariadb"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-mariadb" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-mariadb.service"
    ];
    requires = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-mariadb.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-realtime" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_ENV" = "production";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_OPTIONS_ABUSE" = "enabled";
      "_APP_OPTIONS_ROUTER_PROTECTION" = "disabled";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_USAGE_STATS" = "enabled";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    labels = {
      "traefik.constraint-label-stack" = "appwrite";
      "traefik.docker.network" = "appwrite";
      "traefik.enable" = "true";
      "traefik.http.routers.appwrite_realtime_ws.entrypoints" = "appwrite_web";
      "traefik.http.routers.appwrite_realtime_ws.rule" = "PathPrefix(`/v1/realtime`)";
      "traefik.http.routers.appwrite_realtime_ws.service" = "appwrite_realtime";
      "traefik.http.routers.appwrite_realtime_wss.entrypoints" = "appwrite_websecure";
      "traefik.http.routers.appwrite_realtime_wss.rule" = "PathPrefix(`/v1/realtime`)";
      "traefik.http.routers.appwrite_realtime_wss.service" = "appwrite_realtime";
      "traefik.http.routers.appwrite_realtime_wss.tls" = "true";
      "traefik.http.services.appwrite_realtime.loadbalancer.server.port" = "80";
    };
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"realtime\"]"
      "--network-alias=appwrite-realtime"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-realtime" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-redis" = {
    image = "redis:7.2.4-alpine";
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    volumes = [
      "learnwitht_appwrite-redis:/data:rw"
    ];
    cmd = [ "redis-server" "--maxmemory" "512mb" "--maxmemory-policy" "allkeys-lru" "--maxmemory-samples" "5" ];
    log-driver = "journald";
    extraOptions = [
      "--network-alias=redis"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-redis" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-redis.service"
    ];
    requires = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-redis.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-task-maintenance" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_DOMAIN" = "localhost";
      "_APP_DOMAIN_FUNCTIONS" = "functions.localhost";
      "_APP_DOMAIN_TARGET" = "localhost";
      "_APP_ENV" = "production";
      "_APP_MAINTENANCE_INTERVAL" = "86400";
      "_APP_MAINTENANCE_RETENTION_ABUSE" = "86400";
      "_APP_MAINTENANCE_RETENTION_AUDIT" = "1209600";
      "_APP_MAINTENANCE_RETENTION_CACHE" = "2592000";
      "_APP_MAINTENANCE_RETENTION_EXECUTION" = "1209600";
      "_APP_MAINTENANCE_RETENTION_SCHEDULES" = "86400";
      "_APP_MAINTENANCE_RETENTION_USAGE_HOURLY" = "8640000";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    dependsOn = [
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"maintenance\"]"
      "--network-alias=appwrite-task-maintenance"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-task-maintenance" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-task-scheduler-executions" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_ENV" = "production";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"schedule-executions\"]"
      "--network-alias=appwrite-task-scheduler-executions"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-task-scheduler-executions" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-task-scheduler-functions" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_ENV" = "production";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"schedule-functions\"]"
      "--network-alias=appwrite-task-scheduler-functions"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-task-scheduler-functions" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-task-scheduler-messages" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_ENV" = "production";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"schedule-messages\"]"
      "--network-alias=appwrite-task-scheduler-messages"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-task-scheduler-messages" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-traefik" = {
    image = "traefik:2.11";
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    volumes = [
      "/var/run/docker.sock:/var/run/docker.sock:rw"
      "learnwitht_appwrite-certificates:/storage/certificates:ro"
      "learnwitht_appwrite-config:/storage/config:ro"
    ];
    ports = [
      "80:80/tcp"
      "443:443/tcp"
    ];
    cmd = [ "--providers.file.directory=/storage/config" "--providers.file.watch=true" "--providers.docker=true" "--providers.docker.exposedByDefault=false" "--providers.docker.constraints=Label(`traefik.constraint-label-stack`,`appwrite`)" "--entrypoints.appwrite_web.address=:80" "--entrypoints.appwrite_websecure.address=:443" ];
    dependsOn = [
      "appwrite"
    ];
    log-driver = "journald";
    extraOptions = [
      "--network-alias=traefik"
      "--network=appwrite"
      "--network=gateway"
    ];
  };
  systemd.services."docker-appwrite-traefik" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
      "docker-network-gateway.service"
      "docker-volume-learnwitht_appwrite-certificates.service"
      "docker-volume-learnwitht_appwrite-config.service"
    ];
    requires = [
      "docker-network-appwrite.service"
      "docker-network-gateway.service"
      "docker-volume-learnwitht_appwrite-certificates.service"
      "docker-volume-learnwitht_appwrite-config.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-worker-audits" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_ENV" = "production";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"worker-audits\"]"
      "--network-alias=appwrite-worker-audits"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-worker-audits" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-worker-builds" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_DOMAIN" = "localhost";
      "_APP_ENV" = "production";
      "_APP_EXECUTOR_HOST" = "http://exc1/v1";
      "_APP_EXECUTOR_SECRET" = "your-secret-key";
      "_APP_FUNCTIONS_BUILD_TIMEOUT" = "900";
      "_APP_FUNCTIONS_CPUS" = "0";
      "_APP_FUNCTIONS_MEMORY" = "0";
      "_APP_FUNCTIONS_SIZE_LIMIT" = "30000000";
      "_APP_FUNCTIONS_TIMEOUT" = "900";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_OPTIONS_FORCE_HTTPS" = "disabled";
      "_APP_OPTIONS_FUNCTIONS_FORCE_HTTPS" = "disabled";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_STORAGE_BACKBLAZE_ACCESS_KEY" = "";
      "_APP_STORAGE_BACKBLAZE_BUCKET" = "";
      "_APP_STORAGE_BACKBLAZE_REGION" = "us-west-004";
      "_APP_STORAGE_BACKBLAZE_SECRET" = "";
      "_APP_STORAGE_DEVICE" = "local";
      "_APP_STORAGE_DO_SPACES_ACCESS_KEY" = "";
      "_APP_STORAGE_DO_SPACES_BUCKET" = "";
      "_APP_STORAGE_DO_SPACES_REGION" = "us-east-1";
      "_APP_STORAGE_DO_SPACES_SECRET" = "";
      "_APP_STORAGE_LINODE_ACCESS_KEY" = "";
      "_APP_STORAGE_LINODE_BUCKET" = "";
      "_APP_STORAGE_LINODE_REGION" = "eu-central-1";
      "_APP_STORAGE_LINODE_SECRET" = "";
      "_APP_STORAGE_S3_ACCESS_KEY" = "";
      "_APP_STORAGE_S3_BUCKET" = "";
      "_APP_STORAGE_S3_REGION" = "us-east-1";
      "_APP_STORAGE_S3_SECRET" = "";
      "_APP_STORAGE_WASABI_ACCESS_KEY" = "";
      "_APP_STORAGE_WASABI_BUCKET" = "";
      "_APP_STORAGE_WASABI_REGION" = "eu-central-1";
      "_APP_STORAGE_WASABI_SECRET" = "";
      "_APP_VCS_GITHUB_APP_ID" = "";
      "_APP_VCS_GITHUB_APP_NAME" = "";
      "_APP_VCS_GITHUB_PRIVATE_KEY" = "";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    volumes = [
      "learnwitht_appwrite-builds:/storage/builds:rw"
      "learnwitht_appwrite-functions:/storage/functions:rw"
    ];
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"worker-builds\"]"
      "--network-alias=appwrite-worker-builds"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-worker-builds" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-builds.service"
      "docker-volume-learnwitht_appwrite-functions.service"
    ];
    requires = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-builds.service"
      "docker-volume-learnwitht_appwrite-functions.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-worker-certificates" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_DOMAIN" = "localhost";
      "_APP_DOMAIN_FUNCTIONS" = "functions.localhost";
      "_APP_DOMAIN_TARGET" = "localhost";
      "_APP_EMAIL_CERTIFICATES" = "";
      "_APP_ENV" = "production";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    volumes = [
      "learnwitht_appwrite-certificates:/storage/certificates:rw"
      "learnwitht_appwrite-config:/storage/config:rw"
    ];
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"worker-certificates\"]"
      "--network-alias=appwrite-worker-certificates"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-worker-certificates" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-certificates.service"
      "docker-volume-learnwitht_appwrite-config.service"
    ];
    requires = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-certificates.service"
      "docker-volume-learnwitht_appwrite-config.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-worker-databases" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_ENV" = "production";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"worker-databases\"]"
      "--network-alias=appwrite-worker-databases"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-worker-databases" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-worker-deletes" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_ENV" = "production";
      "_APP_EXECUTOR_HOST" = "http://exc1/v1";
      "_APP_EXECUTOR_SECRET" = "your-secret-key";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_MAINTENANCE_RETENTION_ABUSE" = "86400";
      "_APP_MAINTENANCE_RETENTION_AUDIT" = "1209600";
      "_APP_MAINTENANCE_RETENTION_EXECUTION" = "1209600";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_STORAGE_BACKBLAZE_ACCESS_KEY" = "";
      "_APP_STORAGE_BACKBLAZE_BUCKET" = "";
      "_APP_STORAGE_BACKBLAZE_REGION" = "us-west-004";
      "_APP_STORAGE_BACKBLAZE_SECRET" = "";
      "_APP_STORAGE_DEVICE" = "local";
      "_APP_STORAGE_DO_SPACES_ACCESS_KEY" = "";
      "_APP_STORAGE_DO_SPACES_BUCKET" = "";
      "_APP_STORAGE_DO_SPACES_REGION" = "us-east-1";
      "_APP_STORAGE_DO_SPACES_SECRET" = "";
      "_APP_STORAGE_LINODE_ACCESS_KEY" = "";
      "_APP_STORAGE_LINODE_BUCKET" = "";
      "_APP_STORAGE_LINODE_REGION" = "eu-central-1";
      "_APP_STORAGE_LINODE_SECRET" = "";
      "_APP_STORAGE_S3_ACCESS_KEY" = "";
      "_APP_STORAGE_S3_BUCKET" = "";
      "_APP_STORAGE_S3_REGION" = "us-east-1";
      "_APP_STORAGE_S3_SECRET" = "";
      "_APP_STORAGE_WASABI_ACCESS_KEY" = "";
      "_APP_STORAGE_WASABI_BUCKET" = "";
      "_APP_STORAGE_WASABI_REGION" = "eu-central-1";
      "_APP_STORAGE_WASABI_SECRET" = "";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    volumes = [
      "learnwitht_appwrite-builds:/storage/builds:rw"
      "learnwitht_appwrite-cache:/storage/cache:rw"
      "learnwitht_appwrite-certificates:/storage/certificates:rw"
      "learnwitht_appwrite-functions:/storage/functions:rw"
      "learnwitht_appwrite-uploads:/storage/uploads:rw"
    ];
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"worker-deletes\"]"
      "--network-alias=appwrite-worker-deletes"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-worker-deletes" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-builds.service"
      "docker-volume-learnwitht_appwrite-cache.service"
      "docker-volume-learnwitht_appwrite-certificates.service"
      "docker-volume-learnwitht_appwrite-functions.service"
      "docker-volume-learnwitht_appwrite-uploads.service"
    ];
    requires = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-builds.service"
      "docker-volume-learnwitht_appwrite-cache.service"
      "docker-volume-learnwitht_appwrite-certificates.service"
      "docker-volume-learnwitht_appwrite-functions.service"
      "docker-volume-learnwitht_appwrite-uploads.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-worker-functions" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_DOCKER_HUB_PASSWORD" = "";
      "_APP_DOCKER_HUB_USERNAME" = "";
      "_APP_DOMAIN" = "localhost";
      "_APP_ENV" = "production";
      "_APP_EXECUTOR_HOST" = "http://exc1/v1";
      "_APP_EXECUTOR_SECRET" = "your-secret-key";
      "_APP_FUNCTIONS_BUILD_TIMEOUT" = "900";
      "_APP_FUNCTIONS_CPUS" = "0";
      "_APP_FUNCTIONS_MEMORY" = "0";
      "_APP_FUNCTIONS_TIMEOUT" = "900";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_OPTIONS_FORCE_HTTPS" = "disabled";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_USAGE_STATS" = "enabled";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
      "openruntimes-executor"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"worker-functions\"]"
      "--network-alias=appwrite-worker-functions"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-worker-functions" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-worker-mails" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_ENV" = "production";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_SMTP_HOST" = "";
      "_APP_SMTP_PASSWORD" = "";
      "_APP_SMTP_PORT" = "";
      "_APP_SMTP_SECURE" = "";
      "_APP_SMTP_USERNAME" = "";
      "_APP_SYSTEM_EMAIL_ADDRESS" = "noreply@appwrite.io";
      "_APP_SYSTEM_EMAIL_NAME" = "Appwrite";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    dependsOn = [
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"worker-mails\"]"
      "--network-alias=appwrite-worker-mails"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-worker-mails" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-worker-messaging" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_ENV" = "production";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_SMS_FROM" = "";
      "_APP_SMS_PROVIDER" = "";
      "_APP_STORAGE_BACKBLAZE_ACCESS_KEY" = "";
      "_APP_STORAGE_BACKBLAZE_BUCKET" = "";
      "_APP_STORAGE_BACKBLAZE_REGION" = "us-west-004";
      "_APP_STORAGE_BACKBLAZE_SECRET" = "";
      "_APP_STORAGE_DEVICE" = "local";
      "_APP_STORAGE_DO_SPACES_ACCESS_KEY" = "";
      "_APP_STORAGE_DO_SPACES_BUCKET" = "";
      "_APP_STORAGE_DO_SPACES_REGION" = "us-east-1";
      "_APP_STORAGE_DO_SPACES_SECRET" = "";
      "_APP_STORAGE_LINODE_ACCESS_KEY" = "";
      "_APP_STORAGE_LINODE_BUCKET" = "";
      "_APP_STORAGE_LINODE_REGION" = "eu-central-1";
      "_APP_STORAGE_LINODE_SECRET" = "";
      "_APP_STORAGE_S3_ACCESS_KEY" = "";
      "_APP_STORAGE_S3_BUCKET" = "";
      "_APP_STORAGE_S3_REGION" = "us-east-1";
      "_APP_STORAGE_S3_SECRET" = "";
      "_APP_STORAGE_WASABI_ACCESS_KEY" = "";
      "_APP_STORAGE_WASABI_BUCKET" = "";
      "_APP_STORAGE_WASABI_REGION" = "eu-central-1";
      "_APP_STORAGE_WASABI_SECRET" = "";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    volumes = [
      "learnwitht_appwrite-uploads:/storage/uploads:rw"
    ];
    dependsOn = [
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"worker-messaging\"]"
      "--network-alias=appwrite-worker-messaging"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-worker-messaging" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-uploads.service"
    ];
    requires = [
      "docker-network-appwrite.service"
      "docker-volume-learnwitht_appwrite-uploads.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-worker-migrations" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_DOMAIN" = "localhost";
      "_APP_DOMAIN_TARGET" = "localhost";
      "_APP_EMAIL_SECURITY" = "";
      "_APP_ENV" = "production";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_MIGRATIONS_FIREBASE_CLIENT_ID" = "";
      "_APP_MIGRATIONS_FIREBASE_CLIENT_SECRET" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    dependsOn = [
      "appwrite-mariadb"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"worker-migrations\"]"
      "--network-alias=appwrite-worker-migrations"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-worker-migrations" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-worker-usage" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_ENV" = "production";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_USAGE_AGGREGATION_INTERVAL" = "30";
      "_APP_USAGE_STATS" = "enabled";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"worker-usage\"]"
      "--network-alias=appwrite-worker-usage"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-worker-usage" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-worker-usage-dump" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_ENV" = "production";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_USAGE_AGGREGATION_INTERVAL" = "30";
      "_APP_USAGE_STATS" = "enabled";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"worker-usage-dump\"]"
      "--network-alias=appwrite-worker-usage-dump"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-worker-usage-dump" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "no";
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."appwrite-worker-webhooks" = {
    image = "appwrite/appwrite:1.6.0";
    environment = {
      "_APP_DB_HOST" = "mariadb";
      "_APP_DB_PASS" = "password";
      "_APP_DB_PORT" = "3306";
      "_APP_DB_SCHEMA" = "appwrite";
      "_APP_DB_USER" = "user";
      "_APP_EMAIL_SECURITY" = "";
      "_APP_ENV" = "production";
      "_APP_LOGGING_CONFIG" = "";
      "_APP_OPENSSL_KEY_V1" = "your-secret-key";
      "_APP_REDIS_HOST" = "redis";
      "_APP_REDIS_PASS" = "";
      "_APP_REDIS_PORT" = "6379";
      "_APP_REDIS_USER" = "";
      "_APP_SYSTEM_SECURITY_EMAIL_ADDRESS" = "certs@appwrite.io";
      "_APP_WORKER_PER_CORE" = "6";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    dependsOn = [
      "appwrite-mariadb"
      "appwrite-redis"
    ];
    log-driver = "journald";
    extraOptions = [
      "--entrypoint=[\"worker-webhooks\"]"
      "--network-alias=appwrite-worker-webhooks"
      "--network=appwrite"
    ];
  };
  systemd.services."docker-appwrite-worker-webhooks" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
    ];
    requires = [
      "docker-network-appwrite.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };
  virtualisation.oci-containers.containers."openruntimes-executor" = {
    image = "openruntimes/executor:0.6.11";
    environment = {
      "OPR_EXECUTOR_DOCKER_HUB_PASSWORD" = "";
      "OPR_EXECUTOR_DOCKER_HUB_USERNAME" = "";
      "OPR_EXECUTOR_ENV" = "production";
      "OPR_EXECUTOR_INACTIVE_TRESHOLD" = "60";
      "OPR_EXECUTOR_LOGGING_CONFIG" = "";
      "OPR_EXECUTOR_MAINTENANCE_INTERVAL" = "3600";
      "OPR_EXECUTOR_NETWORK" = "runtimes";
      "OPR_EXECUTOR_RUNTIMES" = "node-16.0,php-8.0,python-3.9,ruby-3.0";
      "OPR_EXECUTOR_SECRET" = "your-secret-key";
      "OPR_EXECUTOR_STORAGE_BACKBLAZE_ACCESS_KEY" = "";
      "OPR_EXECUTOR_STORAGE_BACKBLAZE_BUCKET" = "";
      "OPR_EXECUTOR_STORAGE_BACKBLAZE_REGION" = "us-west-004";
      "OPR_EXECUTOR_STORAGE_BACKBLAZE_SECRET" = "";
      "OPR_EXECUTOR_STORAGE_DEVICE" = "local";
      "OPR_EXECUTOR_STORAGE_DO_SPACES_ACCESS_KEY" = "";
      "OPR_EXECUTOR_STORAGE_DO_SPACES_BUCKET" = "";
      "OPR_EXECUTOR_STORAGE_DO_SPACES_REGION" = "us-east-1";
      "OPR_EXECUTOR_STORAGE_DO_SPACES_SECRET" = "";
      "OPR_EXECUTOR_STORAGE_LINODE_ACCESS_KEY" = "";
      "OPR_EXECUTOR_STORAGE_LINODE_BUCKET" = "";
      "OPR_EXECUTOR_STORAGE_LINODE_REGION" = "eu-central-1";
      "OPR_EXECUTOR_STORAGE_LINODE_SECRET" = "";
      "OPR_EXECUTOR_STORAGE_S3_ACCESS_KEY" = "";
      "OPR_EXECUTOR_STORAGE_S3_BUCKET" = "";
      "OPR_EXECUTOR_STORAGE_S3_REGION" = "us-east-1";
      "OPR_EXECUTOR_STORAGE_S3_SECRET" = "";
      "OPR_EXECUTOR_STORAGE_WASABI_ACCESS_KEY" = "";
      "OPR_EXECUTOR_STORAGE_WASABI_BUCKET" = "";
      "OPR_EXECUTOR_STORAGE_WASABI_REGION" = "eu-central-1";
      "OPR_EXECUTOR_STORAGE_WASABI_SECRET" = "";
    };
    environmentFiles = [
      "/opt/docker/lwt_appwrite/appwrite/.env"
    ];
    volumes = [
      "/tmp:/tmp:rw"
      "/var/run/docker.sock:/var/run/docker.sock:rw"
      "learnwitht_appwrite-builds:/storage/builds:rw"
      "learnwitht_appwrite-functions:/storage/functions:rw"
    ];
    log-driver = "journald";
    extraOptions = [
      "--hostname=exc1"
      "--network-alias=openruntimes-executor"
      "--network=appwrite"
      "--network=runtimes"
    ];
  };
  systemd.services."docker-openruntimes-executor" = {
    serviceConfig = {
      Restart = lib.mkOverride 90 "always";
      RestartMaxDelaySec = lib.mkOverride 90 "1m";
      RestartSec = lib.mkOverride 90 "100ms";
      RestartSteps = lib.mkOverride 90 9;
    };
    after = [
      "docker-network-appwrite.service"
      "docker-network-runtimes.service"
      "docker-volume-learnwitht_appwrite-builds.service"
      "docker-volume-learnwitht_appwrite-functions.service"
    ];
    requires = [
      "docker-network-appwrite.service"
      "docker-network-runtimes.service"
      "docker-volume-learnwitht_appwrite-builds.service"
      "docker-volume-learnwitht_appwrite-functions.service"
    ];
    partOf = [
      "docker-compose-learnwitht-root.target"
    ];
    wantedBy = [
      "docker-compose-learnwitht-root.target"
    ];
  };

  # Networks
  systemd.services."docker-network-appwrite" = {
    path = [ pkgs.docker ];
    serviceConfig = {
      Type = "oneshot";
      RemainAfterExit = true;
      ExecStop = "docker network rm -f appwrite";
    };
    script = ''
      docker network inspect appwrite || docker network create appwrite
    '';
    partOf = [ "docker-compose-learnwitht-root.target" ];
    wantedBy = [ "docker-compose-learnwitht-root.target" ];
  };
  systemd.services."docker-network-gateway" = {
    path = [ pkgs.docker ];
    serviceConfig = {
      Type = "oneshot";
      RemainAfterExit = true;
      ExecStop = "docker network rm -f gateway";
    };
    script = ''
      docker network inspect gateway || docker network create gateway
    '';
    partOf = [ "docker-compose-learnwitht-root.target" ];
    wantedBy = [ "docker-compose-learnwitht-root.target" ];
  };
  systemd.services."docker-network-runtimes" = {
    path = [ pkgs.docker ];
    serviceConfig = {
      Type = "oneshot";
      RemainAfterExit = true;
      ExecStop = "docker network rm -f runtimes";
    };
    script = ''
      docker network inspect runtimes || docker network create runtimes
    '';
    partOf = [ "docker-compose-learnwitht-root.target" ];
    wantedBy = [ "docker-compose-learnwitht-root.target" ];
  };

  # Volumes
  systemd.services."docker-volume-learnwitht_appwrite-builds" = {
    path = [ pkgs.docker ];
    serviceConfig = {
      Type = "oneshot";
      RemainAfterExit = true;
    };
    script = ''
      docker volume inspect learnwitht_appwrite-builds || docker volume create learnwitht_appwrite-builds
    '';
    partOf = [ "docker-compose-learnwitht-root.target" ];
    wantedBy = [ "docker-compose-learnwitht-root.target" ];
  };
  systemd.services."docker-volume-learnwitht_appwrite-cache" = {
    path = [ pkgs.docker ];
    serviceConfig = {
      Type = "oneshot";
      RemainAfterExit = true;
    };
    script = ''
      docker volume inspect learnwitht_appwrite-cache || docker volume create learnwitht_appwrite-cache
    '';
    partOf = [ "docker-compose-learnwitht-root.target" ];
    wantedBy = [ "docker-compose-learnwitht-root.target" ];
  };
  systemd.services."docker-volume-learnwitht_appwrite-certificates" = {
    path = [ pkgs.docker ];
    serviceConfig = {
      Type = "oneshot";
      RemainAfterExit = true;
    };
    script = ''
      docker volume inspect learnwitht_appwrite-certificates || docker volume create learnwitht_appwrite-certificates
    '';
    partOf = [ "docker-compose-learnwitht-root.target" ];
    wantedBy = [ "docker-compose-learnwitht-root.target" ];
  };
  systemd.services."docker-volume-learnwitht_appwrite-config" = {
    path = [ pkgs.docker ];
    serviceConfig = {
      Type = "oneshot";
      RemainAfterExit = true;
    };
    script = ''
      docker volume inspect learnwitht_appwrite-config || docker volume create learnwitht_appwrite-config
    '';
    partOf = [ "docker-compose-learnwitht-root.target" ];
    wantedBy = [ "docker-compose-learnwitht-root.target" ];
  };
  systemd.services."docker-volume-learnwitht_appwrite-functions" = {
    path = [ pkgs.docker ];
    serviceConfig = {
      Type = "oneshot";
      RemainAfterExit = true;
    };
    script = ''
      docker volume inspect learnwitht_appwrite-functions || docker volume create learnwitht_appwrite-functions
    '';
    partOf = [ "docker-compose-learnwitht-root.target" ];
    wantedBy = [ "docker-compose-learnwitht-root.target" ];
  };
  systemd.services."docker-volume-learnwitht_appwrite-mariadb" = {
    path = [ pkgs.docker ];
    serviceConfig = {
      Type = "oneshot";
      RemainAfterExit = true;
    };
    script = ''
      docker volume inspect learnwitht_appwrite-mariadb || docker volume create learnwitht_appwrite-mariadb
    '';
    partOf = [ "docker-compose-learnwitht-root.target" ];
    wantedBy = [ "docker-compose-learnwitht-root.target" ];
  };
  systemd.services."docker-volume-learnwitht_appwrite-redis" = {
    path = [ pkgs.docker ];
    serviceConfig = {
      Type = "oneshot";
      RemainAfterExit = true;
    };
    script = ''
      docker volume inspect learnwitht_appwrite-redis || docker volume create learnwitht_appwrite-redis
    '';
    partOf = [ "docker-compose-learnwitht-root.target" ];
    wantedBy = [ "docker-compose-learnwitht-root.target" ];
  };
  systemd.services."docker-volume-learnwitht_appwrite-uploads" = {
    path = [ pkgs.docker ];
    serviceConfig = {
      Type = "oneshot";
      RemainAfterExit = true;
    };
    script = ''
      docker volume inspect learnwitht_appwrite-uploads || docker volume create learnwitht_appwrite-uploads
    '';
    partOf = [ "docker-compose-learnwitht-root.target" ];
    wantedBy = [ "docker-compose-learnwitht-root.target" ];
  };

  # Root service
  # When started, this will automatically create all resources and start
  # the containers. When stopped, this will teardown all resources.
  systemd.targets."docker-compose-learnwitht-root" = {
    unitConfig = {
      Description = "Root target generated by compose2nix.";
    };
    wantedBy = [ "multi-user.target" ];
  };
}
