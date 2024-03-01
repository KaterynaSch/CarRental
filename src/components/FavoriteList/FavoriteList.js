import { StyledList } from 'components/CatalogList/CatalogList.styled';
import { CatalogListItem } from 'components/CatalogListItem/CatalogListItem';
import { useSelector } from 'react-redux';
import { selectFavoriteAdverts } from 'redux/favorites/selectors';
import { DefaultText, StyledLink } from './FavoriteList.styled';

export const FavoriteList = () => {
  const adverts = useSelector(selectFavoriteAdverts);

  return (
    <>
      {' '}
      {adverts.length !== 0 ? (
        <StyledList>
          {adverts.map(advert => (
            <CatalogListItem key={advert.id} advert={advert} />
          ))}
        </StyledList>
      ) : (
        <DefaultText>
          There is nothing here yet.
          <br /> You can add here what you like from the{' '}
          <StyledLink to="/catalog">catalog</StyledLink>.
        </DefaultText>
      )}
    </>
  );
};
