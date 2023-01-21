import Hero from '../../components/Hero';
import Label from '../../components/Label';
import SliderCard from '../../components/SliderCard';

const Index = () => {
  return (
    <div>
      <Hero />
      <SliderCard
        title="Populares en Queretaro"
        description="Lo que las personas piden mas"
      />
      <SliderCard
        title="Sugerencias para ti"
        description="Publicaciones que podrias colaborar"
      />
      <div className="max-w-[950px] min-h-[250px] ml-16 mt-16 flex flex-col gap-6 md:m-auto md:mt-16">
        <h2 className="mb-3 h500-normal-24px">Hagamoslo mas personal</h2>
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
      <SliderCard
        title="Recientes"
        description="Las personas ultimamente estan hablando de esto"
      />
    </div>
  );
};

export default Index;
