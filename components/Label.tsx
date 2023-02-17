type AppProps = {
  category: string;
  classChange?: boolean;
};
export default function Label({ category, classChange }: AppProps) {
  return (
    <span
      className={`border-primary-gray ${
        classChange
          ? 'text-primary-blue border-primary-blue'
          : 'text-primary-gray'
      } rounded-3xl h500-medium-14px text-[13px] whitespace-nowrap py-[7.5px] px-[14px] mb-[1px] md:px-[19px] bg-white border-[1px] flex justify-center items-center transition-all duration-300 hover:scale-[1.05]`}
    >
      {category}
    </span>
  );
}
