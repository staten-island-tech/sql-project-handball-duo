import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://mnwhrxxcpqihdcvastvc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ud2hyeHhjcHFpaGRjdmFzdHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2NTA5MDQsImV4cCI6MTk5OTIyNjkwNH0.1Dx7Q-RRbPQQ9LHKTR1BNenz9GUz23XFsE7-Z-VS_10')