import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">You are not sure of what you want</h2>
      <p>We could not find the page you were looking for.</p>
      <p>Go back to all <Link href="/"><a>Tickets</a></Link></p>
    </main>
  );
}
