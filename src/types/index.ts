export interface Discount {
  code: string;
  percentage?: number;
}

export interface Career {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  qualification: string;
  resume: File;
  job_opening: string;
  message: string;
}
