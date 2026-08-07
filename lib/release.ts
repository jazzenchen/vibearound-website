export const latestRelease = {
  tag: "v0.7.24",
  version: "0.7.24",
  displayVersion: "v0.7.24",
  releaseUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.24",
  latestUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.24",
  publishedAt: "2026-08-07T01:50:18Z",
  starFallback: 398,
  downloads: {
    macosAppleSilicon:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.24/VibeAround-macOS-arm64-0.7.24.dmg",
    windowsSetupX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.24/VibeAround-Windows-x64-Setup-0.7.24.exe",
    windowsMsiX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.24/VibeAround-Windows-x64-MSI-0.7.24.msi",
    windowsPortableX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.24/VibeAround-Windows-x64-Portable-0.7.24.zip",
    linuxAppImageX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.24/VibeAround-Linux-x64-AppImage-0.7.24.AppImage",
    linuxDebX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.24/VibeAround-Linux-x64-DEB-0.7.24.deb",
  },
} as const;

export const downloadTargets = {
  default: latestRelease.latestUrl,
  mac: latestRelease.downloads.macosAppleSilicon,
  windows: latestRelease.downloads.windowsSetupX64,
  linux: latestRelease.downloads.linuxAppImageX64,
} as const;
