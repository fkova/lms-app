-- Grant INSERT, UPDATE, and DELETE permissions on courses table to authenticated role
GRANT INSERT ON public.courses TO authenticated;
GRANT UPDATE ON public.courses TO authenticated;
GRANT DELETE ON public.courses TO authenticated;
