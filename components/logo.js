import Link from 'next/link';
import Image from 'next/dist/client/image';

export default function Logo() {
  return (
    <>
      <Link href="/">
        <a className="logo">
          <Image src="/img/tst18.png" width="250" height="70" />
        </a>
      </Link>
      <style jsx>{`
        .logo {
          font-style: normal;
          font-weight: 900;
          font-size: 22px;
          line-height: 20px;
          letter-spacing: 1.65px;
          color: #4d4d4d;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
