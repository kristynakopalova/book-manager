'use client';
import useSWR from 'swr';
import Book from '@/components/book/book';
import './styles.css';
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
      <h1 className="book_list_headline">List of all books</h1>
      <div className="book_list">
        {data.items
          ? data.items.map((book: BookType) => (
              <Book
                key={book._uuid}
                id={book._uuid}
                title={book.title}
                author={book.author}
                imageurl={book.imageurl}
              ></Book>
            ))
          : 'No Data'}
      </div>
    </div>
  );
}
