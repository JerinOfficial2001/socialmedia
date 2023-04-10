import React from "react";
import Typography from "@mui/material/Typography";
import Auth from "@/components/Auth";
import { useSession } from "@supabase/auth-helpers-react";
import Homepage from "./homepage";
import { supabase } from "@/SupabaseClient";





function Home() {
  const session = useSession();
  return <>{!session ? (<Auth />) : (<Homepage session={session}/>)}</>;
}

export default Home;
