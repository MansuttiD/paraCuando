type AppProps = {
  category: string;
};
export default function Label({ category }: AppProps) {
  return (
    <span className="rounded-3xl h500-medium-14px text-[13px] whitespace-nowrap py-[7.5px] px-[14px] mb-[1px] md:px-[19px] bg-white text-primary-gray border-[1px] border-primary-gray flex justify-center items-center">
      {category}
    </span>
  );
}
