import Link from "next/link";
import profilePic from "../../assets/HenrikNilssonHarnert_square_small.jpg";

export interface FooterProps {
  title: string;
  description: string;
  logoUrl: string;
  links: { label: string; href: string }[];
}
export function Footer({ title, description, logoUrl, links }: FooterProps) {
  return (
    <>
      <div className="flex-1" />
      <footer className="w-full flex flex-col items-center p-10 bg-base-200 text-base-content">
        <div className="container flex flex-col gap-10">
          <div className="footer">
            <aside>
              {logoUrl && (
                <Link href="/#">
                  <img src={logoUrl} className="h-16" />
                </Link>
              )}
              <p>
                <Link href="/#">{title}</Link>
                <br />
                <div>{description}</div>
                <br />
                <span>
                  Copyright © {new Date().getFullYear()} - All rights reserved
                </span>
              </p>
            </aside>
            <nav>
              <h6 className="footer-title">Links</h6>
              {links.map((link) => (
                <Link
                  key={link.label + link.href}
                  href={link.href}
                  className="link link-hover"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <Link href="/tos" className="link link-hover">
                Terms of services
              </Link>
              <Link href="/privacy-policy" className="link link-hover">
                Privacy policy
              </Link>
            </nav>
            <nav>
              <h6 className="footer-title">More</h6>
              <Link
                href="https://tasteoftrail.com"
                target="_blank"
                className="link link-hover"
              >
                Taste of Trail
              </Link>
              <Link
                href="https://marketplace.visualstudio.com/items?itemName=henriknh.lfw-codes-for-bananas"
                target="_blank"
                className="link link-hover"
              >
                LFW: Codes for bananas
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.henriknh.addzelines"
                target="_blank"
                className="link link-hover"
              >
                add ze lines (google play)
              </Link>
              <Link
                href="https://henriknh.itch.io/add-ze-lines"
                target="_blank"
                className="link link-hover"
              >
                add ze lines (itch)
              </Link>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="h-12">
              <img src={profilePic.src} className="h-full rounded-full" />
            </div>

            <div className="flex flex-col">
              <div>
                Hey 👋 My name is{" "}
                <Link
                  href="https://henriknh.com"
                  target="_blank"
                  className="link"
                >
                  Henrik
                </Link>{" "}
                and I'm the creator of {title}
              </div>
              <div>
                You can follow my development adventures on{" "}
                <Link
                  href="https://twitter.com/henriknh_"
                  target="_blank"
                  className="link"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
