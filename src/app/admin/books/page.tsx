'use client';
import useSWR from 'swr';
import { fetcherWithAuth } from '@/utils/fetcherWithAuth';

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
                <td></td>
                <td>Delete</td>
              </tr>
            ))
          : 'No Data'}
      </table>
    </div>
  );
}
