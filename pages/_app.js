import "@/styles/globals.css";
import "../styles/global.scss";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/SupabaseClient";

export default function App({ Component, pageProps }) {
  const supabaseClient = createClient(
    "https://pixepnibdwqmwvaixqmw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpeGVwbmliZHdxbXd2YWl4cW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMjY5NDAsImV4cCI6MTk5NjYwMjk0MH0.jY6TLXZcYZuogBStUktL8JVd5mLXlCwY0_WKAOx_JG8"
  );
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fcd",
      },
    },
  });

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionContextProvider>
  );
}
