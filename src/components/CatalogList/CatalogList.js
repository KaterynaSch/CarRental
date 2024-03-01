import { CatalogListItem } from 'components/CatalogListItem/CatalogListItem';
import { StyledList } from './CatalogList.styled';

export const CatalogList = ({ adverts }) => {
  return (
    <>
      <StyledList>
        {adverts.map(advert => (
          <CatalogListItem key={advert.id} advert={advert} />
        ))}
      </StyledList>
    </>
  );
};
