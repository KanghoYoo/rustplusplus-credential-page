import DocumentLayout from '@/components/document/layout';
import Pagination from '@/components/pagination/pagination';
import menuItems from '@/config/menuItems';
import usePagination from '@/hooks/usePagination';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import PairAndConnectToServerSection from '@/components/document/pages/pairAndConnectToServer/section';
import { imageUrls } from '@/data/documents/pairAndConnectToServer/images';

const PairAndConnectToServerPage = ({ menuItems, imageUrls }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { previousHref, previousLabel, nextHref, nextLabel } = usePagination();

  return (
    <DocumentLayout menuItems={menuItems}>
      <PairAndConnectToServerSection imageUrls={imageUrls} />
      <Pagination previousHref={previousHref} previousLabel={previousLabel} nextHref={nextHref} nextLabel={nextLabel} />
    </DocumentLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      menuItems,
      imageUrls,
    },
  };
};

export default PairAndConnectToServerPage;
