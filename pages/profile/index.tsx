import Image from 'next/image';
import { ReactElement, useEffect } from 'react';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Label from '../../components/Label';
import NextButton from '../../components/NextButton';
import { useMyUserInfo } from '../../lib/services/user.services';
import { useAppDispatch } from '../../store/hooks';
import { setUserGlobal } from '../../store/slices/user.slice';
import { NextPageWithLayout } from '../_app';

const Profile: NextPageWithLayout = () => {
  const dispatch = useAppDispatch();
  const { data } = useMyUserInfo();

  useEffect(() => {
    if (data) {
      dispatch(setUserGlobal(data));
    }
  }, [data]);

  const arrCard: string[] = ['1', '2', '3', '4', '5', '6'];
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
        <div className="flex gap-10 mx-auto mb-14 flex-wrap md:gap-6 justify-center  ">
          {arrCard.map((card) => (
            <EventCard
              key={card}
              title="Tienda de ropa femenina ZARA"
              description="Tienda de ropa"
              content="ladygaga.com"
              counter="91800756"
            />
          ))}
        </div>
        <div className="flex items-center justify-center  lg:hidden">
          <NextButton set="" state={false} action="Ver mas" />
        </div>
      </section>
    </div>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
      <Footer style="hidden" />
    </>
  );
};

export default Profile;
