import Modal from 'react-modal';
import sprite from '../../images/icons.svg';
import {
  AccentText,
  CLoseButton,
  DescriptionInfo,
  DescriptionSent,
  IconClose,
  ImgModal,
  ImgWrapper,
  InfoText,
  ModalWrapper,
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
    // rentalPrice,
    address,
    // rentalCompany,
    type,
    model,
    year,
    // mileage,
    accessories,
    functionalities,
  } = advert;
  const [, city, country] = address.split(',').map(part => part.trim());
  const [func1, func2, func3] = functionalities;
  const [acc1, acc2, acc3] = accessories;
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
      <ul>
        <li>
          <InfoText>
            {make} <AccentText>{model}</AccentText>, {year}
          </InfoText>
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
        </li>
        <li>
          <DescriptionSent>{description}</DescriptionSent>
          <p>Accessories and functionalities:</p>
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
          <p>Rental Conditions:</p>
          <ul>
            <li>
              <p>Minimum age : {}</p>
              <p></p>
            </li>
            <li>
              <p></p>
              <p></p>
              <p></p>
            </li>
          </ul>
        </li>
      </ul>
    </ModalWrapper>
  );
};
