export default function Page() {
  async function createBook(formData: FormData) {
    'use server';

    const data = [
      {
        title: formData.get('title'),
      },
    ];

    console.log(data);
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
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <form action={createBook}>
      <input type="text" name="title" />
      <button type="submit">Create a new book</button>
    </form>
  );
}
