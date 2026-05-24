import { useEffect, useMemo, useState } from "react";
import { themes } from "../utils/theme";

const getInitialMode = () => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("sambhavpay-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export function useTheme() {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.style.colorScheme = mode;
    window.localStorage.setItem("sambhavpay-theme", mode);
  }, [mode]);

  const toggle = () => setMode((current) => (current === "dark" ? "light" : "dark"));
  const c = useMemo(() => themes[mode] || themes.light, [mode]);

  return { mode, toggle, c };
}
