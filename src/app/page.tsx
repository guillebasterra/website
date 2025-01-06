import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex items-center justify-center h-full w-full overflow-hidden">
      <div className="relative max-w-[calc(100vw-256px)] max-h-[80vh] w-full h-[80vh]">
        <Image
          src="/images/LA.png"
          alt="Description"
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </div>
    </main>
  );
}
