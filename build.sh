#!/bin/bash
set -eo pipefail
APP_NAME=$1
docker build --no-cache=true -f Dockerfile -t $APP_NAME:latest .