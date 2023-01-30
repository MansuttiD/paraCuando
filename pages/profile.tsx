import Image from 'next/image';
import EventCard from '../components/EventCard';
import Label from '../components/Label';
import NextButton from '../components/NextButton';

export default function Profile() {
  return (
    <div>
      <section className="h-32 bg-primary-blue "></section>
      <section className="max-w-[1240px] m-auto ">
        <div className="flex flex-col justify-center items-center translate-y-[-36%] gap-7 ">
          <div>
            <Image
              src="/perfilDefault.svg"
              alt="Perfil Picture"
              width={117}
              height={117}
            />
          </div>
          <div className="flex gap-5">
            <Label category="Mis votos " />
            <Label category="Mis Publicaciones" />
          </div>
        </div>
        <div className="flex gap-11 mx-auto mb-14 flex-row flex-wrap lg:gap-6  ">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        <div className="flex items-center justify-center  lg:hidden">
          <NextButton set="" state={false} action="Ver mas" />
        </div>
      </section>
    </div>
  );
}
