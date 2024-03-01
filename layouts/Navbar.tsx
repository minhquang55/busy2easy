import Container from 'components/Container';
import Socials from 'components/Socials';
import siteData from 'siteData';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="fixed z-50 w-full bg-white border-b">
      <Container>
        <div className="flex justify-between w-full py-4">
          <Link href="/" passHref>
            {/* <div className="text-xl font-bold cursor-pointer">{siteData?.author}</div> */}
            <div className="text-xl font-bold cursor-pointer bg-[url('/b2e-logo-navbar.jpg')] bg-contain w-20 h-8 bg-no-repeat">
              {/* <Image
                src={siteData.profileUrl}
                className=""
                width={96}
                height={96}
                alt="profile"
              /> */}
            </div>
          </Link>
          <Socials />
        </div>
      </Container>
    </div>
  );
}
