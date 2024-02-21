import { CatalogListItem } from 'components/CatalogListItem/CatalogListItem';
import cars from '../../adverts.json';
import { StyledList } from './CatalogList.styled';

export const CatalogList = () => {
  return (
    <>
      <StyledList>
        {cars.map(car => (
          <li key={car.id}>
            <CatalogListItem car={car} />
          </li>
        ))}
      </StyledList>
    </>
  );
};
