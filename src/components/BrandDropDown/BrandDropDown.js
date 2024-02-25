import { useEffect, useRef, useState } from 'react';
import Select from 'react-select';

import { StyledFilter, StyledLabel } from './BrandDropDown.styled';
import { useDispatch } from 'react-redux';
import { changeBrand } from 'redux/brand/brandSlice';

const options = [
  { value: 'All brand', label: 'all brand' },
  { value: 'Buick', label: 'Buick' },
  { value: 'Volvo', label: 'Volvo' },
  { value: 'HUMMER', label: 'HUMMER' },
  { value: 'Mitsubishi', label: 'Mitsubishi' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Lincoln', label: 'Lincoln' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'MINI', label: 'MINI' },
  { value: 'Bentley', label: 'Bentley' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'astonmartin', label: 'Aston Martin' },
  { value: 'Pontiac', label: 'Pontiac' },
  { value: 'Lamborghini', label: 'Lamborghini' },
  { value: 'Audi', label: 'Audi' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Chevrolet', label: 'Chevrolet' },
  { value: 'Chrysler', label: 'Chrysler' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Landrover', label: 'Land Rover' },
  { value: 'Subaru', label: 'Subaru' },
];

const customStyles = {
  control: provided => ({
    ...provided,
    width: '224px',
    minHeight: '48px',
    border: 'none',
    borderColor: 'transparent',
    borderRadius: '12px',
    backgroundColor: '#f7f7fb',
  }),
  menu: provided => ({
    ...provided,
    width: '224px',
    height: '272px',
    paddingRight: '8px',
    paddingTop: '14px',
    paddingBottom: '14px',
    borderRadius: '12px',
    boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
    color: 'rgba(18, 20, 23, 0.2)',
    overflow: 'hidden',
  }),

  downChevron: provided => ({
    ...provided,
    width: '20px',
    height: '20px',
    padding: '0',
    margin: '0 auto',
    fill: '#121417',
  }),

  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    color: state.isSelected ? '#121417' : 'rgba(18, 20, 23, 0.2)',
    lineHeight: '1.3',
    '&:hover, &:focus': {
      color: '#121417',
    },
  }),
  placeholder: provided => ({
    ...provided,
    fontWeight: '500',
    fontSize: '18px',
    letterSpacing: '-0.02em',
    color: '#121417',
  }),
};

export const BrandDropDown = () => {
  const dispatch = useDispatch();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const selectRef = useRef(null);

  const handleChangeBrand = option => {
    if (option.value === 'All brand') {
      dispatch(changeBrand(''));
    } else {
      dispatch(changeBrand(option.value));
    }
    setMenuIsOpen(false);
  };

  const handleClickOutside = event => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  };

  const toggleSelect = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <StyledFilter ref={selectRef}>
      <StyledLabel>Car brand</StyledLabel>
      <Select
        options={options}
        styles={customStyles}
        onChange={handleChangeBrand}
        menuIsOpen={menuIsOpen}
        onMenuOpen={toggleSelect}
        onMenuClose={toggleSelect}
        placeholder={'Enter the text'}
      />
    </StyledFilter>
  );
};
