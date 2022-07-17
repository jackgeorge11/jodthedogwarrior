import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/index.scss";

const IndexPage = () => {
  const headerRef = useRef();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current?.offsetHeight) {
      setHeaderHeight(headerRef.current?.offsetHeight);
    }
  }, [headerRef.current]);

  return (
    <main>
      <Helmet>
        <title>Jod The Dog Warrior</title>
        <meta
          name="description"
          content="Jody is a dog trainer and behaviorist based in Venice Beach, CA. With over 16 years of experience, she is an expert at improving the relationships between humans and dogs."
        />
      </Helmet>
      <nav className="header" ref={headerRef}>
        <StaticImage src="../images/logo-edited.png"></StaticImage>
        <h2 className="thick">
          Jod the Dog Warrior{" "}
          <h3>
            (<i>j-OH-d</i> the dog warrior)
          </h3>
        </h2>
        <button className="contact">
          <a
            href="https://www.instagram.com/jodthedogwarrior/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Instagram</p>
          </a>
        </button>
        <button className="contact">
          <a href="mailto:jodthedogwarrior@gmail.com">
            <p>Contact</p>
          </a>
        </button>
      </nav>

      <article
        className="section"
        style={{
          height: `calc(75vh - 4rem - ${headerHeight}px)`,
        }}
      >
        <div className="image">
          <StaticImage src="../images/walking-dogs.jpg" objectFit="cover" />
        </div>
        <div className="info">
          <h1>
            <i>Dogs speak, but only to those who know how to listen.</i>
          </h1>
          <h2>
            For over 16 years Jody has helped people understand dog behavior and
            improved the relationships between humans and their canine
            companions.
          </h2>
        </div>
      </article>

      <article
        className="section reverse"
        style={{
          height: `calc(75vh - 4rem - ${headerRef.current?.offsetHeight}px)`,
        }}
      >
        <div className="image">
          <div className="square">
            <StaticImage
              class="mb"
              src="../images/pic-1.jpeg"
              objectFit="cover"
            />
            <StaticImage
              class="mb remove"
              src="../images/pic-2.jpeg"
              objectFit="cover"
            />
            <StaticImage src="../images/pic-3.jpeg" objectFit="cover" />
            <StaticImage
              class="remove"
              src="../images/pic-4.jpeg"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="info">
          <h2>
            Jody's love of dogs began in her early childhood with Charlie Brown,
            her first, Old English Sheepdog. Their bond was magical, and from an
            early age she understood his needs and means of communcation.
          </h2>
          <h2>
            In 2006 Jody founded a full service dog-walking and dog-sitting
            company, Dog Walker Extraordinaire (DWE). During this time, Jody
            personally cared for countless dogs, which she helped train and
            socialize. During this experience Jody's passion for dog training
            became her focus.
          </h2>
          <h2>
            Jody formally began her training journey when she met esteemed dog
            behaviorist, Cheri Lucas. She attended workshops, found a talented
            mentor, Betsy Gunter, and dedicated time and study to strengthen her
            knowledge.
          </h2>
          <h2>
            Jody formally began her training journey when she met esteemed dog
            behaviorist, Cheri Lucas. She attended workshops, found a talented
            mentor, Betsy Gunter, and dedicated time and study to strengthen her
            knowledge.
          </h2>
          <h2>
            Based in Venice Beach, Jody is an expert fostering long lasting
            bonds between dogs and their humans.{" "}
            <a href="mailto:jodthedogwarrior@gmail.com">Get in touch</a>.
          </h2>
        </div>
      </article>

      <StaticImage class="footer-logo" src="../images/logo.png" />
    </main>
  );
};

export default IndexPage;
