import React from "react";

export default function Section({ imageLeft }) {
  return (
    <article className={imageLeft ? "section" : "section reverse"}>
      <div className="image"></div>
      <div className="info"></div>
    </article>
  );
}
