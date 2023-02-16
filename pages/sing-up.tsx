import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { singUp } from '../lib/interfaces/singUp.interface';
import { userSignup } from '../lib/services/autenticate.services';
import type { NextPageWithLayout } from './_app';

const Signup: NextPageWithLayout = () => {
  const { handleSubmit, register } = useForm<singUp>();

  const router = useRouter();

  const submit = (data: singUp) => {
    userSignup(data)
      .then(() => {
        router.push('/login');
      })
      .catch((err) => {
        Swal.fire({
          position: 'top',
          toast: true,
          icon: 'error',
          title: 'Ha ocurrido un error, sus datos no han sido enviados',
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const [passwordSingUp, setPasswordSingUp] = useState('password');

  const handlePasswordSingUp = () => {
    setPasswordSingUp('password');
  };

  const handlePasswordText = () => {
    setPasswordSingUp('text');
  };

  return (
    <div className="flex flex-column justify-center lg:grid grid-cols-2 w-screen h-screen ">
      <section className="hidden bg-no-repeat bg-cover justify-center items-center lg:flex w-full bg-[url(/SignUpD.svg)] ">
        <div className="flex translate-y-[50%]">
          <Image src="/mat.svg" alt="mat" width={246} height={55} />
          <Image src="/eq.svg" alt="mat" width={130} height={30} />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center h-screen gap-2 px-[20px] py-[84px] lg:px-[70px] ">
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
        <div className=" flex flex-col gap-5">
          <h4 className="h600-medium-20px text-[32px] leading-[20px] ">
            Sign up
          </h4>
          <p className="h400-medium-15px text-[16px] leading-[20px] ">
            Login with the data you entered during your registration.
          </p>
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-2 w-[374px] lg:w-[487px] "
          >
            <div className="flex flex-col gap-1">
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
            <div className="flex justify-between ">
              <div className="flex flex-col gap-1 w-[182.98px] lg:w-[237px] ">
                <label
                  htmlFor="firstName"
                  className="h400-normal-16px font-semibold"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  autoComplete="off"
                  className="h-[56px] border-[1.5px] border-solid border-primary-input rounded-[5px] p-4 outline-none"
                  {...register('firstName', { required: true })}
                />
              </div>
              <div className="flex flex-col gap-1 w-[182.98px] lg:w-[237px] ">
                <label
                  htmlFor="lastName"
                  className="h400-normal-16px font-semibold"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="lastName"
                  autoComplete="off"
                  className="h-[56px] border-[1.5px] border-solid border-primary-input rounded-[5px] p-4 outline-none"
                  {...register('lastName', { required: true })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 mb-5 ">
              <label
                htmlFor="password"
                className="h400-normal-16px font-semibold "
              >
                Password
              </label>
              <div className="h-[56px] border-[1.5px] border-solid border-primary-input rounded-[5px] p-4 outline-none flex justify-between items-center">
                <input
                  type={passwordSingUp}
                  id="password"
                  autoComplete="off"
                  className="outline-none w-4/5"
                  {...register('password', { required: true })}
                />
                <AiFillEye
                  onClick={handlePasswordText}
                  className={`${passwordSingUp == 'text' ? 'hidden' : ''}`}
                />
                <AiFillEyeInvisible
                  onClick={handlePasswordSingUp}
                  className={`${passwordSingUp == 'password' ? 'hidden' : ''}`}
                />
              </div>
            </div>

            <button className="bg-primary-blue rounded-[5px] h-[45.26px] text-white h400-normal-16px font-semibold">
              Crear cuenta
            </button>
          </form>
          <p className="flex justify-center">
            <Link href="/login">
              <span className=" text-center inline-block h-10 w-40 h400-medium-15px text-[16px] leading-[20px]  ">
                or Log in
              </span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

Signup.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Signup;
