"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider(
  props: React.ComponentProps<typeof NextThemesProvider>
) {
  const { children, ...rest } = props
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>
}
