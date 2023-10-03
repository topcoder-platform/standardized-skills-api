#!/bin/bash
set -eo pipefail
APP_NAME=$1
docker build --no-cache=true -f docker/Dockerfile -t $APP_NAME:latest .