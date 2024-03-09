import type { Metadata } from 'next';
import Link from 'next/link';
import './styles.css';

export const metadata: Metadata = {
  title: 'Book dabase',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="menu">
          <Link className="menu-item" href="/">
            Home
          </Link>
          <Link className="menu-item" href="/books">
            List of books
          </Link>
          <Link className="menu-item" href="/admin/books">
            Admin
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
