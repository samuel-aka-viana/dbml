import { useState, useEffect } from "react";

export interface ReleaseData {
  version: string;
  publishedAt: string | null;
  hasPublishedReleases: boolean;
  isLoading: boolean;
}

const REPO_OWNER = "brenoLucasN";
const REPO_NAME = "db_modeling";

export function useLatestRelease(): ReleaseData {
  const [data, setData] = useState<ReleaseData>({
    version: "v0.1.2",
    publishedAt: null,
    hasPublishedReleases: false,
    isLoading: true,
  });

  useEffect(() => {
    let isMounted = true;

    fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("No public releases found yet");
        }
        return res.json();
      })
      .then((json) => {
        if (isMounted && json.tag_name) {
          setData({
            version: json.tag_name,
            publishedAt: json.published_at
              ? new Date(json.published_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : null,
            hasPublishedReleases: true,
            isLoading: false,
          });
        }
      })
      .catch(() => {
        if (isMounted) {
          setData((prev) => ({
            ...prev,
            isLoading: false,
          }));
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
}
