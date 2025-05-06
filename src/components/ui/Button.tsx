import Link from "next/link";
import React from "react";

const Button = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  return (
    <Link
      href={href ?? "/"}
      className={`md:px-6 md:py-4 px-6 py-4  text-sm bg-black hover:bg-primaryred transition-all duration-500  rounded-full text-black ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
