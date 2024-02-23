import { StyledList } from 'components/CatalogList/CatalogList.styled';
import { CatalogListItem } from 'components/CatalogListItem/CatalogListItem';
import { useSelector } from 'react-redux';
import { selectFavoriteAdverts } from 'redux/adverts/selectors';

export const FavoriteList = () => {
  const adverts = useSelector(selectFavoriteAdverts);
  
  return (
    <>
      {' '}
      {adverts.length > 0 && (
        <StyledList>
          {adverts.map(advert => (
            <li key={advert.id}>
              <CatalogListItem advert={advert} />
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
};
