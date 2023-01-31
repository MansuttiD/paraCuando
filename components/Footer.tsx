import InputSearch from './InputSearch';

type AppProps = {
  style: string;
};

export default function ComponentFooter({ style }: AppProps) {
  return (
    <footer className="bg-[url('/img/footer.png')] bg-center min-h-[182px] mt-10 flex justify-center items-center">
      <div className={`w-[362px] h-[488px] lg:w-[465px] ${style} pt-[301px] `}>
        <InputSearch />
      </div>
    </footer>
  );
}
