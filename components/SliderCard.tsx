import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowButton from './ArrowButton';
import EventCard from './EventCard';

interface props {
  title: string;
  description: string;
}

export default function SliderCard({ title, description }: props) {
  const arrCard: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="relative w-4/5 p-2 m-auto mt-14">
      <h2 className="h500-normal-24px">{title}</h2>
      <h3 className="my-5 h400-normal-16px ">{description}</h3>
      <div>
        <Swiper
          style={{ position: 'unset' }}
          className="h-[453px]"
          modules={[Navigation, Autoplay]}
          loop={true}
          pagination={{ clickable: true }}
          slidesPerView={'auto'}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1.01,
            },
            400: {
              slidesPerView: 1.1,
              spaceBetween: 30,
            },
            450: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1.3,
            },
            800: {
              slidesPerView: 1.5,
            },
            900: {
              slidesPerView: 2.05,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {arrCard.map((card) => (
            <SwiperSlide key={card}>
              <EventCard
                title="Tienda de ropa femenina ZARA"
                description="Tienda de ropa"
                domain="ladygaga.com"
                counter="90800756"
              />
            </SwiperSlide>
          ))}
          <div className="absolute top-1/2 -right-[6%]">
            <ArrowButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
