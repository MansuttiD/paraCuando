import Link from 'next/link';
import { useRouter } from 'next/router';
import InputSearch from '../../components/InputSearch';
import Label from '../../components/Label';
import SliderCard from '../../components/SliderCard';

const CategoriPage = () => {
  const router = useRouter();
  const { categories } = router.query;

  return (
    <div>
      <div
        style={{ backgroundImage: `url(/${categories}.jpg)` }}
        className={`px-[20px] py-[23px] h-[204px] bg-no-repeat bg-cover bg-center`}
      >
        <div className="max-w-[1200px] m-auto">
          <h4 className="text-white block h500-normal-16px  mb-[23px] ">{`Home/${
            categories == 'marcas'
              ? 'Marcas'
              : categories == 'artistas'
              ? 'Artistas'
              : 'Torneos'
          }`}</h4>
          <h2 className="text-primary-yellow h900-normal-48px mb-[6px]  ">
            {`${
              categories == 'marcas'
                ? 'Marcas y tiendas'
                : categories == 'artistas'
                ? 'Artistas y Conciertos'
                : 'Torneos y eventos '
            }`}
          </h2>
          <p className="text-white h500-normal-16px ">
            {`${
              categories == 'marcas'
                ? 'Descubre las marcas y tiendas que la gente quiere cérca'
                : categories == 'artistas'
                ? 'Descubre los Artistas y Conciertos que la gente quiere cérca'
                : 'Descubre los Torneos y eventos que la gente quiere cérca'
            }`}
          </p>
        </div>
      </div>
      <div className="max-w-[1240px] m-auto ">
        <div className="flex flex-col justify-center mt-[25px]  items-center gap-[22px] lg:gap-[166px] lg:flex-row-reverse">
          <div className="w-[373px]">
            <InputSearch />
          </div>
          <div className="flex flex-wrap gap-[2px] justify-center ">
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
        <div>
          <SliderCard
            title="Populares en Queretaro"
            description="Lo que las personas piden mas"
          />
          <SliderCard
            title="Sugerencias para ti"
            description="Publicaciones que podrias colaborar"
          />
          <div className=" bg-primary-grayLighter pt-[25px] px-[60px] max-w-[950px] min-h-[250px] mt-16 flex flex-col gap-6 md:m-auto md:mt-16 pb-10 text-primary-grayDark">
            <h2 className="mb-3 h500-normal-24px">¡Hagámoslo más personal!</h2>
            <h3 className="h400-normal-16px">
              Selecciona tus interes para brindarte sugerencia de acuerdo a tus
              gustos
            </h3>
            <div className="flex overflow-x-scroll w-full gap-4  md:overflow-x-auto ">
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
          <SliderCard
            title="Recientes"
            description="Las personas ultimamente estan hablando de esto"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriPage;