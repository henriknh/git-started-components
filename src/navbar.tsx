import { ReactElement, useState } from "react";

export interface NavbarProps {
  title: string;
  logoUrl: string;
  links: { label: string; href: string }[];
  cta: ReactElement;
}
export function Navbar({ title, logoUrl, links, cta }: NavbarProps) {
  const showMenu = false;

  return (
    <>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="w-full flex justify-between px-10 py-4">
        <div className="flex gap-4">
          <div>
            <img src={logoUrl} className="h-10" />
          </div>
        </div>

        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            {/* Navbar menu content here */}
            <li>
              <a>Navbar Item 1</a>
            </li>
            <li>
              <a>Navbar Item 2</a>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <div className="flex-none hidden sm:block">{cta}</div>

          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="absoluteblock lg:hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="fixed top-0 right-0 bottom-0 bg-primary">hej</div>
        </div>
      )}

      <div className="drawer-content flex flex-col">
        {/* Navbar */}

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 m-0 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
