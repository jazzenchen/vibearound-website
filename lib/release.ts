export const latestRelease = {
  tag: "v0.7.16",
  version: "0.7.16",
  displayVersion: "v0.7.16",
  releaseUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.16",
  latestUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.16",
  publishedAt: "2026-07-14T13:14:06Z",
  starFallback: 398,
  downloads: {
    macosAppleSilicon:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.16/VibeAround-macOS-arm64-0.7.16.dmg",
    windowsSetupX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.16/VibeAround-Windows-x64-Setup-0.7.16.exe",
    windowsMsiX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.16/VibeAround-Windows-x64-MSI-0.7.16.msi",
    windowsPortableX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.16/VibeAround-Windows-x64-Portable-0.7.16.zip",
    linuxAppImageX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.16/VibeAround-Linux-x64-AppImage-0.7.16.AppImage",
    linuxDebX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.16/VibeAround-Linux-x64-DEB-0.7.16.deb",
  },
} as const;

export const downloadTargets = {
  default: latestRelease.latestUrl,
  mac: latestRelease.downloads.macosAppleSilicon,
  windows: latestRelease.downloads.windowsSetupX64,
  linux: latestRelease.downloads.linuxAppImageX64,
} as const;
