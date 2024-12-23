import Link from 'next/link';

export default function Menu() {
  return (
    <div className="w-60 p-40 bg-gray-100 text-gray-900">
      
      <nav className="flex flex-col space-y-2">
        <Link href="/" className="text-lg hover:text-gray-500">
            <h1 className="text-2xl font-bold text-center mb-0">Guillermo Basterra</h1>
        </Link>
        <Link href="/about" className="text-lg hover:text-gray-500">
          About
        </Link>
        <Link href="/resume" className="text-lg hover:text-gray-500">
          Resume
        </Link>
        <Link href="/contact" className="text-lg hover:text-gray-500">
          Contact
        </Link>
      </nav>
    </div>
  );
}
