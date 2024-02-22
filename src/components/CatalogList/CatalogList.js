import { CatalogListItem } from 'components/CatalogListItem/CatalogListItem';
import { StyledList } from './CatalogList.styled';
import { useSelector } from 'react-redux';
import { selectAdverts } from 'redux/adverts/selectors';

export const CatalogList = () => {

  const adverts = useSelector(selectAdverts);

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
