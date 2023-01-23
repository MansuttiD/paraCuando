import Image from 'next/image';
import InputSearch from './InputSearch';

const Footer = () => {
  return (
    <div className="bg-[url('/img/bg-footer.jpg')] bg-no-repeat bg-cover h-[438px] flex items-center flex-col justify-center gap-5">
      <Image
        src={'/img/Frame-footer.png'}
        alt={'frame'}
        width={200}
        height={200}
      />
      <InputSearch />
    </div>
  );
};

export default Footer;
