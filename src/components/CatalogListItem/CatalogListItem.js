import sprite from '../../images/icons.svg';
import {
  AccentText,
  ButtonHeart,
  CardButton,
  DescriptionInfo,
  ImgWrapper,
  InfoText,
  ItemWrapper,
  MainInfo,
  StyledHartSVG,
  StyledImg,
} from './CatalogListItem.styled';

export const CatalogListItem = ({ car }) => {
  
  const [, city, country] = car.address.split(',').map(part => part.trim());
  const randomFunctionality = car.functionalities[Math.floor(Math.random() * car.functionalities.length)];
  return (
    <ItemWrapper>
      <ImgWrapper>
        <StyledImg src={car.img} alt={car.make} />
        <ButtonHeart>
          <StyledHartSVG>
            <use xlinkHref={`${sprite}#icon-heart`} />
          </StyledHartSVG>
        </ButtonHeart>
      </ImgWrapper>

      <MainInfo>
        <InfoText>
          {car.make} <AccentText>{car.model}</AccentText>, {car.year}
        </InfoText>
        <InfoText>{car.rentalPrice}</InfoText>
      </MainInfo>

      <DescriptionInfo>
        <li>
          <p>{city}</p>
          <p>{country}</p>
          <p>{car.rentalCompany}</p>
          {car.accessories.includes('Premium') && <p>Premium</p>}
        </li>
        <li>
          <p>{car.type}</p>
          <p>{car.make}</p>
          <p>{car.mileage}</p>          
        </li>
        <li>
          <p>{randomFunctionality}</p>
        </li>
      </DescriptionInfo>
      <CardButton type="button">Learn more</CardButton>
    </ItemWrapper>
  );
};
