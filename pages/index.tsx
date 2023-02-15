import Hero from '../components/Hero';
import LabelBox from '../components/LabelBox';
import SliderCard from '../components/SliderCard';
import { usePublication } from '../lib/services/publications.services';

const Index = () => {
  const { data, mutate } = usePublication();

  return (
    <div>
      <Hero />
      <div className="max-w-[1240px] m-auto ">
        <SliderCard
          mutate={mutate}
          events={data}
          title="Populares en Queretaro"
          description="Lo que las personas piden mas"
        />
        <SliderCard
          events={data}
          mutate={mutate}
          title="Sugerencias para ti"
          description="Publicaciones que podrias colaborar"
        />
        <LabelBox />
        <SliderCard
          events={data}
          mutate={mutate}
          title="Recientes"
          description="Las personas ultimamente estan hablando de esto"
        />
      </div>
    </div>
  );
};

export default Index;
