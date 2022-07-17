import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Header({ ref }) {
  return (
    <nav className="header" ref={ref}>
      <StaticImage src="../images/logo-edited.png"></StaticImage>
      <h2>Jod the Dog Warrior</h2>
      <a href="mailto:jodthedogwarrior@gmail.com">Contact</a>
    </nav>
  );
}
