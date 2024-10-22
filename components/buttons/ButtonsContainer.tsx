import { FaSquareXTwitter, FaSquareEnvelope, FaSquareGithub, FaSquareInstagram, FaLinkedin, FaSquareYoutube } from "react-icons/fa6";

export default function ButtonsContainer() {
  return (
    <div className="flex flex-row justify-center text-red-400 dark:text-red-300">
      <a className="no-underline" target="_blank" href="mailto:jeydin@j21.dev">
        <div className="p-2 duration-300 text-[3em] hover:-translate-y-2 hover:rotate-6" aria-hidden="true"
          title="Email">
          <FaSquareEnvelope />
        </div>
      </a>
      <a className="no-underline" target="_blank" href="https://github.com/Jeydin21">
        <div className="p-2 duration-300 text-[3em] hover:-translate-y-2 hover:rotate-6" aria-hidden="true"
          title="GitHub">
          <FaSquareGithub />
        </div>
      </a>
      <a className="no-underline" target="_blank" href="https://twitter.com/Jeydin21">
        <div className="p-2 duration-300 text-[3em] hover:-translate-y-2 hover:rotate-6" aria-hidden="true"
          title="Twitter">
          <FaSquareXTwitter />
        </div>
      </a>
      <a className="no-underline" target="_blank" href="https://www.youtube.com/@Jeydin21">
        <div className="p-2 duration-300 text-[3em] hover:-translate-y-2 hover:rotate-6" aria-hidden="true"
          title="Instagram">
          <FaSquareYoutube />
        </div>
      </a>
      <a className="no-underline" target="_blank" href="https://www.instagram.com/jeydin21">
        <div className="p-2 duration-300 text-[3em] hover:-translate-y-2 hover:rotate-6" aria-hidden="true"
          title="Instagram">
          <FaSquareInstagram />
        </div>
      </a>
      <a className="no-underline" target="_blank" href="https://www.linkedin.com/in/jeydinpham">
        <div className="p-2 duration-300 text-[3em] hover:-translate-y-2 hover:rotate-6" aria-hidden="true"
          title="LinkedIn">
          <FaLinkedin />
        </div>
      </a>
    </div>
  );
}