import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import "../styles/index.scss";

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Jod The Dog Warrior</title>
        <meta
          name="description"
          content="Jody is a dog trainer and behaviorist based in Venice Beach, CA. With over 16 years of experience, she is an expert at improving the relationships between humans and dogs."
        />
      </Helmet>
      <nav className="header">
        <StaticImage
          src="../images/logo-edited.png"
          width={"5rem"}
          height={"5rem"}
          objectFit={"contain"}
        ></StaticImage>
        <h2 className="thick">
          Jod the Dog Warrior{" "}
          <h3>
            (<i>j-OH-d</i> the dog warrior)
          </h3>
        </h2>
        <div className="buttons">
          <button className="instagram">
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
        </div>
      </nav>

      <div className="main-wrapper">
        <article className="section">
          <div className="image">
            <StaticImage src="../images/walking-dogs.jpg" objectFit="cover" />
          </div>
          <div className="info small-quote">
            <h1>
              <i>Dogs speak, but only to those who know how to listen.</i>
            </h1>
            <h2>
              Helping humans understand dog behavior and how it affects the
              relationship you have with them
            </h2>
          </div>
        </article>

        <article className="section reverse">
          <div className="image">
            <div className="square">
              <StaticImage
                class="mb"
                src="../images/pic-1.jpg"
                objectFit="cover"
              />
              <StaticImage
                class="mb remove"
                src="../images/pic-2.jpg"
                objectFit="cover"
              />
              <StaticImage src="../images/pic-3.jpg" objectFit="cover" />
              <StaticImage
                class="remove"
                src="../images/pic-4.jpeg"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="info">
            <h2>
              Jody’s love of all things dog began in early childhood with her
              first Old English Sheepdog, Charlie. Their bond was magical and
              from an early age she knew how to figure out what he needed and
              how he was communicating with her.
            </h2>
            <h2>
              In 2006 Jody founded a full service dog walking ​and dog sitting
              company​ ,Dog Walker Extraordinaire (DWE). During this time, Jody​
              personally cared for Countless dogs​,most of whom she helped train
              and socialize. ​In this experience Jody discovered her passion for
              training​ and it became ​her focus and dream.
            </h2>
            <h2>
              When Jody met esteemed dog behaviorist /​trainer Cheri Lucas​ ​it
              was time to formally begin her training journey . She attended
              workshops and also mentored under ​behaviorist/​trainer Betsy
              Gunter​, and dedicated time and study to strengthen her knowledge.
            </h2>
            <h2>
              Every dog is unique and has their own innate qualities. Jody is
              committed to sharing her experience with her human clients so they
              can build on this foundation. ​Clients will gain knowledge,
              helpful tools, and the critical understanding ​of building a
              healthy foundation between human and canine​. This in turn will
              create a solid​, lasting bond for a happy life together.
            </h2>
            <h2>Jody is based in Los Angeles, California.</h2>
          </div>
        </article>
      </div>
      <StaticImage class="footer-logo" src="../images/logo.png" />
    </main>
  );
};

export default IndexPage;
