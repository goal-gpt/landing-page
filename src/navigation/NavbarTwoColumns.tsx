import Link from "next/link";
import type { ReactNode } from "react";

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div className="mx-auto sm:mx-0">
      <Link href="/">{props.logo}</Link>
    </div>

    <nav>
      <ul className="navbar hidden items-center text-lg font-medium text-gray-800 sm:flex">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { NavbarTwoColumns };
