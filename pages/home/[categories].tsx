import { useRouter } from 'next/router';

const CategoriPage = () => {
  const router = useRouter();
  const { categories } = router.query;
  return <h1>{categories}</h1>;
};

export default CategoriPage;
