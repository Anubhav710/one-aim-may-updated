"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import Button from "./ui/Button";

const HomeHero = () => {
  const { t } = useTranslation();

  return (
    <div className="screen padding-x py-20 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primaryred mb-4">
        {t("home.welcome")}
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
        {t("home.subtitle")}
      </p>
      <Button href="/courses" className="!py-3 !px-8 !text-white">
        {t("home.getStarted")}
      </Button>
    </div>
  );
};

export default HomeHero;
