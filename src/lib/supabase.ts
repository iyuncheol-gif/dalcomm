import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ljjxvetowxwmptctfxlz.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqanh2ZXRvd3h3bXB0Y3RmeGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDM5NDEsImV4cCI6MjA4ODU3OTk0MX0.4YzVLc2kjNP9sbWlv3XeNMufuCxYSkJL9QiQu9OtmhQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
