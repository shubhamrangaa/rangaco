"use client";

import { useSyncExternalStore } from "react";
import { istToday } from "@/lib/dates";

// A one-minute clock as an external store: no effects, and the date rolls over at midnight IST on an open tab.
const subscribe = (tick: () => void) => {
  const id = setInterval(tick, 60_000);
  return () => clearInterval(id);
};
const onServer = () => null;

/** Today's date in India ("2026-11-14"). Null on the server: a static page can't know when it is being read. */
export const useToday = () => useSyncExternalStore<string | null>(subscribe, istToday, onServer);
