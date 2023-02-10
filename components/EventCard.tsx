import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { publicationIdVotes } from '../lib/services/publications.services';
import HeartDisLike from './HeartDisLike';
import HeartLike from './HeartLike';

type AppProps = {
  title: string;
  description: string;
  id: string | null;
  counter: string;
  content: string;
  img: string;
};

export default function EventCard({
  title,
  description,
  id,
  counter,
  content,
  img,
}: AppProps) {
  const [likeHeart, setLikeHeart] = useState(false);

  const handleVote = () => {
    publicationIdVotes(id)
      .then((res) => {
        Swal.fire({
          position: 'top',
          toast: true,
          icon: 'success',
          title: 'Gracias por tu voto',
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: 'top',
          toast: true,
          icon: 'error',
          title: 'El voto no ha sido registrado',
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const [textLegth, setTextLegth] = useState<boolean>(false);

  useEffect(() => {
    if (title.length > 23) {
      setTextLegth(true);
    }
  }, []);

  return (
    <div className="w-[300px] h-[450px] ml-[1px] rounded-[20px] drop-shadow-1xl bg-[#FFFFFF] sm:ml-1 overflow-hidden">
      <div className="w-full bg-[url('/img/tienda.png')] hover:scale-[1.01] duration-[0.5s] rounded-t-lg h-1/2 mb-[15px] ">
        <button
          onClick={handleVote}
          className="w-[50px] h-[50px] absolute flex justify-center items-center bg-primary-grayLight rounded-full border-2 border-[#FFFFFF] top-48 right-2 transition-all duration-300 hover:scale-110"
        >
          {likeHeart ? <HeartLike /> : <HeartDisLike />}
        </button>
      </div>

      <Link href={`/detail-page/${id}`}>
        <div className="flex flex-col justify-between w-full h-1/2">
          <div>
            <h2 className=" w-[250px] m-auto h600-medium-20px text-primary-blackLight whitespace-nowrap overflow-x-hidden relative">
              {title}
              <span
                className={`${
                  textLegth ? ' ' : 'hidden'
                } absolute right-0 bg-white px-[2px]`}
              >
                ...
              </span>
            </h2>
            <div className="max-w-[300px] h-[120px] overflow-hidden relative">
              <p className="w-[250px] m-auto text-primary-grayDark h400-medium-15px mt-2">
                {description}
              </p>
              <div className="h-[44px] absolute bottom-0 bg-gradient-to-b from-[#ffffff6c] to-[#ffffff] w-full z-[10000]"></div>
            </div>
          </div>
          <div className="w-[250px] mb-7 m-auto">
            <span className="text-[#1B4DB1] block h500-medium-14px  mb-3">
              {content}
            </span>
            <span className="h500-medium-14px  flex items-center gap-3 text-[#1A1E2E]">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.89245 12.3778L1.8923 12.3781C1.68621 12.7136 1.5835 13.0766 1.5835 13.4834V14.25C1.5835 14.5764 1.69105 14.8376 1.92733 15.0738C2.16269 15.3092 2.42338 15.4167 2.75016 15.4167H14.2502C14.5768 15.4167 14.8379 15.3093 15.074 15.0738C15.3094 14.8378 15.4168 14.5766 15.4168 14.25V13.4834C15.4168 13.0766 15.3141 12.7136 15.108 12.3781L15.1079 12.3778C14.8992 12.0379 14.6301 11.7874 14.2932 11.6122C13.3524 11.1422 12.4008 10.7916 11.438 10.5581C10.4738 10.3249 9.49492 10.2084 8.50016 10.2084C7.5054 10.2084 6.52654 10.3249 5.56233 10.5581L1.89245 12.3778ZM1.89245 12.3778C2.10108 12.0379 2.37019 11.7874 2.7071 11.6122M1.89245 12.3778L2.7071 11.6122M2.7071 11.6122C3.64777 11.1423 4.59919 10.7917 5.5619 10.5582L2.7071 11.6122ZM8.50016 7.75004C7.64649 7.75004 6.93437 7.45483 6.3232 6.84367C5.71204 6.23251 5.41683 5.52038 5.41683 4.66671C5.41683 3.81304 5.71204 3.10091 6.3232 2.48975C6.93437 1.87858 7.64649 1.58337 8.50016 1.58337C9.35384 1.58337 10.066 1.87858 10.6771 2.48975C11.2883 3.10091 11.5835 3.81303 11.5835 4.66671C11.5835 5.52038 11.2883 6.23251 10.6771 6.84367C10.066 7.45483 9.35384 7.75004 8.50016 7.75004Z"
                  stroke="#1A1E2E"
                  strokeWidth="1.5"
                />
              </svg>
              {counter} votos
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
