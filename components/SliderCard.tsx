import { Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import EventCard from './EventCard';

export default function SliderCard() {
  const arrCard: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        freeMode={true}
        grabCursor={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {arrCard.map((card) => (
          <SwiperSlide key={card}>
            <EventCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
