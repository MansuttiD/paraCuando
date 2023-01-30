import Hero from '../components/Hero';
import Label from '../components/Label';
import SliderCard from '../components/SliderCard';

const Index = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-[1240px] m-auto ">
        <SliderCard
          title="Populares en Queretaro"
          description="Lo que las personas piden mas"
        />
        <SliderCard
          title="Sugerencias para ti"
          description="Publicaciones que podrias colaborar"
        />
        <div className="bg-primary-grayLighter pt-[25px] px-[60px] max-w-[950px] min-h-[250px] mt-16 flex flex-col gap-6 md:m-auto md:mt-16 pb-10 text-primary-grayDark">
          <h2 className="mb-3 h500-normal-24px">¡Hagámoslo más personal!</h2>
          <h3 className="h400-normal-16px">
            Selecciona tus interes para brindarte sugerencia de acuerdo a tus
            gustos
          </h3>
          <div className="flex w-full gap-4 overflow-x-scroll h-[50px] md:overflow-x-auto">
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
  );
};

export default Index;
