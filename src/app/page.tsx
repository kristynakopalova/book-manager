import './styles.css';

// TODO: předelat styl z body
export default function Home() {
  return (
    <div className="full_page">
      <div className="homepage_texts">
        {' '}
        <h1 className="title">Book database</h1>
        <p className="description">
          Find the right book for your next reading
        </p>{' '}
      </div>
      <img src="/image.png" alt="books" className="home_image" />
    </div>
  );
}
