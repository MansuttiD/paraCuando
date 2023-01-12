import { useRouter } from 'next/router';

const ProfilePage = () => {
  const router = useRouter();
  const { profile } = router.query;
  return <h1>{profile}</h1>;
};

export default ProfilePage;
