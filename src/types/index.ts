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
//################################################################################ Courses Interfcae ################################################################################################################
export interface CourseCategory {
  name: string;
  slug: string;
  sequence: number;
  children: CourseCategoryChild[];
  courses: Course[];
}
interface CourseCategoryChild {
  name: string;
  slug: string;
  sequence: number;
  courses: Course[];
}

export interface Course {
  heading: string;
  slug: string;
  sub_heading: string | null;
  language: string;
  duration: string;
  video_lectures: string;
  questions_count: string;
  price: number;
  short_description: string;
  featured: number;
  sequence: number;
  featured_image_url: string;
  content: string | TrustedHTML;
  study_material_url: string;
  timetable_url: string;
  course_course_contents: CourseContent[];
  course_course_faqs: CourseFAQ[];
  faculties: Faculty[];
  testing?: string;
}
export interface CourseContent {
  title: string;
  content: string;
  sequence: number;
}
export interface CourseFAQ {
  question: string;
  answer: string;
  sequence: number;
}
export interface Faculty {
  name: string;
  slug: string;
  designation: string | null;
  experience: string | null;
  qualifications: string | null;
  specialization: string | null;
  short_description: string | null;
  long_description: string | null;
  facebook_link: string | null;
  instagram_link: string | null;
  twitter_link: string | null;
  linkedin_link: string | null;
  youtube_link: string | null;
  sequence: number;
  featured_image_url: string | null;
}

export type CourseCategoryList = CourseCategory[];

export interface SingleCourse extends Course {
  related_courses: Course[];
  faculties: Faculty[];
}

//################################################################################ Courses Interfcae ################################################################################################################

// Email
interface EmailItem {
  email: string;
}

type EmailList = EmailItem[];

// Address
interface AddressItem {
  address: string;
}

type AddressList = AddressItem[];

// Phone
interface PhoneItem {
  number: string;
  whatsapp: number; // 1 for true, 0 for false
}

type PhoneList = PhoneItem[];

// Social Media
interface SocialMedia {
  facebook_link: string | null;
  instagram_link: string | null;
  twitter_link: string | null;
  linkedin_link: string | null;
  youtube_link: string | null;
}

// Organization Info
export interface OrganizationInfo {
  name: string;
  map_link: string | null;
  favicon_url: string | null;
  logo_url: string | null;
  emails: EmailList;
  addresses: AddressList;
  phones: PhoneList;
  social_media: SocialMedia;
}

export interface TestimonialItem {
  name: string;
  sub_heading: string;
  content: string;
  caption: string | null;
  sequence: number;
  image_url: string;
}

export type TestimonialList = TestimonialItem;

// Testseries

export interface TestSeries {
  heading: string;
  slug: string;
  sub_heading: string;
  language: string;
  duration: string;
  video_lectures: string;
  questions_count: string;
  price: number;
  short_description: string;
  featured: number;
  sequence: number;
  featured_image_url: string | null;
  study_material_url: string | null;
  timetable_url: string | null;
}

export interface TestSeriesCategory extends CourseCategory {
  test_series: TestSeries[];
}

export type TestSeriesCategoryList = TestSeriesCategory;

//Blog

interface BlogCategory {
  name: string;
  slug: string;
}

export interface Blogs {
  title: string;
  slug: string;
  heading: string | null;
  short_description: string | null;
  featured_image_caption: string | null;
  type: string;
  publish_date: string; // format: dd-mm-yyyy
  featured_image_url: string;
  blog_categories: BlogCategory[];
}
interface RelatedBlog {
  title: string;
  slug: string;
  short_description: string;
  publish_date: string; // format: dd-mm-yyyy
  featured_image_url: string;
}

export interface TypeBlogShow extends Blogs {
  content: string;
  related_blogs: RelatedBlog[];
}

// FAQ
export interface FAQType {
  question: string;
  answer: string;
  sequence: number;
  active: number; // Consider changing to boolean if appropriate
  created_at: string; // format: YYYY-MM-DD HH:mm:ss
  updated_at: string; // format: YYYY-MM-DD HH:mm:ss
}

export interface TypeFacultyShow extends Faculty {
  courses: Course[];
  testSeries: TestSeries[];
}
