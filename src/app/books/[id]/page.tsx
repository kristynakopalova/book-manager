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
              <p>Publisher: </p>
              <p>Published: </p>
              <p>
                Description: cbhjlewfc bdwjkf bkjfh nvjkbe jei ui gzgzř tízřiuhr
                fjk nmpok dfsadfoliugzfdsdfgzuiopiuzgfd sdfgzuiouz tdsasdfgzio
                pdsadftzu ioudsdfgzko,esad fgz uhes dfg zhuio esasdfgzh uo pewas
                drt zuioé iaaSD FGHJK LŮK SAD FGHJKIJHG FDSFGH JKLJHG FDSAS
                DFGHOI UZTFDSA iuztd rszuio uztfdsd fghuiuz tfrdesauztrdes
              </p>
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
