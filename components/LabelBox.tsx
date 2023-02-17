import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAllMyTags } from '../lib/services/tags.services';
import Label from './Label';

export default function LabelBox() {
  const { data } = useAllMyTags();

  return (
    <div className="bg-primary-grayLighter pt-[25px] px-[60px] max-w-[950px] min-h-[250px] mt-16 flex flex-col gap-6 md:m-auto md:mt-16 pb-10 text-primary-grayDark">
      <h2 className="mb-3 h500-normal-24px">¡Hagámoslo más personal!</h2>
      <h3 className="h400-normal-16px">
        Selecciona tus interes para brindarte sugerencia de acuerdo a tus gustos
      </h3>
      <div className="flex scroll w-full gap-4 overflow-x-scroll h-[50px] md:overflow-x-auto  scrollbar ">
        <Swiper
          modules={[Navigation, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={'auto'}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 2.3,
            },
            500: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 3.5,
            },
            800: {
              slidesPerView: 3.5,
            },
            900: {
              slidesPerView: 4.5,
            },
            1200: {
              slidesPerView: 5.5,
              spaceBetween: 20,
            },
          }}
        >
          {data?.map((tag: any) => (
            <SwiperSlide key={tag.id}>
              <Label key={tag.id} category={tag.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <a className="h400-normal-16px text-primary-blue ">
        Ver todos los intereses
      </a>
    </div>
  );
}
