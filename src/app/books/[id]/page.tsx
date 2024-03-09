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

  return (
    <>
      {data ? (
        <div className="book">
          <h1 className="detail-headline">{data.title}</h1>
          <div className="book-information">
            <div className="more-information">
              <p>
                <strong>Author: </strong>
                {data.author}
              </p>
              <p>
                <strong>Publisher: </strong> {data.publisher}{' '}
              </p>
              <p>
                <strong>Published: </strong>
                {data.published}{' '}
              </p>
              <p>
                <strong>Description: </strong>
                {data.description}
              </p>
            </div>
            <img
              className="detail-image"
              src={data.imageurl}
              alt={data.title}
            />
          </div>
        </div>
      ) : (
        'Loading'
      )}
    </>
  );
}
