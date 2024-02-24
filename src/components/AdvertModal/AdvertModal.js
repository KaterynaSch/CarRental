import Modal from 'react-modal';
import sprite from '../../images/icons.svg';
import {
  AccentText,
  ButtonRental,
  CLoseButton,
  ConditionList,
  DescriptionInfo,
  DescriptionSent,
  IconClose,
  ImgModal,
  ImgWrapper,
  InfoTitle,
  InfoWrapper,
  ModalWrapper,
  Subtitle,
} from './AdvertModal.styled';

Modal.setAppElement('#root');

export const AdvertModal = ({ onCloseModal, advert }) => {

  const {
    id,
    img,
    make,
    fuelConsumption,
    engineSize,
    description,
    rentalPrice,
    address,
    type,
    model,
    year,
    rentalConditions,
    mileage,
    accessories,
    functionalities,
  } = advert;
  const [, city, country] = address.split(',').map(part => part.trim());
  const [func1, func2, func3] = functionalities;
  const [acc1, acc2, acc3] = accessories;
  const conditionsArray = rentalConditions.split('\n');
  const age = conditionsArray[0].split(': ')[1];
  const license = conditionsArray[1];
  const deposit = conditionsArray[2];

  return (
    <ModalWrapper>
      <CLoseButton onClick={onCloseModal}>
        <IconClose>
          <use xlinkHref={`${sprite}#icon-close`} />
        </IconClose>
      </CLoseButton>
      <ImgWrapper>
        <ImgModal src={img} alt={make} />
      </ImgWrapper>
      <InfoWrapper>
        <li>
          <InfoTitle>
            {make} <AccentText>{model}</AccentText>, {year}
          </InfoTitle>
          <DescriptionInfo>
            <li>
              <p>{city}</p>
              <p>{country}</p>
              <p>Id: {id}</p>
              <p>Year: {year}</p>
              <p>Type: {type}</p>
            </li>
            <li>
              <p>Fuel Consumption: {fuelConsumption}</p>
              <p>Engine Size: {engineSize}</p>
            </li>
          </DescriptionInfo>
          <DescriptionSent>{description}</DescriptionSent>
        </li>
        <li>
          <Subtitle>Accessories and functionalities:</Subtitle>
          <DescriptionInfo>
            <li>
              <p>{func1}</p>
              <p>{func2}</p>
              <p>{func3}</p>
            </li>
            <li>
              <p>{acc1}</p>
              <p>{acc2}</p>
              <p>{acc3}</p>
            </li>
          </DescriptionInfo>
        </li>
        <li>
          <Subtitle>Rental Conditions:</Subtitle>
          <ConditionList>
            <li>
              <p>
                Minimum age: <span>{age}</span>
              </p>
              <p>{license}</p>
            </li>
            <li>
              <p>{deposit}</p>
              <p>
                Mileage: <span>{mileage}</span>
              </p>
              <p>
                Prise: <span>{rentalPrice}</span>
              </p>
            </li>
          </ConditionList>
        </li>
      </InfoWrapper>
      <ButtonRental href="tel:+380730000000">Rental car</ButtonRental>
    </ModalWrapper>
  );
};
