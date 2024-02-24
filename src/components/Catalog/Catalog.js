import { CatalogList } from 'components/CatalogList/CatalogList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMoreAdverts, fetchAdverts } from 'redux/adverts/operations';
import { selectAdverts, selectAdvertsLimit } from 'redux/adverts/selectors';
import { ButtonLoadMore } from './Catalog.styled';
import { BrandDropDown } from 'components/BrandDropDown/BrandDropDown';

export const Catalog = () => {
  const dispatch = useDispatch();
  const limit = useSelector(selectAdvertsLimit);

  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(1);
  const [filteredAdverts, setFilteredAdverts] = useState([]);

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit }));
  }, [page, limit, dispatch]);

  const handleClick = () => {
    setPage(prevState => prevState + 1);
    dispatch(addMoreAdverts({ page, limit }));
    setLoadMore(page < Math.ceil(32 / 12));
  };

  const adverts = useSelector(selectAdverts);

  return (
    <>
      <BrandDropDown onSelectBrand={setFilteredAdverts} />
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
