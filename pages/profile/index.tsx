import Image from 'next/image';
import { ReactElement, useState } from 'react';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Label from '../../components/Label';
import { useMyVotes } from '../../lib/services/myVotes.services';
import { usePublication } from '../../lib/services/publications.services';
import { useMyUserInfo } from '../../lib/services/user.services';
import { NextPageWithLayout } from '../_app';

const Profile: NextPageWithLayout = () => {
  const { data } = usePublication();
  const { data: myData } = useMyUserInfo();
  const [publicationsPrev, setPublicationsPrev] = useState<boolean>(true);
  const { data: myVotes, mutate } = useMyVotes();

  const myPublications: any[] = data?.filter(
    (publication: any) => publication.profile_id == myData?.profile[0].id
  );

  const handleVotes = () => {
    setPublicationsPrev(true);
  };
  const handlePublications = () => {
    setPublicationsPrev(false);
  };

  return (
    <div className="sizeConfig">
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
              <Label
                category="Mis votos "
                classChange={publicationsPrev ? true : false}
              />
            </div>
            <div className="cursor-pointer" onClick={handlePublications}>
              <Label
                classChange={!publicationsPrev ? true : false}
                category="Mis Publicaciones"
              />
            </div>
          </div>
        </div>
        <div
          className={`flex gap-10 mx-auto mb-14 flex-wrap md:gap-6 justify-center ${
            publicationsPrev ? 'hidden' : ''
          }`}
        >
          {myPublications?.map((publication: any) => (
            <EventCard
              mutate=""
              key={publication.id}
              id={publication.id}
              title={publication.title}
              description={publication.description}
              content={publication.content}
              counter={publication.votes_count}
              img="image"
            />
          ))}
        </div>
        <div
          className={`flex gap-10 mx-auto mb-14 flex-wrap md:gap-6 justify-center ${
            publicationsPrev ? '' : 'hidden'
          }`}
        >
          {myVotes?.results.map((publication: any) => (
            <EventCard
              mutate={mutate}
              key={publication.Publication.id}
              id={publication.Publication.id}
              title={publication.Publication.title}
              description={publication.Publication.description}
              content={publication.Publication.content}
              counter={publication.Publication.votes_count}
              img="image"
            />
          ))}
        </div>
        <div className="flex items-center justify-center  lg:hidden">
          {/* <NextButton set="" state={false} action="Ver mas" /> */}
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
