import { CatalogList } from 'components/CatalogList/CatalogList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/operations';
import { selectAdverts, selectedPage } from 'redux/adverts/selectors';
import { ButtonLoadMore } from './Catalog.styled';
import { BrandDropDown } from 'components/BrandDropDown/BrandDropDown';
import toast from 'react-hot-toast';
import { changePage } from 'redux/adverts/advertSlice';

export const Catalog = () => {
  const dispatch = useDispatch();

  const [loadMore, setLoadMore] = useState(false);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
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

  const handleBrandSelect = brand => {
    const filteredAdverts = adverts.filter(advert => advert.make === brand);
    setFilteredAdverts(filteredAdverts);
    setLoadMore(false);
    if (filteredAdverts.length === 0) {
  
      toast.error("No adverts found. Click button 'Load More' and try again!");
    }
    console.log(filteredAdverts);
  };

  return (
    <>
      <BrandDropDown onSelectBrand={handleBrandSelect} 
      // onResetFilter={handleBrandSelect}
      />
      <CatalogList
        adverts={filteredAdverts.length > 0 ? filteredAdverts : adverts}
      />
      {loadMore && (
        <ButtonLoadMore type="button" onClick={handleClick}>
          {/* style={{ display: loadMore && filteredAdverts.length === 0 ? 'none' : 'block' }} */}
          Load more
        </ButtonLoadMore>
      )}
    </>
  );
};
