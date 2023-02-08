import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import LabelBox from '../components/LabelBox';
import SliderCard from '../components/SliderCard';
import { usePublication } from '../lib/services/publications.services';
import { useAppDispatch } from '../store/hooks';
import { setEvents } from '../store/slices/events.slice';

const Index = () => {
  const [eventsInfo, setEventsInfo] = useState();
  const { data } = usePublication();
  const dispatch = useAppDispatch();
  dispatch(setEvents(data?.results.results));

  useEffect(() => {
    if (data) {
      setEventsInfo(data?.results.results);
    }
  }, [data]);

  if (eventsInfo) {
    return (
      <div>
        <Hero />
        <div className="max-w-[1240px] m-auto ">
          <SliderCard
            events={eventsInfo}
            title="Populares en Queretaro"
            description="Lo que las personas piden mas"
          />
          <SliderCard
            events={eventsInfo}
            title="Sugerencias para ti"
            description="Publicaciones que podrias colaborar"
          />
          <LabelBox />
          <SliderCard
            events={eventsInfo}
            title="Recientes"
            description="Las personas ultimamente estan hablando de esto"
          />
        </div>
      </div>
    );
  }
};

export default Index;
