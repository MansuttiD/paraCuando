import InputSearch from './InputSearch';

const Footer = () => {
  return (
    <div className="bg-[url('/img/bg-footer.jpg')] bg-no-repeat bg-cover h-[438px] flex items-center flex-col justify-center gap-5">
      <img
        src="/img/Frame-footer.png"
        className="flex items-center justify-center"
        alt="frame"
      />
      <InputSearch />
    </div>
  );
};

export default Footer;
