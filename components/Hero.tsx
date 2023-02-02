import Image from 'next/image';
import Link from 'next/link';
import InputSearch from './InputSearch';
import Label from './Label';

const Footer = () => {
  return (
    <div className="bg-[url('/img/bg-footer.jpg')] bg-no-repeat bg-cover h-[438px] flex items-center flex-col justify-center gap-5">
      <Image
        src={'/img/Frame-footer.png'}
        alt={'frame'}
        width={200}
        height={200}
      />
      <div className=" w-[300px]  sm:w-[373px] lg:w-[465px]">
        <InputSearch />
      </div>
      <div className="flex gap-2 flex-wrap justify-center ">
        <Link href="/categories/marcas">
          <Label category="Marcas y tiendas" />
        </Link>
        <Link href="/categories/artistas">
          <Label category="Artistas y conciertos" />
        </Link>
        <Link href="/categories/torneos">
          <Label category="Torneos" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
