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

export const CatalogListItem = ({ advert }) => {
  const [, city, country] = advert.address.split(',').map(part => part.trim());
  const randomFunctionality =
    advert.functionalities[
      Math.floor(Math.random() * advert.functionalities.length)
    ];
  return (
    <ItemWrapper>
      <ImgWrapper>
        <StyledImg src={advert.img} alt={advert.make} />
        <ButtonHeart>
          <StyledHartSVG>
            <use xlinkHref={`${sprite}#icon-heart`} />
          </StyledHartSVG>
        </ButtonHeart>
      </ImgWrapper>

      <MainInfo>
        <InfoText>
          {advert.make} <AccentText>{advert.model}</AccentText>, {advert.year}
        </InfoText>
        <InfoText>{advert.rentalPrice}</InfoText>
      </MainInfo>

      <DescriptionInfo>
        <li>
          <p>{city}</p>
          <p>{country}</p>
          <p>{advert.rentalCompany}</p>
          {advert.accessories.includes('Premium') && <p>Premium</p>}
        </li>
        <li>
          <p>{advert.type}</p>
          <p>{advert.make}</p>
          <p>{advert.mileage}</p>
        </li>
        <li>
          <p>{randomFunctionality}</p>
        </li>
      </DescriptionInfo>
      <CardButton type="button">Learn more</CardButton>
    </ItemWrapper>
  );
};
