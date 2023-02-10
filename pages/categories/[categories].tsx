import Link from 'next/link';
import { useRouter } from 'next/router';
import InputSearch from '../../components/InputSearch';
import Label from '../../components/Label';
import LabelBox from '../../components/LabelBox';
import SliderCard from '../../components/SliderCard';
import { Events } from '../../lib/interfaces/slices.interfaces';
import { usePublicationsTypes } from '../../lib/services/category.services';
import { usePublication } from '../../lib/services/publications.services';

const CategoriPage = () => {
  //*Hooks
  const router = useRouter();
  const { data } = usePublication();
  const categorysList = usePublicationsTypes();

  //*Router
  const { categories } = router.query;

  //*Types
  type categorytype = {
    description: string;
    id: string;
    name: string;
  };

  //*Filters
  let thisCategory: any = categorysList.data?.filter(
    (category: categorytype) =>
      category.name.toLocaleLowerCase().replaceAll(' ', '-') == categories
  );

  const publicationsByType = data?.results.results.filter(
    (publication: Events) =>
      publication.publication_type.name
        .toLocaleLowerCase()
        .replaceAll(' ', '-') == categories
  );

  if (thisCategory) {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(/${categories}.jpg)`,
          }}
          className={`px-[20px] py-[23px] h-[204px] bg-no-repeat bg-cover bg-center`}
        >
          <div className="max-w-[992px] m-auto ">
            <h4 className="text-white block h500-normal-16px  mb-[23px] ">{`Home/${
              categories == 'marcas'
                ? 'Marcas'
                : categories == 'artistas'
                ? 'Artistas'
                : 'Torneos'
            }`}</h4>
            <h2 className="text-primary-yellow h900-normal-48px mb-[6px]  ">
              {`${thisCategory[0].name}`}
            </h2>
            <p className="text-white h500-normal-16px ">
              {`${thisCategory[0].description}`}
            </p>
          </div>
        </div>
        <div className="max-w-[1240px] m-auto ">
          <div className="flex flex-col justify-center mt-[25px]  items-center gap-[22px] lg:gap-[166px] lg:flex-row-reverse">
            <div className="w-[373px]">
              <InputSearch />
            </div>
            <div className="flex flex-wrap gap-[9px] justify-center ">
              {categorysList.data?.map((list) => (
                <Link
                  key={list.id}
                  href={`/categories/${list.name
                    .toLowerCase()
                    .replaceAll(' ', '-')}`}
                >
                  <Label category={list.name} />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SliderCard
              events={publicationsByType}
              title="Populares en Queretaro"
              description="Lo que las personas piden mas"
            />
            <SliderCard
              events={publicationsByType}
              title="Sugerencias para ti"
              description="Publicaciones que podrias colaborar"
            />
            <LabelBox />
            <SliderCard
              events={publicationsByType}
              title="Recientes"
              description="Las personas ultimamente estan hablando de esto"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default CategoriPage;
