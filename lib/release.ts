export const latestRelease = {
  tag: "v0.7.1",
  version: "0.7.1",
  displayVersion: "v0.7.1",
  releaseUrl: "https://github.com/jazzenchen/VibeAround/releases/tag/v0.7.1",
  latestUrl: "https://github.com/jazzenchen/VibeAround/releases/latest",
  publishedAt: "2026-06-12T20:41:06Z",
  starFallback: 380,
  downloads: {
    macosAppleSilicon:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.1/VibeAround_0.7.1_arm64.dmg",
    windowsSetupX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.1/VibeAround_0.7.1_x64-setup.exe",
    windowsMsiX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.1/VibeAround_0.7.1_x64_en-US.msi",
    windowsPortableX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.1/VibeAround-win-0.7.1-portable.zip",
    linuxAppImageX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.1/VibeAround_0.7.1_amd64.AppImage",
    linuxDebX64:
      "https://github.com/jazzenchen/VibeAround/releases/download/v0.7.1/VibeAround_0.7.1_amd64.deb",
  },
} as const;

export const downloadTargets = {
  default: latestRelease.latestUrl,
  mac: latestRelease.downloads.macosAppleSilicon,
  windows: latestRelease.downloads.windowsSetupX64,
  linux: latestRelease.downloads.linuxAppImageX64,
} as const;
