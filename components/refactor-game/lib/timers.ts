import { useEffect, useState } from "react";

export function useNow(interval: number, enabled: boolean) {
  const [dateNow, setDateNow] = useState<number>();

  useEffect(() => {
    if (!enabled) {
      setDateNow(null);
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

export function useInterval(
  interval: number,
  enabled: boolean,
  cb: (arg0: number) => void,
) {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const int = setInterval(() => {
      cb(Date.now());
    }, interval);
    
    return () => {
      clearInterval(int);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, enabled]);
}
