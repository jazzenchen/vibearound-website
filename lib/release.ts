export const latestRelease = {
  tag: "v0.7.13",
  version: "0.7.13",
  displayVersion: "v0.7.13",
  releaseUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.13",
  latestUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.13",
  publishedAt: "2026-07-09T10:06:24Z",
  starFallback: 398,
  downloads: {
    macosAppleSilicon:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.13/VibeAround-macOS-arm64-0.7.13.dmg",
    windowsSetupX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.13/VibeAround-Windows-x64-Setup-0.7.13.exe",
    windowsMsiX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.13/VibeAround-Windows-x64-MSI-0.7.13.msi",
    windowsPortableX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.13/VibeAround-Windows-x64-Portable-0.7.13.zip",
    linuxAppImageX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.13/VibeAround-Linux-x64-AppImage-0.7.13.AppImage",
    linuxDebX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.13/VibeAround-Linux-x64-DEB-0.7.13.deb",
  },
} as const;

export const downloadTargets = {
  default: latestRelease.latestUrl,
  mac: latestRelease.downloads.macosAppleSilicon,
  windows: latestRelease.downloads.windowsSetupX64,
  linux: latestRelease.downloads.linuxAppImageX64,
} as const;
