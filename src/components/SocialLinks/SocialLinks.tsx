import { socialLinks } from "@/constants/socialLinks";
import Link from "next/link";
import css from "./SocialLinks.module.css";


export default function SocialLinks() {
    return (
        <ul className="{css.socialLinksList">
        {socialLinks.map((link) => (
            <li key={link.name} className="{css.socialLinksItem">
                <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${link.name} page`}
            className={css.socialLink}
          >
            {link.icon && <link.icon />}
          </Link>
            </li>
        ))}
        </ul>
    )
}