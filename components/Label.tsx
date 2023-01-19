type AppProps = {
  category: string;
};
export default function Label({ category }: AppProps) {
  return (
    <span className="rounded-3xl h500-medium-14px inline-block py-4 px-5 bg-white text-primary-gray border-[1px] border-primary-gray w-fit ">
      {category}
    </span>
  );
}
