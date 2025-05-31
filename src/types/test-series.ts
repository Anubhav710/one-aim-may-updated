interface TestSeries {
  heading: string;
  slug: string;
  sub_heading: string;
  language: string;
  duration: string;
  video_lectures: string;
  questions_count: string;
  price: number;
  content?: any;
  short_description: string;
  featured_image_caption: string | null;
  featured: number;
  sequence: number;
  featured_image_url: string | null;
  study_material_url: string | null;
  enrolment_deadline_date?: string;
  timetable_url: string | null;
  test_series_categories: TestSeriesCategory[];
  faculties: Faculty[];
}

interface TestSeriesCategory {
  name: string;
  slug: string;
  pivot: {
    test_series_id: number;
    test_series_category_id: number;
  };
}

interface Faculty {
  name: string;
  slug: string;
  designation: string;
  featured_image: string | null;
  pivot: {
    test_series_id: number;
    faculty_id: number;
  };
  media: any[]; // You can refine this if the media structure is defined
}

export type TestSeriesLists = TestSeries[];
export type SingleTestSeries = TestSeries;
