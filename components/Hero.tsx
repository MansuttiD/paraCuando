import Image from 'next/image';
import Link from 'next/link';
import { usePublicationsTypes } from '../lib/services/category.services';
import InputSearch from './InputSearch';
import Label from './Label';

const Footer = () => {
  const categorysList = usePublicationsTypes();

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
        {categorysList.data?.map((list) => (
          <Link
            key={list.id}
            href={`/categories/${list.name.toLowerCase().replaceAll(' ', '-')}`}
          >
            <Label category={list.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
