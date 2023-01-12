import { useRouter } from 'next/router';

const ArtistPage = () => {
  const router = useRouter();
  const { artist } = router.query;
  return <h1>{artist}</h1>;
};

export default ArtistPage;
