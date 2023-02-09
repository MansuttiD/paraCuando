import Image from 'next/image';
import { ReactElement, useState } from 'react';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Label from '../../components/Label';
import NextButton from '../../components/NextButton';
import { usePublication } from '../../lib/services/publications.services';
import { useMyUserInfo, useMyVotes } from '../../lib/services/user.services';
import { NextPageWithLayout } from '../_app';

const Profile: NextPageWithLayout = () => {
  const { data } = usePublication();
  const { data: myData } = useMyUserInfo();
  const [publications, setPublications] = useState<boolean>(true);
  const myId = myData?.results.id;
  const myVotes = useMyVotes(myId);

  const myPublications: any[] = data?.results.results.filter(
    (publication: any) =>
      publication.profile_id == myData?.results.profile[0].id
  );

  const handleVotes = () => {
    setPublications(true);
  };
  const handlePublications = () => {
    setPublications(false);
  };

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
            <div className="cursor-pointer" onClick={handleVotes}>
              <Label category="Mis votos " />
            </div>
            <div className="cursor-pointer" onClick={handlePublications}>
              <Label category="Mis Publicaciones" />
            </div>
          </div>
        </div>
        <div
          className={`flex gap-10 mx-auto mb-14 flex-wrap md:gap-6 justify-center ${
            publications ? 'hidden' : ''
          }`}
        >
          {myPublications?.map((publication: any) => (
            <EventCard
              key={publication.id}
              id={publication.id}
              title={publication.title}
              description={publication.description}
              content={publication.content}
              counter={publication.votes_count}
              img={publication.Publication.image_url}
            />
          ))}
        </div>
        <div
          className={`flex gap-10 mx-auto mb-14 flex-wrap md:gap-6 justify-center ${
            publications ? '' : 'hidden'
          }`}
        >
          {myVotes.data?.results.results.map((publication: any) => (
            <EventCard
              key={publication.Publication.id}
              id={publication.Publication.id}
              title={publication.Publication.title}
              description={publication.Publication.description}
              content={publication.Publication.content}
              counter={publication.Publication.votes_count}
              img={publication.Publication.image_url}
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
