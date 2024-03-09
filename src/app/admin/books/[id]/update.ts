'use server';

export async function updateBook(formData: FormData, id: string) {
  const data = {
    title: formData.get('title'),
    author: formData.get('author'),
    imageurl: formData.get('imageurl'),
    publisher: formData.get('publisher'),
    published: formData.get('published'),
    description: formData.get('description'),
  };

  try {
    const response = await fetch(`https://crudapi.co.uk/api/v1/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer km5n2D0cYutereoe2VWmz20uN2DfTWOLc-ghZMf7hisC_cD5tg',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}
