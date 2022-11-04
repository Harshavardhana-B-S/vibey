import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <div className="fixed top-0 z-20 w-full bg-base-100/50 shadow-md shadow-base-content/30 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-2 py-2 text-lg md:text-xl">
        <Link href="/" className="font-mono">
          {'<Dev.Conf/>'}
        </Link>
        <a
          href="https://github.com/mkubdev/DevConf"
          className="btn btn-primary"
        >
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
