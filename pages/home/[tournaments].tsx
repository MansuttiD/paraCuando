import { useRouter } from 'next/router';

const TournamentsPage = () => {
  const router = useRouter();
  const { tournaments } = router.query;
  return <h1>{tournaments}</h1>;
};

export default TournamentsPage;
