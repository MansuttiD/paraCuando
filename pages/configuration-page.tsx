import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useMyUserInfo } from '../lib/services/user.services';
import { NextPageWithLayout } from './_app';

const ConfigurationPage: NextPageWithLayout = () => {
  const { handleSubmit, register, reset } = useForm<any>();
  const { data } = useMyUserInfo();

  const defaultValue = {
    firstName: data?.results.username,
    lastName: data?.results.lastname,
    image_url: data?.results.profile[0].image_url,
  };

  reset(defaultValue);

  const submit = (obj: any) => {
    reset(defaultValue);
  };

  return (
    <div className="sizeConfig">
      <div className="h-[129px] bg-primary-blue flex items-center">
        <h2 className="text-white ml-14 md:ml-24 h900-normal-48px">Perfil</h2>
      </div>

      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-wrap justify-center gap-5 mt-10 md:gap-20 md:m-20"
      >
        <div>
          <h3 className="mb-5 h500-normal-24px">Foto de perfil</h3>
          <span className=" h400-normal-16px text-primary-blackLight">
            Agrega una foto para tu perfil
          </span>
          <div className="w-[177px] h-[208px] mt-5 bg-primary-grayLight flex items-center justify-center">
            <input
              className="file:hidden file:apperence-none file:invisible file:opacity-0 hidden "
              type="file"
              id="perfilPicture"
              value={`${data?.results.profile[0].image_url || ''}`}
              {...register('image_url')}
            />
            <label
              htmlFor="perfilPicture"
              className="text-5xl text-primary-blue"
            >
              +
            </label>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-10">
            <h3 className="h500-normal-24px">Información de contacto</h3>
            <div className="relative flex flex-col p-3">
              <label
                className="absolute top-0 px-2 bg-white left-8"
                htmlFor="name"
              >
                First Name
              </label>
              <input
                className="md:w-[620px] w-[300px] rounded-xl h-12 border-2 border-[#7D7D7D] outline-none p-2"
                type="text"
                id="name"
                value={data.results.username || ''}
                {...register('firstName', { required: true })}
              />
            </div>
            <div className="relative flex flex-col p-3">
              <label
                className="absolute top-0 px-2 bg-white left-8"
                htmlFor="last"
              >
                Last Name
              </label>
              <input
                className="md:w-[620px] w-[300px] rounded-xl h-12 border-2 border-[#7D7D7D] outline-none p-2"
                type="text"
                id="last"
                value={data.results.lastname || ''}
                {...register('lastName', { required: true })}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

ConfigurationPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
      <Footer style="hidden" />
    </>
  );
};

export default ConfigurationPage;
