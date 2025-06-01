import { CourseItems } from "@/types";
import { create } from "zustand";
import { persist, PersistOptions, createJSONStorage } from "zustand/middleware";

interface CartState {
  courses: CourseItems[];
  addCourse: (course: CourseItems) => void;
  removeCourse: (courseId: string) => void;
  clearCart: () => void;
}

type CartPersist = {
  courses: CourseItems[];
};

const persistOptions: PersistOptions<CartState, CartPersist> = {
  name: "cart-storage", // unique name for the storage
  storage: createJSONStorage(() =>
    typeof window !== "undefined" ? window.localStorage : (undefined as any)
  ), // use localStorage for persistence, undefined for SSR
  partialize: (state) => ({ courses: state.courses }),
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
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
    }),
    persistOptions
  )
);
