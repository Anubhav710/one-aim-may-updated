// Testimonials Interface

interface TestimonialItem {
  name: string;
  sub_heading: string;
  content: string;
  caption: string | null;
  sequence: number;
  image_url: string | undefined;
}

export type TestimonialList = TestimonialItem[];

interface FAQItem {
  question: string;
  answer: string;
  sequence: number;
  active: number;
  created_at: string;
  updated_at: string;
}

export type FAQList = FAQItem[];

export interface BlogItem {
  title: string;
  slug: string;
  heading: string | null;
  short_description: string | null;
  featured_image_caption: string | null;
  type: string;
  publish_date: string; // Format: "DD-MM-YYYY"
  featured_image_url: string;
  blog_categories: string[]; // Adjust to object[] if categories become structured
}

export type BlogList = BlogItem[];

interface BlogItemShow {
  title: string;
  slug: string;
  heading: string | null;
  short_description: string | null;
  content: string;
  featured_image_caption: string | null;
  type: string;
  publish_date: string; // Format: "DD-MM-YYYY" or null
  featured_image_url: string;
  related_blogs: RelatedBlogItem[];
  blog_categories: BlogCategoryItem[];
}

interface RelatedBlogItem {
  title: string;
  slug: string;
  publish_date: string;
  featured_image_url: string;
  short_description: string;
}

interface BlogCategoryItem {
  name: string;
  slug: string;
  pivot: BlogCategoryPivot;
}

interface BlogCategoryPivot {
  blog_id: number;
  blog_category_id: number;
}

export type BlogListShow = BlogItemShow;

interface TeamMemberItem {
  name: string;
  slug: string;
  designation: string;
  experience: string;
  qualifications: string;
  specialization: string;
  short_description: string;
  long_description: string;
  facebook_link: string;
  instagram_link: string;
  twitter_link: string;
  linkedin_link: string;
  youtube_link: string;
  sequence: number;
  featured_image_url: string;
}

export type TeamMemberList = TeamMemberItem[];

export interface FacultyItem {
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
  courses: CourseItem[];
  test_series: TestSeriesItem[];
}

interface CourseItem {
  heading: string;
  slug: string;
  sub_heading: string;
  language: string;
  duration: string;
  price: number;
  short_description: string;
  featured_image: string | null;
  study_material: MediaItem | null;
  timetable: string | null;
  pivot: CoursePivot;
  media: MediaItem[];
}

interface TestSeriesItem {
  heading: string;
  slug: string;
  sub_heading: string;
  language: string;
  duration: string;
  price: number;
  short_description: string;
  featured_image: string | null;
  study_material: MediaItem | null;
  timetable: string | null;
  pivot: TestSeriesPivot;
  media: MediaItem[];
}

interface CoursePivot {
  faculty_id: number;
  course_id: number;
}

interface TestSeriesPivot {
  faculty_id: number;
  test_series_id: number;
}

interface MediaItem {
  id: number;
  model_type: string;
  model_id: number;
  uuid: string;
  collection_name: string;
  name: string;
  file_name: string;
  mime_type: string;
  disk: string;
  conversions_disk: string;
  size: number;
  manipulations: any[];
  custom_properties: any[];
  generated_conversions: {
    thumb: boolean;
    preview: boolean;
  };
  responsive_images: any[];
  order_column: number;
  created_at: string;
  updated_at: string;
  original_url: string;
  preview_url: string;
}
