export const latestRelease = {
  tag: "v0.7.14",
  version: "0.7.14",
  displayVersion: "v0.7.14",
  releaseUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.14",
  latestUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.14",
  publishedAt: "2026-07-12T17:35:20Z",
  starFallback: 398,
  downloads: {
    macosAppleSilicon:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.14/VibeAround-macOS-arm64-0.7.14.dmg",
    windowsSetupX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.14/VibeAround-Windows-x64-Setup-0.7.14.exe",
    windowsMsiX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.14/VibeAround-Windows-x64-MSI-0.7.14.msi",
    windowsPortableX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.14/VibeAround-Windows-x64-Portable-0.7.14.zip",
    linuxAppImageX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.14/VibeAround-Linux-x64-AppImage-0.7.14.AppImage",
    linuxDebX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.14/VibeAround-Linux-x64-DEB-0.7.14.deb",
  },
} as const;

export const downloadTargets = {
  default: latestRelease.latestUrl,
  mac: latestRelease.downloads.macosAppleSilicon,
  windows: latestRelease.downloads.windowsSetupX64,
  linux: latestRelease.downloads.linuxAppImageX64,
} as const;
