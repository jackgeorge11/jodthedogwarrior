import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/index.scss";

const IndexPage = () => {
  const [contact, setContact] = useState(false);
  const [burger, setBurger] = useState(false);

  const reveal = () => {
    if (!contact) {
      setContact(true);
    }
  };

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
        <div className="main-header">
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
            <button className="top">
              <Link to="#services">
                <p>Services</p>
              </Link>
            </button>
            <button onClick={reveal}>
              <Link to="#contact">
                <p>Contact</p>
              </Link>
            </button>
            <button>
              <Link to="#about">
                <p>Jody's Story</p>
              </Link>
            </button>
          </div>
          <button
            class={
              burger
                ? "hamburger hamburger--3dxy is-active"
                : "hamburger hamburger--3dxy"
            }
            type="button"
            onClick={() => setBurger((prev) => !prev)}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div
          className={burger ? "hamburger-menu is--active" : "hamburger-menu"}
        >
          <button className="top" onClick={() => setBurger(false)}>
            <Link to="#services">
              <p>Services</p>
            </Link>
          </button>
          <button
            onClick={() => {
              reveal();
              setBurger(false);
            }}
          >
            <Link to="#contact">
              <p>Contact</p>
            </Link>
          </button>
          <button>
            <Link to="#about" onClick={() => setBurger(false)}>
              <p>Jody's Story</p>
            </Link>
          </button>
        </div>
      </nav>

      <div className="main-wrapper">
        <article className="section" id="contact">
          <div className="image">
            <StaticImage src="../images/walking-dogs.jpg" objectFit="cover" />
          </div>
          <div className="info">
            <h1>
              <i>Dogs speak, but only to those who know how to listen.</i>
            </h1>
            <h2>
              Helping humans understand dog behavior and how it affects the
              relationship you have with them
            </h2>

            {contact ? (
              <div className="contacts">
                <button className="contact">
                  <a href="tel:+13104829149">
                    <p>+1 (310) 482-9149</p>
                  </a>
                </button>
                <button className="contact">
                  <a href="mailto:jodthedogwarrior@gmail.com">
                    <p>jodthedogwarrior@gmail.com</p>
                  </a>
                </button>
              </div>
            ) : (
              <div className="ctas">
                <button className="top">
                  <Link to="#services">
                    <p>View Services</p>
                  </Link>
                </button>
                <button className="contact" onClick={reveal}>
                  <p>Show Contact Info</p>
                </button>
              </div>
            )}
          </div>
        </article>

        <article className="section" id="services">
          <div className="info full">
            <div className="section-title">
              <div className="line"></div>
              <h1>Services</h1>
              <div className="line"></div>
            </div>
            <h2 className="thick">How it works</h2>
            <h2>
              We will first schedule a 15 minute phone call so I can get a feel
              for what your needs are and what you would like to work on with
              your dog. This will help optimize our time together during the
              in-person consultation.
            </h2>
            <h2 className="thick">
              In-Person Consultation Session: (90 minutes $200)
            </h2>
            <h2>
              The consultation will last approximately 90 minutes and will cover
              an assessment at your home with you and your dog. If it is not
              possible to meet at your home, I will suggest another location
              that is convenient. During the consultation, we will go over your
              routine with your dog including what areas you would like to focus
              on and which of your dog's behaviors you would like to understand.
              In addition, we will work on relationship-building skills and how
              to identify habits that may be getting in the way of a balanced
              relationship with your dog. I believe that building confidence is
              a key factor in training and dog psychology. I will make
              suggestions consisting of appropriate tools to use, which
              leash(es) would be best to master your walks and any other
              information that would be helpful so you will enjoy your training
              journey.
            </h2>
            <h2 className="thick">Follow up sessions: ($150/hour)</h2>
            <h2>
              These are additional, one hour, in-person, one-on-one training
              sessions. I recommend booking the first follow up session for two
              weeks after your in-person consultation, and as needed every two
              weeks following, in order to maximize your training program.
            </h2>
            <h2 className="thick">Package of 4 sessions $500</h2>
            <button className="cta" onClick={reveal}>
              <Link to="#contact">
                <p>Get in touch</p>
              </Link>
            </button>
          </div>
        </article>

        <article className="section reverse" id="about">
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
            <div className="section-title">
              <div className="line"></div>
              <h1>Jody's Story</h1>
              <div className="line"></div>
            </div>
            <h2>
              Jody’s love of all things dog began in early childhood with her
              first Old English Sheepdog, Charlie. Their bond was magical and
              from an early age she knew how to figure out what he needed and
              how he was communicating with her.
            </h2>
            <h2>
              In 2006 Jody founded a full service dog walking ​and dog sitting
              company​, Dog Walker Extraordinaire (DWE). During this time, Jody​
              personally cared for countless dogs​, most of whom she helped
              train and socialize. ​In this experience, Jody discovered her
              passion for training​ and it became ​her focus and dream.
            </h2>
            <h2>
              Jody began her formal training journey when she met esteemed dog
              behaviorist{" "}
              <a
                href="https://cheriwulfflucas.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cheri Lucas
              </a>{" "}
              and mentored under behaviorist/trainer{" "}
              <a
                href="https://www.betzk9.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Betsey Gunter
              </a>
              . She then attended several workshops including one with{" "}
              <a
                href="https://www.ortails.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oregon Tails
              </a>
              , where she learned the valuable "Jentle Method”, a form of energy
              work. Jody has dedicated countless hours to continuous studying
              and learning in order to strengthen her knowledge.
            </h2>
            <h2>
              Every dog is unique and has their own innate qualities. Jody is
              committed to sharing her experience with her human clients so they
              can build on this foundation. ​Clients will gain knowledge,
              helpful tools, and the critical understanding ​of building a
              healthy foundation between human and canine​. This in turn will
              create a solid​, lasting bond for a happy life together.
            </h2>
            <h2>
              Jody is based in Los Angeles, California. In her free time, Jody
              volunteers with local animal rescue organizations.
            </h2>
            <div className="ctas">
              <button className="cta">
                <Link to="#services">
                  <p>Learn more</p>
                </Link>
              </button>
              <button className="cta" onClick={reveal}>
                <Link to="#contact">
                  <p>Get in touch</p>
                </Link>
              </button>
            </div>
          </div>
        </article>
        <article className="section" id="testimonials">
          <div className="info">
            <div className="section-title">
              <div className="line"></div>
              <h1>Testimonials</h1>
              <div className="line"></div>
            </div>
            <div className="testimonial">
              <StaticImage src="../images/gayle.jpg" objectFit="cover" />
              <div className="words">
                <h2 className="italic">
                  Jody is an intuitive trainer. She showed me how to properly
                  walk my mini Aussie Shepherd that I was struggling with daily
                  while he pulled and lunged on our walks making it impossible
                  for me to walk him. Now he is on the proper lead. He is in
                  such a better state of mind while on walks and I have so much
                  more control. I am a lot less stressed now and so is he! Morty
                  and I love Jody and her way of training and explaining from a
                  dogs perspective. <span>~ Gayle S, Los Angeles</span>
                </h2>
              </div>
            </div>
            <div className="testimonial">
              <StaticImage src="../images/anna.jpeg" />
              <div className="words">
                <h2 className="italic">
                  Jody’s work with our pup was nothing short of magic. She
                  helped us to establish a clear and solid relationship with our
                  growing puppy, and, helped us to deflect unwanted behavior
                  before it gets out of hand. Within 20 minutes of meeting our
                  pup, Jody had earned her trust and respect, and, had
                  established an amazing relationship of true leadership with
                  her. We learned a ton by watching Jody interact with our pup.
                  Her method is simple and easy to implement.{" "}
                  <span>~ Anna T, Marina Del Rey</span>
                </h2>
              </div>
            </div>

            <div className="testimonial">
              <StaticImage src="../images/shelly.jpeg" />
              <div className="words">
                <h2 className="italic">
                  With Jody’s training I am finally able to walk my 80 lb. dog
                  without him pulling me. She showed me how to use the proper
                  leash and how to actually lead and not be led by my dog.
                  Instead of jumping at the door before our walk, he waits
                  patiently. Jody was clear, concise and compassionate.{" "}
                  <span>~ Shelly K, Mar Vista</span>
                </h2>
              </div>
            </div>
          </div>
        </article>
      </div>
      <StaticImage class="footer-logo" src="../images/logo-edited.png" />
      <div className="socials">
        <a
          href="https://www.instagram.com/jodthedogwarrior/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage src="../images/instagram.png" />
        </a>
        <a
          href="https://www.facebook.com/jodthedogwarrior/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage src="../images/facebook.png" />
        </a>
      </div>
    </main>
  );
};

export default IndexPage;
