import { useSwiper } from 'swiper/react';

export default function ArrowButton() {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="bg-white hidden rounded-full w-[52px] h-[52px]  justify-center items-center absolute top-1/2 right-0 z-10 md:flex "
    >
      <svg
        width="59"
        height="59"
        viewBox="0 0 59 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.5 14.75L26.8634 17.3183L37.1516 27.6562H14.75V31.3438H37.1516L26.8634 41.619L29.5 44.25L44.25 29.5L29.5 14.75Z"
          fill="#1B4DB1"
        />
        <path
          d="M29.5 55.3125C24.3948 55.3125 19.4042 53.7986 15.1594 50.9623C10.9145 48.126 7.60606 44.0946 5.65237 39.378C3.69868 34.6614 3.18751 29.4714 4.18349 24.4642C5.17947 19.4571 7.63787 14.8577 11.2478 11.2478C14.8578 7.63786 19.4571 5.17946 24.4642 4.18348C29.4714 3.1875 34.6614 3.69867 39.378 5.65236C44.0946 7.60604 48.126 10.9145 50.9623 15.1593C53.7986 19.4042 55.3125 24.3948 55.3125 29.5C55.3047 36.3435 52.5827 42.9045 47.7436 47.7436C42.9045 52.5827 36.3435 55.3047 29.5 55.3125ZM29.5 7.375C25.1241 7.375 20.8465 8.6726 17.208 11.1037C13.5696 13.5349 10.7338 16.9903 9.05918 21.0331C7.38459 25.0759 6.94644 29.5245 7.80014 33.8164C8.65384 38.1082 10.761 42.0505 13.8553 45.1447C16.9495 48.239 20.8918 50.3462 25.1836 51.1999C29.4755 52.0536 33.9241 51.6154 37.9669 49.9408C42.0097 48.2662 45.4651 45.4304 47.8963 41.792C50.3274 38.1535 51.625 33.8759 51.625 29.5C51.6182 23.6342 49.285 18.0106 45.1372 13.8628C40.9894 9.71504 35.3658 7.38183 29.5 7.375Z"
          fill="#1B4DB1"
        />
      </svg>
    </button>
  );
}
