'use client';
import useSWR from 'swr';
import './styles.css';
import { fetcherWithAuth } from '@/utils/fetcherWithAuth';

export default function Page({ params }: { params: { id: string } }) {
  const { data, error } = useSWR(
    [
      `https://crudapi.co.uk/api/v1/books/${params.id}`,
      'km5n2D0cYutereoe2VWmz20uN2DfTWOLc-ghZMf7hisC_cD5tg',
    ],
    fetcherWithAuth,
  );

  if (error) console.log(error);
  if (data) {
    console.log('Data z API');
    console.log(data);
  }

  return (
    <>
      {data ? (
        <div className="book">
          <h1>{data.title}</h1>
          <div className="book_information">
            <div className="more_information">
              <p>Author: {data.author}</p>
              <p>Publisher: {data.publisher} </p>
              <p>Published: {data.published} </p>
              <p>Description: {data.description}</p>
            </div>
            <img src={data.imageurl} alt={data.title} />
          </div>
        </div>
      ) : (
        'Loading'
      )}
    </>
  );
}
