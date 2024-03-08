import './styles.css';
import Link from 'next/link';

type BookParamType = {
  id: string,
  title: string;
  author: string;
  imageurl: string;
};

export default function Book(props: BookParamType) {
  const linkAdress = `/books/${props.id}`;
  return (
    <div className="book_view">
      <Link href={linkAdress}>
        <img
          src={props.imageurl}
          alt={props.title}
          className="book_view_img"
        ></img>
      </Link>
      <p>{props.title}</p>
      <p>{props.author}</p>
    </div>
  );
}
