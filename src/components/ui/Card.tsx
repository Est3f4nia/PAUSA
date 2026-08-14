import { Link } from "react-router-dom";


interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  link: string
}

export function Card({
  image,
  title,
  description,
  buttonText,
  link
}: CardProps) {

  return (
    <article className="card">

      <img src={image} alt="" />

      <h3>{title}</h3>

      <p>{description}</p>

      <Link to={link}>
        <button>{buttonText}</button>
      </Link>

    </article>
  );
}