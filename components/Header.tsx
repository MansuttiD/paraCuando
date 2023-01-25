import Link from 'next/link';
import { useState } from 'react';
export default function Header() {
  const [logged, setLogged] = useState(true);

  const handleLogin = () => {
    setLogged(true);
  };

  return (
    <>
      <header className="bg-[#1A1E2E] text-[11px] text-white h-[71px] flex pl-6 py-5 justify-between">
        <Link href="/home">
          <svg
            width="62"
            height="30"
            viewBox="0 0 62 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_285_3206)">
              <path
                d="M14.7734 2.44891C13.7203 1.58542 12.047 1.17491 8.68591 0.382194C6.59424 -0.113252 5.78642 -0.113252 5.12286 0.311416C4.06981 0.97673 3.82458 2.71787 3.81015 3.60967C3.76688 5.80379 4.6324 23.3567 5.31039 25.5084C5.81527 27.1221 6.75292 27.4194 7.76269 27.0655C8.3397 26.8673 8.58493 26.202 8.74361 25.749C9.4793 23.6115 8.19545 22.3234 8.75804 19.6763C8.88787 19.0251 9.0754 18.6288 9.34948 18.289C10.114 17.3406 11.3402 17.1849 11.8018 17.1C14.2397 16.6045 16.5333 13.5469 17.2257 10.8998C17.9758 8.01207 17.1536 4.4307 14.7734 2.44891ZM10.9795 12.7117C10.3881 13.278 9.20522 14.0565 8.59936 13.6743C8.1666 13.4054 7.69056 6.73806 8.26758 6.38417C9.1331 5.86041 11.9893 7.41753 12.2201 9.71074C12.3932 11.2962 11.2248 12.4711 10.9795 12.7117Z"
                fill="white"
              />
              <path
                d="M32.482 3.40872C30.5733 1.57847 27.0694 -0.0701993 24.5046 0.869802C19.8115 2.58679 19.0878 12.5223 21.8284 19.3076C22.2563 20.3471 24.7026 26.4457 28.1473 26.2904C30.7922 26.1664 32.5228 22.4428 32.6081 22.221C32.6895 22.0222 34.0046 19.0553 32.8786 18.1587C32.1358 17.5622 30.9655 17.6497 30.3449 19.0567C29.6739 20.6205 28.2751 21.3543 27.604 21.3364C26.4998 21.3169 25.6546 17.3039 25.5361 16.7175C24.9636 14.0957 24.771 5.89547 26.1125 5.64782C27.181 5.44892 29.9716 7.33232 30.5257 8.91229C30.789 9.64095 30.7398 10.2229 31.3152 10.9566C31.4131 11.091 32.2664 12.1781 33.0815 12.0548C34.2164 11.8906 35.0215 9.38135 34.6963 7.29672C34.4063 5.28881 33.0608 3.97773 32.482 3.40872Z"
                fill="white"
              />
              <path
                d="M40.1647 8.82617C41.648 7.03889 41.6737 6.24867 42.5951 5.5344C42.7543 5.40474 43.6636 4.73115 44.8642 4.79486C46.1517 4.86982 47.0039 5.74541 47.5577 6.31005C48.1311 6.91009 49.4468 8.24943 49.1142 9.6127C48.8611 10.6599 47.7592 11.1724 46.5321 11.7509C45.6902 12.1491 44.0493 12.7516 42.0955 13.1422C41.5981 13.2445 41.3348 13.2691 41.0422 13.4919C40.2663 14.0724 40.4927 15.0267 40.2961 16.9921C40.0307 19.6906 39.3006 21.0235 40.1334 21.8637C40.2944 22.0301 40.4619 22.1246 40.5643 22.1848C41.4294 22.6652 45.6781 22.8579 45.938 22.4924C46.0899 22.2867 45.9199 21.9994 45.71 21.4933C45.3601 20.6498 45.1979 19.833 44.8777 18.1857C44.6072 16.7749 44.476 16.056 44.844 15.5307C45.2079 15.0191 45.7744 14.9374 46.5278 14.7343C48.2645 14.264 50.2222 13.3574 51.2605 12.3531C52.6815 10.9756 52.8147 9.02074 52.8325 8.76009C53.0347 4.96415 48.902 2.47165 48.2873 2.11042C47.2905 1.51665 45.5807 0.487894 43.3073 0.738547C39.523 1.15768 37.8007 4.74998 37.5295 5.30418C37.1316 6.13077 36.4584 7.52512 37.1335 8.53979C37.5679 9.20168 38.589 9.71408 39.3546 9.47032C39.7276 9.33075 39.947 9.10087 40.1647 8.82617Z"
                fill="white"
              />
              <path
                d="M42.8495 24.76C43.9915 24.7176 44.7031 25.6102 44.8991 25.8609C45.1423 26.1553 45.5815 26.7004 45.4794 27.3939C45.3498 28.3303 44.3535 28.7414 44.2502 28.7844C43.3116 29.1537 42.2458 28.7905 41.6034 28.1698C41.4757 28.0429 40.6211 27.2257 40.8701 26.1921C41.1022 25.3159 42.0261 24.7944 42.8495 24.76Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_285_3206">
                <rect width="62" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <ul className="flex gap-[31px] items-center pr-6">
          <Link href="/postPublication">
            <li
              className={`gap-3 text-[12px] items-center min-w-[125px] ${
                logged == true ? 'hidden lg:flex' : 'flex'
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z"
                  fill="#1B4DB1"
                />
              </svg>
              Crear Publicacion
            </li>
          </Link>
          <li
            className={`gap-3 items-center ${
              logged == true ? 'hidden lg:flex' : 'hidden'
            }`}
          >
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.675 1C3.09313 1 1 3.00868 1 5.4864C1 9.97279 6.525 14.0513 9.5 15C12.475 14.0513 18 9.97279 18 5.4864C18 3.00868 15.9069 1 13.325 1C11.744 1 10.3458 1.75331 9.5 2.90631C9.06891 2.31705 8.49622 1.83614 7.8304 1.50431C7.16458 1.17248 6.42525 0.999492 5.675 1Z"
                stroke="#FF64BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Link href="/profile">Mis Votos</Link>
          </li>

          <ul
            className={`flex gap-[21px] font-black ${logged ? 'hidden' : ''}`}
            onClick={handleLogin}
          >
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/singup">Sing Up</Link>
            </li>
          </ul>
          <div className="flex gap-4 justify-center items-center sm:pr-8">
            <div
              className={`w-[20px] h-[17px] flex justify-center items-center ${
                !logged ? 'hidden' : ''
              }`}
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
              >
                <circle
                  cx="17"
                  cy="17"
                  r="16.25"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>

              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.89099 12.3778L1.89083 12.378C1.68474 12.7135 1.58203 13.0766 1.58203 13.4833V14.25C1.58203 14.5764 1.68959 14.8375 1.92586 15.0738C2.16122 15.3092 2.42192 15.4167 2.7487 15.4167H14.2487C14.5753 15.4167 14.8364 15.3093 15.0725 15.0738C15.308 14.8378 15.4154 14.5766 15.4154 14.25V13.4833C15.4154 13.0766 15.3127 12.7135 15.1066 12.378L15.1064 12.3778C14.8978 12.0379 14.6287 11.7873 14.2917 11.6121C13.3509 11.1422 12.3994 10.7916 11.4365 10.5581C10.4723 10.3249 9.49346 10.2083 8.4987 10.2083C7.50394 10.2083 6.52508 10.3249 5.56087 10.5581L1.89099 12.3778ZM1.89099 12.3778C2.09962 12.0379 2.36874 11.7873 2.70567 11.6121M1.89099 12.3778L2.70567 11.6121M2.70567 11.6121C3.64633 11.1422 4.59774 10.7917 5.56044 10.5582L2.70567 11.6121ZM8.4987 7.75001C7.64503 7.75001 6.9329 7.4548 6.32174 6.84364C5.71057 6.23247 5.41537 5.52035 5.41537 4.66668C5.41537 3.813 5.71057 3.10088 6.32174 2.48972C6.9329 1.87855 7.64503 1.58334 8.4987 1.58334C9.35237 1.58334 10.0645 1.87855 10.6757 2.48972C11.2868 3.10088 11.582 3.813 11.582 4.66668C11.582 5.52035 11.2868 6.23247 10.6757 6.84364C10.0645 7.4548 9.35237 7.75001 8.4987 7.75001Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className={`${!logged ? 'hidden' : ''}`}>
              daniel.mansutti@gmail.com
            </div>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${!logged ? 'hidden' : ''}`}
            >
              <path
                d="M10 1L5 6L0 1L0.8875 0.1125L5 4.225L9.1125 0.1125L10 1Z"
                fill="#A7A6A7"
              />
            </svg>
          </div>
        </ul>
      </header>
    </>
  );
}
