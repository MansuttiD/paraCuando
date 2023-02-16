import Cookies from 'js-cookie';
import Link from 'next/link';

export default function MinMenu() {
  const handleLogout = () => {
    Cookies.remove('token');
    // router.push('/');
    window.location.href = '/';
  };
  return (
    <div className=" w-[250px]  min-h-[218px] rounded-[25px] px-[29px] pt-[32px] pb-[10px] shadow-[-5px_8px_31px_-8px_rgba(0,0,0,0.25)] bg-white ">
      <ul className="flex flex-col gap-[22px] mb-[23px] border-b-2 border-solid border-primary-grayDark  ">
        <li className="text-primary-blue text-[18px] items-center min-w-[125px] flex lg:hidden ">
          <Link href="/post-publication">
            <div className="flex gap-3 ">
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
            </div>
          </Link>
        </li>
        <li className="gap-3 items-center flex lg:hidden text-[18px] ">
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
        <Link href="/configuration-page">
          <li className="flex gap-[20px] h-[22px] items-center text-[18px] font-normal leading-leading-4 ">
            <svg
              width="21"
              height="21"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10H7C7.26522 10 7.51957 9.89464 7.70711 9.70711C7.89464 9.51957 8 9.26522 8 9V1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10ZM0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H7C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17V13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12H1C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13V17ZM10 17C10 17.2652 10.1054 17.5196 10.2929 17.7071C10.4804 17.8946 10.7348 18 11 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V10C18 9.73478 17.8946 9.48043 17.7071 9.29289C17.5196 9.10536 17.2652 9 17 9H11C10.7348 9 10.4804 9.10536 10.2929 9.29289C10.1054 9.48043 10 9.73478 10 10V17ZM11 7H17C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0H11C10.7348 0 10.4804 0.105357 10.2929 0.292893C10.1054 0.48043 10 0.734784 10 1V6C10 6.26522 10.1054 6.51957 10.2929 6.70711C10.4804 6.89464 10.7348 7 11 7Z"
                fill="black"
              />
            </svg>
            Configuración
          </li>
        </Link>
        <li
          onClick={handleLogout}
          className="flex gap-[20px] mb-10 h-[22px] items-center text-[18px] font-normal leading-leading-4 cursor-pointer "
        >
          <svg
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12.9231C22 14.4231 21.7088 15.8558 21.1263 17.2212C20.5438 18.5865 19.7609 19.7644 18.7773 20.7548C17.7938 21.7452 16.6241 22.5337 15.2682 23.1202C13.9123 23.7067 12.4896 24 11 24C9.51042 24 8.08767 23.7067 6.73177 23.1202C5.37587 22.5337 4.20616 21.7452 3.22266 20.7548C2.23915 19.7644 1.45616 18.5865 0.873698 17.2212C0.291233 15.8558 0 14.4231 0 12.9231C0 11.1731 0.384332 9.52404 1.15299 7.97596C1.92166 6.42788 3.00304 5.12981 4.39714 4.08173C4.80773 3.77404 5.26367 3.65385 5.76497 3.72115C6.26628 3.78846 6.66493 4.02885 6.96094 4.44231C7.26649 4.84615 7.38346 5.30048 7.31185 5.80529C7.24023 6.3101 7.00391 6.71635 6.60286 7.02404C5.6671 7.73558 4.94379 8.60577 4.43294 9.63462C3.92209 10.6635 3.66667 11.7596 3.66667 12.9231C3.66667 13.9231 3.86003 14.8774 4.24675 15.7861C4.63346 16.6947 5.15625 17.4808 5.8151 18.1442C6.47396 18.8077 7.25456 19.3341 8.1569 19.7236C9.05925 20.113 10.0069 20.3077 11 20.3077C11.9931 20.3077 12.9408 20.113 13.8431 19.7236C14.7454 19.3341 15.526 18.8077 16.1849 18.1442C16.8438 17.4808 17.3665 16.6947 17.7533 15.7861C18.14 14.8774 18.3333 13.9231 18.3333 12.9231C18.3333 11.7596 18.0779 10.6635 17.5671 9.63462C17.0562 8.60577 16.3329 7.73558 15.3971 7.02404C14.9961 6.71635 14.7598 6.3101 14.6882 5.80529C14.6165 5.30048 14.7335 4.84615 15.0391 4.44231C15.3351 4.02885 15.7361 3.78846 16.2422 3.72115C16.7483 3.65385 17.2018 3.77404 17.6029 4.08173C18.997 5.12981 20.0783 6.42788 20.847 7.97596C21.6157 9.52404 22 11.1731 22 12.9231ZM12.8333 1.84615V11.0769C12.8333 11.5769 12.6519 12.0096 12.2891 12.375C11.9262 12.7404 11.4965 12.9231 11 12.9231C10.5035 12.9231 10.0738 12.7404 9.71094 12.375C9.34809 12.0096 9.16667 11.5769 9.16667 11.0769V1.84615C9.16667 1.34615 9.34809 0.913462 9.71094 0.548077C10.0738 0.182692 10.5035 0 11 0C11.4965 0 11.9262 0.182692 12.2891 0.548077C12.6519 0.913462 12.8333 1.34615 12.8333 1.84615Z"
              fill="black"
            />
          </svg>
          Cerrar sesión
        </li>
      </ul>
      <span className="text-primary-grayDark text-[18px] font-normal leading-leading-4 ">
        Ayuda y soporte
      </span>
    </div>
  );
}
