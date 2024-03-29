import './styles.css';

export default function Home() {
  return (
    <div className="full-page">
      <div className="homepage-texts">
        <h1 className="title">Book database</h1>
        <p className="description">Find the right book for your next reading</p>
      </div>
      <img src="/image.png" alt="books" className="home-image" />
    </div>
  );
}
