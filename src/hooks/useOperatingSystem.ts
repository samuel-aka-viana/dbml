import { useState, useEffect } from "react";

export type OSTarget = "windows" | "debian" | "fedora" | "macos";

export interface OSConfig {
  id: OSTarget;
  name: string;
  distro: string;
  ext: string;
  label: string;
  downloadUrl: string;
}

const RELEASES_BASE = "https://github.com/brenoLucasN/db_modeling/releases/latest/download";

export const OS_CONFIGS: Record<OSTarget, OSConfig> = {
  windows: {
    id: "windows",
    name: "Windows",
    distro: "Windows 10 / 11",
    ext: ".exe",
    label: "Download for Windows (.exe)",
    downloadUrl: `${RELEASES_BASE}/db-modeling-windows-x86_64.exe`,
  },
  debian: {
    id: "debian",
    name: "Ubuntu / Debian",
    distro: "x86_64 (.deb package)",
    ext: ".deb",
    label: "Download for Ubuntu / Debian (.deb)",
    downloadUrl: `${RELEASES_BASE}/db-modeling-linux-amd64.deb`,
  },
  fedora: {
    id: "fedora",
    name: "Fedora / RHEL",
    distro: "x86_64 (.rpm package)",
    ext: ".rpm",
    label: "Download for Fedora (.rpm)",
    downloadUrl: `${RELEASES_BASE}/db-modeling-linux-x86_64.rpm`,
  },
  macos: {
    id: "macos",
    name: "macOS",
    distro: "Apple Silicon (M1/M2/M3/M4)",
    ext: ".dmg",
    label: "Download for macOS (.dmg)",
    downloadUrl: `${RELEASES_BASE}/db-modeling-macos-arm64.dmg`,
  },
};

export function useOperatingSystem(): {
  currentOS: OSConfig;
  allOS: OSConfig[];
} {
  const [currentOS, setCurrentOS] = useState<OSConfig>(OS_CONFIGS.debian);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = window.navigator.userAgent.toLowerCase();

    if (ua.includes("win")) {
      setCurrentOS(OS_CONFIGS.windows);
    } else if (ua.includes("mac")) {
      setCurrentOS(OS_CONFIGS.macos);
    } else if (ua.includes("fedora") || ua.includes("rhel") || ua.includes("red hat")) {
      setCurrentOS(OS_CONFIGS.fedora);
    } else {
      setCurrentOS(OS_CONFIGS.debian);
    }
  }, []);

  return {
    currentOS,
    allOS: Object.values(OS_CONFIGS),
  };
}
