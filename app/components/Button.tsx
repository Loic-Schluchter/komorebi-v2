import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

function Button({ children, href }: ButtonProps) {
  const className =
    "bg-[#B8392C] w-3/4 py-3 rounded-full text-[16px] font-medium uppercase text-white shadow-[0_0_60px_15px_rgba(184,57,44,0.4)] z-10 text-center";

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return <button className={className}>{children}</button>;
}

export default Button;
