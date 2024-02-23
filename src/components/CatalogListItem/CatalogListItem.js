import { useDispatch } from 'react-redux';
import sprite from '../../images/icons.svg';
import { useState } from 'react';
import Modal from 'react-modal';
import '../AdvertModal/AdvertModal.css';
import {
  AccentText,
  ButtonHeart,
  CardButton,
  DescriptionInfo,
  ImgWrapper,
  InfoText,
  ItemWrapper,
  MainInfo,
  StyledImg,
} from './CatalogListItem.styled';
import { toggleFavorite } from 'redux/adverts/favoriteSlice';
import { AdvertModal } from '../AdvertModal/AdvertModal';

Modal.setAppElement('#root');

export const CatalogListItem = ({ advert }) => {
  const {
    img,
    make,
    rentalPrice,
    address,
    rentalCompany,
    accessories,
    type,
    model,
    year,
    mileage,
    functionalities,
  } = advert;
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [, city, country] = address.split(',').map(part => part.trim());
  const randomFunctionality =
    functionalities[Math.floor(Math.random() * functionalities.length)];

  const handleToggle = () => {
    dispatch(toggleFavorite(advert));
    setIsFavorite(prevIsFavorite => !prevIsFavorite);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ItemWrapper>
      <ImgWrapper>
        <StyledImg src={img} alt={make} />
        <ButtonHeart
          type="button"
          onClick={handleToggle}
          data-favorite={isFavorite}
        >
          <svg>
            <use xlinkHref={`${sprite}#icon-heart`} />
          </svg>
        </ButtonHeart>
      </ImgWrapper>

      <MainInfo>
        <InfoText>
          {make} <AccentText>{model}</AccentText>, {year}
        </InfoText>
        <InfoText>{rentalPrice}</InfoText>
      </MainInfo>

      <DescriptionInfo>
        <li>
          <p>{city}</p>
          <p>{country}</p>
          <p>{rentalCompany}</p>
          {accessories.includes('Premium') && <p>Premium</p>}
        </li>
        <li>
          <p>{type}</p>
          <p>{make}</p>
          <p>{mileage}</p>
        </li>
        <li>
          <p>{randomFunctionality}</p>
        </li>
      </DescriptionInfo>
      <CardButton type="button" onClick={openModal}>
        Learn more
      </CardButton>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <AdvertModal onCloseModal={closeModal} advert={advert} />
      </Modal>
    </ItemWrapper>
  );
};
