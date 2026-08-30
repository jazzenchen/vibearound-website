export const latestRelease = {
  tag: "v0.7.25",
  version: "0.7.25",
  displayVersion: "v0.7.25",
  releaseUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.25",
  latestUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.25",
  publishedAt: "2026-08-30T18:17:17Z",
  starFallback: 398,
  downloads: {
    macosAppleSilicon:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.25/VibeAround-macOS-arm64-0.7.25.dmg",
    windowsSetupX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.25/VibeAround-Windows-x64-Setup-0.7.25.exe",
    windowsMsiX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.25/VibeAround-Windows-x64-MSI-0.7.25.msi",
    windowsPortableX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.25/VibeAround-Windows-x64-Portable-0.7.25.zip",
    linuxAppImageX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.25/VibeAround-Linux-x64-AppImage-0.7.25.AppImage",
    linuxDebX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.25/VibeAround-Linux-x64-DEB-0.7.25.deb",
  },
} as const;

export const downloadTargets = {
  default: latestRelease.latestUrl,
  mac: latestRelease.downloads.macosAppleSilicon,
  windows: latestRelease.downloads.windowsSetupX64,
  linux: latestRelease.downloads.linuxAppImageX64,
} as const;
