'use client';
import useSWR from 'swr';
import './styles.css';
import { fetcherWithAuth } from '@/utils/fetcherWithAuth';
import { updateBook } from '@/app/admin/books/[id]/update';

export default function Page({ params }: { params: { id: string } }) {
  async function handleUpdate(formData: FormData) {
    await updateBook(formData, params.id);
    return;
  }
  const { data, error } = useSWR(
    [
      `https://crudapi.co.uk/api/v1/books/${params.id}`,
      'km5n2D0cYutereoe2VWmz20uN2DfTWOLc-ghZMf7hisC_cD5tg',
    ],
    fetcherWithAuth,
    { refreshInterval: 500 },
  );

  if (error) console.log(error);

  return (
    <div className="form-container">
      <h2>Update book</h2>
      <form className="form" action={handleUpdate}>
        <div className="form-row">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="title"
            defaultValue={data?.title}
          />
        </div>
        <div className="form-row">
          <label>Author</label>
          <input
            type="text"
            name="author"
            placeholder="author"
            defaultValue={data?.author}
          />
        </div>
        <div className="form-row">
          <label>Image URL</label>
          <input
            type="text"
            name="imageurl"
            placeholder="imageurl"
            defaultValue={data?.imageurl}
          />
        </div>
        <div className="form-row">
          <label>Publisher</label>
          <input
            type="text"
            name="publisher"
            placeholder="publisher"
            defaultValue={data?.publisher}
          />
        </div>
        <div className="form-row">
          <label>Published</label>
          <input
            type="text"
            name="published"
            placeholder="published"
            defaultValue={data?.published}
          />
        </div>
        <div className="form-row ">
          <label>Description</label>
          <textarea
            className="text-area"
            name="description"
            placeholder="description"
            defaultValue={data?.description}
          />
        </div>
        <button className="submit-button" type="submit">
          Update book
        </button>
      </form>
    </div>
  );
}
