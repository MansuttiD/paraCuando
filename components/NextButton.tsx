type AppProps = {
  action: string;
};
export default function NextButton({ action }: AppProps) {
  return (
    <button className="w-[124px]  h-12 p-[18px] h500-normal-16px text-white flex justify-center items-center bg-primary-blue rounded-[31px] font-semibold ">
      {action}
    </button>
  );
}
