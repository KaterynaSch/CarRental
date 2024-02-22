import { CatalogList } from 'components/CatalogList/CatalogList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMoreAdverts, fetchAdverts } from 'redux/adverts/operations';
import { selectAdvertsLimit } from 'redux/adverts/selectors';
import { ButtonLoadMore } from './Catalog.styled';

export const Catalog = () => {
  const dispatch = useDispatch();

  const limit = useSelector(selectAdvertsLimit);

  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit }));
  }, [page, limit, dispatch]);

  const handleClick = () => {
    setPage(prevState => prevState + 1);
    dispatch(addMoreAdverts({ page, limit }));
    setLoadMore(page < Math.ceil(32 / 12));
  };

  return (
    <>
      <div>Filters</div>
      <CatalogList />
      {loadMore && (
        <ButtonLoadMore type="button" onClick={handleClick}>
          Load more
        </ButtonLoadMore>
      )}
    </>
  );
};
