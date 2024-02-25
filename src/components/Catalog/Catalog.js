import { CatalogList } from 'components/CatalogList/CatalogList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/operations';
import { selectAdverts, selectedPage } from 'redux/adverts/selectors';
import { ButtonLoadMore } from './Catalog.styled';
import { BrandDropDown } from 'components/BrandDropDown/BrandDropDown';
import { changePage } from 'redux/adverts/advertSlice';
import { selectBrand } from 'redux/brand/selectors';

export const Catalog = () => {
  const dispatch = useDispatch();

  const [loadMore, setLoadMore] = useState(false);

  const adverts = useSelector(selectAdverts);
  const page = useSelector(selectedPage);
  const limit = 12;
  const total = 32;

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit }));
    setTimeout(() => {
      setLoadMore(page < Math.ceil(total / limit));
    }, 250);
  }, [page, dispatch]);

  const handleClick = () => {
    dispatch(changePage(1));
  };

  const { brand } = useSelector(selectBrand);
  const filteredAdverts = adverts.filter(advert => advert.make === brand);

  return (
    <>
      <BrandDropDown />
      <CatalogList
        adverts={filteredAdverts.length > 0 ? filteredAdverts : adverts}
      />
      {loadMore && (
        <ButtonLoadMore type="button" onClick={handleClick}>
          Load more
        </ButtonLoadMore>
      )}
    </>
  );
};
