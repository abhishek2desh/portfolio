import "./menu.scss";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Abhishek_CV_Web.pdf";
import { AiOutlineDownload } from "react-icons/ai";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#resume">Resume</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "100px" }}
          >
          CV&nbsp;<AiOutlineDownload />
          </Button>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>

      </ul>
    </div>
  );
}
