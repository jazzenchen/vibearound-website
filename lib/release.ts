export const latestRelease = {
  tag: "v0.7.23",
  version: "0.7.23",
  displayVersion: "v0.7.23",
  releaseUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.23",
  latestUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.23",
  publishedAt: "2026-08-05T15:50:15Z",
  starFallback: 398,
  downloads: {
    macosAppleSilicon:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.23/VibeAround-macOS-arm64-0.7.23.dmg",
    windowsSetupX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.23/VibeAround-Windows-x64-Setup-0.7.23.exe",
    windowsMsiX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.23/VibeAround-Windows-x64-MSI-0.7.23.msi",
    windowsPortableX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.23/VibeAround-Windows-x64-Portable-0.7.23.zip",
    linuxAppImageX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.23/VibeAround-Linux-x64-AppImage-0.7.23.AppImage",
    linuxDebX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.23/VibeAround-Linux-x64-DEB-0.7.23.deb",
  },
} as const;

export const downloadTargets = {
  default: latestRelease.latestUrl,
  mac: latestRelease.downloads.macosAppleSilicon,
  windows: latestRelease.downloads.windowsSetupX64,
  linux: latestRelease.downloads.linuxAppImageX64,
} as const;
