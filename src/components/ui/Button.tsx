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
      className={`bg-black hover:bg-primaryred transition-all duration-500 px-7 py-4 rounded-full text-black ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
