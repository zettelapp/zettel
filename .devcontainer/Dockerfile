FROM mcr.microsoft.com/vscode/devcontainers/base:0-ubuntu-22.04

ARG TAURI_DEPS="build-essential curl libappindicator3-dev libgtk-3-dev librsvg2-dev libssl-dev libwebkit2gtk-4.1-dev wget libwebkit2gtk-4.0-dev libcanberra-gtk-module libcanberra-gtk3-module"
ARG CYPRESS_DEPS="libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb"
ARG USER="vscode"

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update
RUN apt-get install -y --no-install-recommends ${TAURI_DEPS}
RUN apt-get install -y --no-install-recommends ${CYPRESS_DEPS}