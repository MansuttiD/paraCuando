import Image from 'next/image';
import { useState } from 'react';
import InputSearch from '../components/InputSearch';
import Label from '../components/Label';
import SliderCard from '../components/SliderCard';

export default function DetailPage() {
  const [showMenuLabels, setShowMenuLabes] = useState(false);

  const handleClickMenu = () => {
    setShowMenuLabes(!showMenuLabels);
  };
  return (
    <div>
      {/* Input de buaqueda  y etiquetas */}
      <div className="flex items-center justify-around min-h-[120px]">
        <div className="relative">
          <button
            onClick={handleClickMenu}
            className="w-12 h-12 border-2 rounded-full border-primary-gray md:hidden"
          >
            <svg
              className="m-auto"
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12C7.71667 12 7.47933 11.904 7.288 11.712C7.096 11.5207 7 11.2833 7 11C7 10.7167 7.096 10.4793 7.288 10.288C7.47933 10.096 7.71667 10 8 10H10C10.2833 10 10.521 10.096 10.713 10.288C10.9043 10.4793 11 10.7167 11 11C11 11.2833 10.9043 11.5207 10.713 11.712C10.521 11.904 10.2833 12 10 12H8ZM1 2C0.716667 2 0.479333 1.90433 0.288 1.713C0.0960001 1.521 0 1.28333 0 1C0 0.716667 0.0960001 0.479 0.288 0.287C0.479333 0.0956668 0.716667 0 1 0H17C17.2833 0 17.5207 0.0956668 17.712 0.287C17.904 0.479 18 0.716667 18 1C18 1.28333 17.904 1.521 17.712 1.713C17.5207 1.90433 17.2833 2 17 2H1ZM4 7C3.71667 7 3.479 6.904 3.287 6.712C3.09567 6.52067 3 6.28333 3 6C3 5.71667 3.09567 5.479 3.287 5.287C3.479 5.09567 3.71667 5 4 5H14C14.2833 5 14.5207 5.09567 14.712 5.287C14.904 5.479 15 5.71667 15 6C15 6.28333 14.904 6.52067 14.712 6.712C14.5207 6.904 14.2833 7 14 7H4Z"
                fill="black"
              />
            </svg>
          </button>
          <div
            className={`${
              showMenuLabels
                ? 'p-4 bg-white absolute flex flex-col gap-3'
                : 'hidden'
            } md:flex md:flex-row md:static md:bg-transparent md:p-0 md:gap-4`}
          >
            <Label category="Marcas y tiendas" />
            <Label category="Artistas y conciertos" />
            <Label category="Torneos" />
          </div>
        </div>
        <div className="w-[314px] lg:w-[373px]">
          <InputSearch />
        </div>
      </div>

      {/* Informacion sobre el evento, Descripcion, Artista, Genero, Pagina etc */}
      <div className="flex items-center justify-center w-full m-auto">
        <div className=" flex flex-col  gap-10 p-4 m-auto  items-center lg:grid lg:grid-rows-2 lg:grid-cols-5 lg:w-4/5 lg:h-[450px]">
          <div className="h-full col-start-1 col-end-3 row-start-1 row-end-2 pl-9">
            <span className="h500-normal-16px">Artista / Pop / Rock</span>
            <h2 className=" h900-normal-48px h900-normal-48px lg:w-min-[400px]">
              Concierto de Lady Gaga
            </h2>
            <p className="mt-7 mb-7 h400-medium-15px text-primary-grayDark drop-shadow-1xl">
              El concierto con la temática de Lady gaga en Las Vegas. El
              concierto con la temática de Lady gaga en Las Vegas.El concierto
              con la temática.
            </p>
            <div>
              <span className=" h500-medium-14px text-primary-blue">
                ladigaga.com
              </span>
              <span className="flex gap-3 mt-3">
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
                    stroke-width="1.5"
                  />
                </svg>
                <span className="text-primary-blackLight h500-medium-14px leading-leading-3">
                  900,800,120 votos
                </span>
              </span>
            </div>
          </div>

          {/* <div className="bg-[url('/img/event.jpg')] w-4/5 bg-cover h-full md:row-span-2 md:col-span-2" /> */}
          <div className="w-full col-start-3 col-end-6 row-start-1 row-end-3 m-auto bg-cover lg:w-auto lg:h-full">
            <Image
              alt="destacada"
              width={540}
              height={381}
              src={'/img/event.jpg'}
            />
          </div>
          <button className="m-auto mb-9 lg:ml-8 bg-primary-blue w-full h-[40px] rounded-2xl h500-normal-16px text-white col-start-1 col-end-3 row-start-2 row-end-3">
            Votar
          </button>
        </div>
      </div>

      {/* Sugerencias de busqueda del evento */}

      <div>
        <div className="bg-primary-grayLighter pt-[25px] px-[60px] max-w-[950px] min-h-[250px] mt-16 flex flex-col gap-6 md:m-auto md:mt-16 pb-10 text-primary-grayDark">
          <h2 className="mb-3 h500-normal-24px">¡Hagámoslo más personal!</h2>
          <h3 className="h400-normal-16px">
            Selecciona tus interes para brindarte sugerencia de acuerdo a tus
            gustos
          </h3>
          <div className="flex flex-wrap w-full gap-4">
            <Label category="Restaurantes" />
            <Label category="Tienda de ropa" />
            <Label category="Rock" />
            <Label category="Restaurantes" />
            <Label category="Restaurantes" />
          </div>
          <a className="h400-normal-16px text-primary-blue ">
            Ver todos los intereses
          </a>
        </div>
      </div>

      {/* Slider de mas eventos */}

      <SliderCard title="title_1" description="Desription One" />
    </div>
  );
}
