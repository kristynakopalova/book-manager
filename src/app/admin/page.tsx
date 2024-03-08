import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Admin section</h1>
      <Link href="/admin/books">List all books</Link>
      <Link href="/admin/books/new">Create a new book</Link>
    </div>
  );
}
