'use client';
import useSWR from 'swr';
import { fetcherWithAuth } from '@/utils/fetcherWithAuth';
import Link from 'next/link';
import { deleteBook } from './delete';
import './styles.css';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

type BookType = {
  _uuid: string;
  title: string;
  author: string;
  imageurl: string;
};

export default function Page() {
  const { data, error } = useSWR(
    [
      'https://crudapi.co.uk/api/v1/books',
      'km5n2D0cYutereoe2VWmz20uN2DfTWOLc-ghZMf7hisC_cD5tg',
    ],
    fetcherWithAuth,
    { refreshInterval: 1000 },
  );

  if (error) console.log(error);
  if (data) {
    console.log('Data z API');
    console.log(data.items);
  }
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>List of all books</h1>
      <div className="table-container">
        <table>
          <tr>
            {' '}
            <th>Title</th>
            <th>Author</th>
            <th>Edit book</th>
            <th>Delete book</th>
          </tr>
          {data.items
            ? data.items.map((book: BookType) => (
                <tr>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <Link href={`/admin/books/${book._uuid}`}>
                      <FaEdit className="edit-icon" />
                    </Link>
                  </td>
                  <td>
                    <button
                      className="delete-icon"
                      onClick={() => deleteBook(book._uuid)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            : 'No Data'}
        </table>
      </div>
    </div>
  );
}
