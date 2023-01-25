import InputSearch from './InputSearch';

export default function ComponentFooter() {
  return (
    <div className="bg-[url('/img/footer.png')] h-[480px] mt-10 flex justify-center items-center">
      <div className="w-[362px] lg:w-[465px]">
        <InputSearch />
      </div>
    </div>
  );
}
