"use client";

import React from "react";
import { env, assertEnv } from "@/src/lib/env";

// NOTE:
// Install packages per Reown docs:
// @reown/appkit + @reown/appkit-adapter-solana :contentReference[oaicite:4]{index=4}

export function ReownProvider({ children }: { children: React.ReactNode }) {
  assertEnv();

  // TODO: Initialize AppKit here based on Reown docs for Next.js App Router.
  // Keep it in one place so the rest of the app stays clean.

  return <>{children}</>;
}
