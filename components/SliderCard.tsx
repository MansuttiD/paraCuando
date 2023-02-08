import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Events } from '../lib/interfaces/slices.interfaces';
import ArrowButton from './ArrowButton';
import EventCard from './EventCard';

interface props {
  title: string;
  description: string;
  events: Events[] | null | undefined;
}

export default function SliderCard({ title, description, events }: props) {
  return (
    <div className="relative w-[90%] p-2  mx-auto mt-14 sm:w-4/5  ">
      <h2 className="h500-normal-24px">{title}</h2>
      <h3 className="my-5 h400-normal-16px ">{description}</h3>
      <div>
        <Swiper
          style={{ position: 'unset' }}
          className="h-[453px] "
          modules={[Navigation, Autoplay]}
          loop={true}
          pagination={{ clickable: true }}
          slidesPerView={'auto'}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1.2,
            },
            500: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1.4,
            },
            800: {
              slidesPerView: 1.5,
            },
            900: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {events?.map((event) => (
            <SwiperSlide key={event.id}>
              <EventCard
                title={event.title}
                description={event.description}
                content={event.content}
                counter={event.profile_id}
                id={event.id}
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
