import React from "react";
import { Link } from "react-router-dom";
import "./css/home.css";
import ProfileImg from "../assets/images/profile-img.png";
import { ReactComponent as SlackIcon } from "../assets/icons/slack.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <header>
        <div>
          <button title="Share Link">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="h-ic-mb"
            >
              <rect
                className="svg-bg"
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                fill="white"
              />
              <path
                d="M21 21.8333C21.4602 21.8333 21.8333 21.4602 21.8333 21C21.8333 20.5398 21.4602 20.1667 21 20.1667C20.5397 20.1667 20.1666 20.5398 20.1666 21C20.1666 21.4602 20.5397 21.8333 21 21.8333Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.8333 21.8333C27.2935 21.8333 27.6666 21.4602 27.6666 21C27.6666 20.5398 27.2935 20.1667 26.8333 20.1667C26.3731 20.1667 26 20.5398 26 21C26 21.4602 26.3731 21.8333 26.8333 21.8333Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.1666 21.8333C15.6269 21.8333 16 21.4602 16 21C16 20.5398 15.6269 20.1667 15.1666 20.1667C14.7064 20.1667 14.3333 20.5398 14.3333 21C14.3333 21.4602 14.7064 21.8333 15.1666 21.8333Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                stroke="#D0D5DD"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1 3"
              />
            </svg>
            <svg
              id="h-ic-lg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="svg-bg"
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                fill="white"
              />
              <path
                d="M28.3261 21.5062C28.5296 21.3318 28.6313 21.2446 28.6686 21.1409C28.7013 21.0498 28.7013 20.9502 28.6686 20.8591C28.6313 20.7554 28.5296 20.6682 28.3261 20.4938L21.2672 14.4433C20.917 14.1431 20.7419 13.9931 20.5937 13.9894C20.4648 13.9862 20.3418 14.0428 20.2603 14.1427C20.1667 14.2576 20.1667 14.4883 20.1667 14.9495V18.5289C18.3878 18.8401 16.7597 19.7415 15.5498 21.0949C14.2307 22.5704 13.501 24.48 13.5 26.4591V26.9691C14.3745 25.9157 15.4663 25.0638 16.7006 24.4716C17.7889 23.9495 18.9653 23.6403 20.1667 23.5588V27.0505C20.1667 27.5117 20.1667 27.7424 20.2603 27.8573C20.3418 27.9572 20.4648 28.0138 20.5937 28.0106C20.7419 28.0069 20.917 27.8569 21.2672 27.5567L28.3261 21.5062Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                stroke="#D0D5DD"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1 3"
              />
            </svg>
          </button>
          <figure id="profile">
            <img id="profile__img" src={ProfileImg} alt="emmo" />
            <div id="overlay"></div>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.37722C2 8.0269 2 7.85174 2.01462 7.70421C2.1556 6.28127 3.28127 5.1556 4.70421 5.01462C4.85174 5 5.03636 5 5.40558 5C5.54785 5 5.61899 5 5.67939 4.99634C6.45061 4.94963 7.12595 4.46288 7.41414 3.746C7.43671 3.68986 7.45781 3.62657 7.5 3.5C7.54219 3.37343 7.56329 3.31014 7.58586 3.254C7.87405 2.53712 8.54939 2.05037 9.32061 2.00366C9.38101 2 9.44772 2 9.58114 2H14.4189C14.5523 2 14.619 2 14.6794 2.00366C15.4506 2.05037 16.126 2.53712 16.4141 3.254C16.4367 3.31014 16.4578 3.37343 16.5 3.5C16.5422 3.62657 16.5633 3.68986 16.5859 3.746C16.874 4.46288 17.5494 4.94963 18.3206 4.99634C18.381 5 18.4521 5 18.5944 5C18.9636 5 19.1483 5 19.2958 5.01462C20.7187 5.1556 21.8444 6.28127 21.9854 7.70421C22 7.85174 22 8.0269 22 8.37722V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V8.37722Z"
                  stroke="#F9FAFB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16.5C14.2091 16.5 16 14.7091 16 12.5C16 10.2909 14.2091 8.5 12 8.5C9.79086 8.5 8 10.2909 8 12.5C8 14.7091 9.79086 16.5 12 16.5Z"
                  stroke="#F9FAFB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </figure>
          <h1 id="twitter">lord_emmo</h1>
        </div>
      </header>
      <main>
        <div id="my_links">
          <a
            id="twitter"
            href="https://twitter.com/lord_emmo"
            rel="noreferrer"
            target="_blank"
          >
            Twitter Link
          </a>
          <a
            id="btn__zuri"
            href="https://training.zuri.team/"
            rel="noreferrer"
            target="_blank"
          >
            Zuri Team
          </a>
          <a
            id="book"
            href="https://training.zuri.team/"
            rel="noreferrer"
            target="_blank"
            title="get books on design and coding"
          >
            Zuri Books
          </a>
          <a
            id="book__python"
            href="https://books.zuri.team/python-for-beginners?ref_id=emmo"
            rel="noreferrer"
            target="_blank"
            title="get access to books on python to take you from zero to hero in the most optimal timeframe."
          >
            Python Books
          </a>
          <a
            id="pitch"
            href="https://training.zuri.team/"
            rel="noreferrer"
            target="_blank"
            title="Speed up your hiring process, let us worry about carrying out due diligence for your coders."
          >
            Background Check for Coders
          </a>
          <a
            id="book__design"
            href="https://books.zuri.team/design-rules"
            rel="noreferrer"
            target="_blank"
            title="Want to build a great career in design? check out our free books on design."
          >
            Design Books
          </a>
          <Link id="contact" to="/contact" title="contact me">
            Contact Me
          </Link>
        </div>
        <div id="socials">
          <a
            href="https://app.slack.com/client/T042F7V19Q8/D0495SRUX32/rimeto_profile/U048JKTKGH2"
            rel="noreferrer"
            target="_blank"
          >
            <SlackIcon />
          </a>
          <a
            href="https://github.com/coded1guy"
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Home;
