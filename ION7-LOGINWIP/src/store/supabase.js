import { createClient } from "@supabase/supabase-js";

// INITIALIZE SUPABASE CLIENT ON YOUR SYSTEM

console.log(process.env);
const supabase = createClient(
    // KEYS SPECIFIC TO YOUR ENVIRONMENT 
    // NB: TO RUN IT LOCALLY YOU NEED TO CREATE A FILE '.env.local' in the root of the project
    // REPLACE THEIR VALUE WITH YOUR URL AND API KEY VALUE
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_PUBLIC_KEY
);

export { supabase };