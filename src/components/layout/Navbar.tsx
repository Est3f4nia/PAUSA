import icon from "@/assets/general/icon.png";
import { Link } from "react-router-dom";


interface NavbarProps {
  variant?: "default" | "solid";
}

export function Navbar({ variant = "default" }: NavbarProps) {
  return (
    <header className={`navbar navbar--${variant}`}>
      <nav>
        <Link to="/">
          <img src={icon} width={75} alt="Logo" />
        </Link>

        <div className="nav-links">
          <Link to="/courses">
            Learning
          </Link>
          <Link to="/dictionary">
            Dictionary
          </Link>
          <a href="#">About</a>

          <Link to="/login">
            <button className="btn-plus">Login</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}