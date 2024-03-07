export default function Page({ params }: { params: { id: string } }) {
  return <div>User section - Book id: {params.id}</div>;
}
