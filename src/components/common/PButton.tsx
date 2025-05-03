import Link from "next/link";
import React from "react";

const PButton = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`mt-4 bg-black text-white py-2 inline-block rounded-full px-12 text-center w-max  shadow-lg hover:bg-primaryred transition-all duration-300 ${className}`}
    >
      {children}
    </Link>
  );
};

export default PButton;
