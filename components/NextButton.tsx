type AppProps = {
  action: string;
  set: any;
  state: boolean;
};
export default function NextButton({ action, set, state }: AppProps) {
  const handleGlobal = () => {
    set(!state);
  };
  return (
    <button
      onClick={handleGlobal}
      className="w-[124px]  h-12 p-[18px] h500-normal-16px text-white flex justify-center items-center bg-primary-blue rounded-[31px] font-semibold"
    >
      {action}
    </button>
  );
}
