export const latestRelease = {
  tag: "v0.7.21",
  version: "0.7.21",
  displayVersion: "v0.7.21",
  releaseUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.21",
  latestUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.21",
  publishedAt: "2026-08-01T04:36:43Z",
  starFallback: 398,
  downloads: {
    macosAppleSilicon:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.21/VibeAround-macOS-arm64-0.7.21.dmg",
    windowsSetupX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.21/VibeAround-Windows-x64-Setup-0.7.21.exe",
    windowsMsiX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.21/VibeAround-Windows-x64-MSI-0.7.21.msi",
    windowsPortableX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.21/VibeAround-Windows-x64-Portable-0.7.21.zip",
    linuxAppImageX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.21/VibeAround-Linux-x64-AppImage-0.7.21.AppImage",
    linuxDebX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.21/VibeAround-Linux-x64-DEB-0.7.21.deb",
  },
} as const;

export const downloadTargets = {
  default: latestRelease.latestUrl,
  mac: latestRelease.downloads.macosAppleSilicon,
  windows: latestRelease.downloads.windowsSetupX64,
  linux: latestRelease.downloads.linuxAppImageX64,
} as const;
