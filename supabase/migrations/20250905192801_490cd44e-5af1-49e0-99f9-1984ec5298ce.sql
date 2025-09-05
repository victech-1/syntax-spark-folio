-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  technologies TEXT[] DEFAULT '{}',
  github_url TEXT,
  live_url TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact submissions table  
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create personal info table
CREATE TABLE public.personal_info (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.personal_info ENABLE ROW LEVEL SECURITY;

-- Projects policies - Public can view, only authenticated users can modify
CREATE POLICY "Anyone can view projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert projects" ON public.projects FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update projects" ON public.projects FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete projects" ON public.projects FOR DELETE TO authenticated USING (true);

-- Contact submissions policies - Public can submit, only authenticated users can view/manage
CREATE POLICY "Anyone can submit contact forms" ON public.contact_submissions FOR INSERT USING (true);
CREATE POLICY "Authenticated users can view contact submissions" ON public.contact_submissions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can update contact submissions" ON public.contact_submissions FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete contact submissions" ON public.contact_submissions FOR DELETE TO authenticated USING (true);

-- Personal info policies - Public can view, only authenticated users can modify
CREATE POLICY "Anyone can view personal info" ON public.personal_info FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert personal info" ON public.personal_info FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update personal info" ON public.personal_info FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete personal info" ON public.personal_info FOR DELETE TO authenticated USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_personal_info_updated_at
  BEFORE UPDATE ON public.personal_info
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default personal info entries
INSERT INTO public.personal_info (key, value) VALUES
  ('bio', 'Full-stack developer passionate about creating innovative web solutions'),
  ('location', 'Your Location'),
  ('email', 'your.email@example.com'),
  ('github', 'https://github.com/yourusername'),
  ('linkedin', 'https://linkedin.com/in/yourusername');