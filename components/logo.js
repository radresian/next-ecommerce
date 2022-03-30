import Link from 'next/link';
import Image from 'next/dist/client/image';

export default function Logo() {
  return (
    <>
      <Link href="/market">
        <a className="logo">
          <Image src="/img/logo1.png" width="72" height="60" />
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
