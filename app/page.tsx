import Container from './components/Container';

export default function Home() {
  return (
    <main className="py-10">
      <Container>
        <h1 className="text-3xl font-bold">My Services Website</h1>
        <p className="mt-4 text-gray-600">
          Welcome to my website. I provide high-quality services.
        </p>
      </Container>
    </main>
  );
}