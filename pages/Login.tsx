import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../lib/services/autenticate.services';
import type { NextPageWithLayout } from './_app';

type Inputs = {
  password: string;
  email: string;
};

const Login: NextPageWithLayout = () => {
  const { handleSubmit, register } = useForm<Inputs>();

  const router = useRouter();

  const submit = (data: { email: string; password: string }) => {
    login(data)
      .then((res) => {
        Cookies.set('token', res.data.token[0].public);
        router.push('/profile');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-column justify-center lg:grid grid-cols-2 w-screen h-screen">
      <section className="hidden bg-no-repeat bg-cover justify-center items-center lg:flex w-full bg-[url(/LoginD.svg)]  ">
        <div className="flex translate-y-[50%]">
          <Image src="/mat.svg" alt="mat" width={246} height={55} />
          <Image src="/eq.svg" alt="mat" width={130} height={30} />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center h-screen gap-14 px-[37px] py-[84px]  ">
        <div>
          <Link href="/">
            <Image
              src="/pcblue.svg"
              alt="icon-pcblue"
              width={187}
              height={168}
            />
          </Link>
        </div>
        <section className=" flex flex-col gap-5 ">
          <h4 className="h600-medium-20px text-[32px] leading-[20px] ">
            Login
          </h4>
          <p className="h400-medium-15px text-[16px] leading-[20px] ">
            Login with the data you entered during your registration.
          </p>
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-2 w-[374px] lg:w-[487px]  "
          >
            <div className="flex flex-col gap-1 ">
              <label
                htmlFor="email"
                className="h400-normal-16px font-semibold "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                className="h-[56px] border-[1.5px] border-solid border-primary-input rounded-[5px] p-4 outline-none"
                {...register('email', { required: true })}
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label
                htmlFor="password"
                className="h400-normal-16px font-semibold "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                autoComplete="off"
                className="h-[56px] border-[1.5px] border-solid border-primary-input rounded-[5px] p-4 outline-none"
                {...register('password', { required: true })}
              />
            </div>
            <button className="bg-primary-blue rounded-[5px] h-[45.26px] text-white h400-normal-16px font-semibold ">
              Log in
            </button>
          </form>
          <p className="flex justify-center ">
            <Link href="/sing-up">
              <span className=" inline-block h-10 w-40 h400-medium-15px text-[16px] leading-[20px] lg:w-full lg:text-center ">
                Did you forget your password?
              </span>
            </Link>
          </p>
        </section>
      </section>
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Login;
