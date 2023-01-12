import { useRouter } from 'next/router';

const BrandsPage = () => {
  const router = useRouter();
  const { brands } = router.query;
  return <h1>{brands}</h1>;
};

export default BrandsPage;
