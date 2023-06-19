import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <div className="h-24 w-full bg-yellow-500 flex items-center justify-around">
      <Image src="/images/pokeball.png" alt="" width="60" height="60" />
      <Link
        href="/buscar"
        className="bg-[rgb(232,82,81)] hover:bg-[rgb(233,67,67)] hover:drop-shadow-md px-4 py-1 rounded-md ease-in-out duration-300"
      >
        Buscar Pokemon
      </Link>
    </div>
  );
}
