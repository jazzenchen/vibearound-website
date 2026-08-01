export const latestRelease = {
  tag: "v0.7.22",
  version: "0.7.22",
  displayVersion: "v0.7.22",
  releaseUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.22",
  latestUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.22",
  publishedAt: "2026-08-01T10:18:45Z",
  starFallback: 398,
  downloads: {
    macosAppleSilicon:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.22/VibeAround-macOS-arm64-0.7.22.dmg",
    windowsSetupX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.22/VibeAround-Windows-x64-Setup-0.7.22.exe",
    windowsMsiX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.22/VibeAround-Windows-x64-MSI-0.7.22.msi",
    windowsPortableX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.22/VibeAround-Windows-x64-Portable-0.7.22.zip",
    linuxAppImageX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.22/VibeAround-Linux-x64-AppImage-0.7.22.AppImage",
    linuxDebX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.22/VibeAround-Linux-x64-DEB-0.7.22.deb",
  },
} as const;

export const downloadTargets = {
  default: latestRelease.latestUrl,
  mac: latestRelease.downloads.macosAppleSilicon,
  windows: latestRelease.downloads.windowsSetupX64,
  linux: latestRelease.downloads.linuxAppImageX64,
} as const;
