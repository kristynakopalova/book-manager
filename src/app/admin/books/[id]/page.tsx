export default function Page({ params }: { params: { id: string } }) {
  return <div>Admin section - Book id: {params.id}</div>;
}
