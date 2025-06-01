import { CourseItems } from "@/types";
import { create } from "zustand";

interface CartState {
  courses: CourseItems[];
  addCourse: (course: CourseItems) => void;
  removeCourse: (courseId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  courses: [],
  addCourse: (course) =>
    set((state) => {
      // Prevent adding duplicate courses
      if (state.courses.find((c) => c.slug === course.slug)) {
        return state;
      }
      return { courses: [...state.courses, course] };
    }),
  removeCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((course) => course.slug !== courseId),
    })),
  clearCart: () => set({ courses: [] }),
}));
