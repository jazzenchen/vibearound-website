export const latestRelease = {
  tag: "v0.7.3",
  version: "0.7.3",
  displayVersion: "v0.7.3",
  releaseUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.3",
  latestUrl: "https://github.com/jazzenchen/VibeAround/releases/latest",
  publishedAt: "2026-06-14T19:57:16Z",
  starFallback: 398,
  downloads: {
    macosAppleSilicon:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.3/VibeAround_0.7.3_arm64.dmg",
    windowsSetupX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.3/VibeAround_0.7.3_x64-setup.exe",
    windowsMsiX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.3/VibeAround_0.7.3_x64_en-US.msi",
    windowsPortableX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.3/VibeAround-win-0.7.3-portable.zip",
    linuxAppImageX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.3/VibeAround_0.7.3_amd64.AppImage",
    linuxDebX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.3/VibeAround_0.7.3_amd64.deb",
  },
} as const;

export const downloadTargets = {
  default: latestRelease.latestUrl,
  mac: latestRelease.downloads.macosAppleSilicon,
  windows: latestRelease.downloads.windowsSetupX64,
  linux: latestRelease.downloads.linuxAppImageX64,
} as const;
