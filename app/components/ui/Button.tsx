'use client';

import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

function Button({ children, href, onClick }: ButtonProps) {
  const className =
    "bg-[#B8392C] w-full py-3 rounded-full text-[14px] font-bold uppercase text-white shadow-red-800/10 shadow-xl z-10 text-center";

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return <button className={className} onClick={onClick}>{children}</button>;
}

export default Button;
