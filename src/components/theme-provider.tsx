"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export const dynamic = "force-static"; // wymusza statyczną generację

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props;

  return (
    <NextThemesProvider {...rest}>
      {children}
    </NextThemesProvider>
  );
}
