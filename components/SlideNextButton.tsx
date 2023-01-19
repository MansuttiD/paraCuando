import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="w-[50px] h-[50px] rounded-full  border-4 border-primary-blue absolute top-1/2 right-0 z-10"
      onClick={() => swiper.slideNext()}
    >
      <svg
        className="m-auto"
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5 0.75L12.8634 3.31834L23.1516 13.6562H0.75V17.3438H23.1516L12.8634 27.619L15.5 30.25L30.25 15.5L15.5 0.75Z"
          fill="#1B4DB1"
        />
      </svg>
    </button>
  );
}
