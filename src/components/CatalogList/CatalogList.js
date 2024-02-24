import { CatalogListItem } from 'components/CatalogListItem/CatalogListItem';
import { StyledList } from './CatalogList.styled';

export const CatalogList = ({ adverts }) => {
  return (
    <>
      <StyledList>
        {adverts.map(advert => (
          <li key={advert.id}>
            <CatalogListItem advert={advert} />
          </li>
        ))}
      </StyledList>
    </>
  );
};
