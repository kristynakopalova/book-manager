import './styles.css';

export default function Page() {
  async function createBook(formData: FormData) {
    'use server';

    const data = [
      {
        title: formData.get('title'),
        author: formData.get('author'),
        imageurl: formData.get('imageurl'),
        publisher: formData.get('publisher'),
        published: formData.get('published'),
        description: formData.get('description'),
      },
    ];

    try {
      const response = await fetch('https://crudapi.co.uk/api/v1/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer km5n2D0cYutereoe2VWmz20uN2DfTWOLc-ghZMf7hisC_cD5tg',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="form-container">
      <h2>Create a new book</h2>
      <form className="form" action={createBook}>
        <div className="form-row">
          <label>Title</label>
          <input type="text" name="title" placeholder="title" />
        </div>
        <div className="form-row">
          <label>Author</label>
          <input type="text" name="author" placeholder="author" />
        </div>
        <div className="form-row">
          <label>Image URL</label>
          <input type="text" name="imageurl" placeholder="imageurl" />
        </div>
        <div className="form-row">
          <label>Publisher</label>
          <input type="text" name="publisher" placeholder="publisher" />
        </div>
        <div className="form-row">
          <label>Published</label>
          <input type="text" name="published" placeholder="published" />
        </div>
        <div className="form-row ">
          <label>Description</label>
          <textarea
            className="text-area"
            name="description"
            placeholder="description"
          />
        </div>
        <button className="submit-button" type="submit">
          Create a new book
        </button>
      </form>
    </div>
  );
}
