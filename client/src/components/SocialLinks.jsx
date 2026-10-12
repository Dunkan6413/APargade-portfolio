import React from "react";
import { socialLinks } from "./socialData.js";

// names : liste des réseaux à afficher, dans l'ordre (voir socialLinks.js)
export default function SocialLinks({ names, className = "" }) {
  return (
    <ul className={className}>
      {names.map((name) => {
        const { icon: Icon, url, label } = socialLinks[name];
        return (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}