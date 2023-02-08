import Image from 'next/image';
import { ReactElement } from 'react';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Label from '../../components/Label';
import NextButton from '../../components/NextButton';
import { usePublication } from '../../lib/services/publications.services';
import { useMyUserInfo } from '../../lib/services/user.services';
import { NextPageWithLayout } from '../_app';

const Profile: NextPageWithLayout = () => {
  const { data } = usePublication();
  const myUser = useMyUserInfo();

  let myPublications: any[] = data?.results.results.filter(
    (publication: any) =>
      publication.profile_id == myUser.data.results.profile[0].id
  );

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
          {myPublications?.map((publication) => (
            <EventCard
              key={publication.id}
              id={publication.id}
              title={publication.title}
              description={publication.description}
              content={publication.content}
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
