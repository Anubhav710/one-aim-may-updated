"use client";

import CommonHeading from "@/components/ui/CommonHeading";
import FeaturedCard from "@/components/ui/FeaturedCard";
import { TestSeriesList } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

// Tab interface
interface Tab {
  id: string;
  label: string;
}

const TestSeriesT: React.FC = () => {
  const [testSeriesData, setTestSeriesData] = useState<TestSeriesList>([]);
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTestSeries, setActiveTestSeries] = useState<string>("");

  useEffect(() => {
    const fetchTestSeriesData = async () => {
      try {
        const response = await axios.get<TestSeriesList>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/test-series-categories`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
            },
          }
        );

        const data = response.data;
        setTestSeriesData(data);

        // Include all categories regardless of test_series
        const derivedTabs = data.map((category) => ({
          id: category.slug,
          label: category.name,
        }));

        setTabs(derivedTabs);

        if (derivedTabs.length > 0) {
          setActiveTestSeries(derivedTabs[0].id);
        }
      } catch (error) {
        console.error("Error fetching protected data:", error);
      }
    };

    fetchTestSeriesData();
  }, []);

  const selectedCategory = testSeriesData.find(
    (category) => category.slug === activeTestSeries
  );

  const displayedCourses = selectedCategory?.test_series || [];

  return (
    <div className="screen padding-yx space-y-12">
      {/* Heading */}
      <div className="w-max mx-auto">
        <CommonHeading title="Test Series" />
      </div>

      {/* Tabs */}
      <div className="flex max-sm:flex-col gap-7 mx-auto w-max">
        {tabs.map((data) => (
          <div
            key={data.id}
            onClick={() => setActiveTestSeries(data.id)}
            className="cursor-pointer"
          >
            <h1 className="text-xl">{data.label}</h1>
            <div
              className={`h-[3px] w-[80%] sm:mx-auto ${
                data.id === activeTestSeries
                  ? "bg-gradient-to-tr from-[#FFA4A8] to-[#FFC593] rounded-full transition-all duration-300"
                  : ""
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCourses.length > 0 ? (
          displayedCourses.map((item) => (
            <FeaturedCard
              key={item.slug}
              title={item.heading}
              description={item.short_description}
              duration={item.duration}
              instructor={item.language}
              imageSrc={
                item.featured_image_url || "/images/course/feature-course.png"
              }
              href={`/test-series/${item.slug}`}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No test series available for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default TestSeriesT;
