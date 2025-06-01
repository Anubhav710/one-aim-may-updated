"use client";
import Link from "next/link";
import React from "react";

const PButton = ({
  children,
  className,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      className={`mt-4 bg-black text-white py-2 inline-block rounded-full px-12 text-center w-max  shadow-lg hover:bg-primaryred transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PButton;
