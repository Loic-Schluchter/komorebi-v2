'use client';

import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

function Button({ children, href, onClick, ariaLabel }: ButtonProps) {
  const className =
      "absolute bottom-4 right-4 bg-[#B8392C] text-white p-2 rounded-full hover:opacity-90 transition-opacity"

  if (href) {
    return (
        <Link href={href} className={className}>
          {children}
        </Link>
    );
  }

  return (
      <button
          aria-label={ariaLabel}
          className={className}
          onClick={onClick}
      >
        {children}
      </button>
  );
}
export default Button;
