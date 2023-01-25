type AppProps = {
  category: string;
};
export default function Label({ category }: AppProps) {
  return (
    <span className="rounded-3xl h500-medium-14px text-[13px] inline-block py-[15px] px-[19px] bg-white text-primary-gray border-[1px] border-primary-gray w-fit ">
      {category}
    </span>
  );
}
