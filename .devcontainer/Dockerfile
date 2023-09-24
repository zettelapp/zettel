FROM mcr.microsoft.com/vscode/devcontainers/base:0-ubuntu-22.04

ARG TAURI_DEPS="build-essential curl libappindicator3-dev libgtk-3-dev librsvg2-dev libssl-dev libwebkit2gtk-4.1-dev wget libwebkit2gtk-4.0-dev libcanberra-gtk-module libcanberra-gtk3-module"
ARG USER="vscode"

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends ${TAURI_DEPS}