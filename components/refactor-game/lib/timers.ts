import { useEffect, useState } from "react";

export function useNow(interval: number, enabled: boolean) {
  const [dateNow, setDateNow] = useState<number>();

  useEffect(() => {
    if (!enabled) {
      setDateNow(undefined);
      return;
    }
    const int = setInterval(() => {
      setDateNow(Date.now());
    }, interval);
    return () => {
      clearInterval(int);
    };
  }, [interval, enabled]);
  return dateNow;
}
