import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectAdverts } from 'redux/adverts/selectors';
import { StyledSelect } from './BrandDropDown.styled';

const options = [
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

// const customStyles = {
//   control: (provided, state) => ({
//     ...provided,
//     backgroundColor: `${p => p.theme.colors.light}`,
//     color: state.isFocused
//       ? `${p => p.theme.colors.dark}`
//       : 'rgba(18, 20, 23, 0.2)',
//     //   '#121417' ,
//     border: 'none ',
//     boxShadow: 'none',
//     display: 'flex',
//     margin: 'auto 0',
//     padding: '0',
//     minHeight: '0',
//     lineHeight: '1',
//   }),

//   downChevron: provided => ({
//     ...provided,
//     width: '20px',
//     height: '20px',
//     padding: '0',
//     margin: '0 auto',
//     fill: `${p => p.theme.colors.dark}`,
//   }),

//   indicatorSeparator: provided => ({
//     ...provided,
//     display: 'none',
//   }),

//   input: provided => ({
//     ...provided,
//     width: '224px',
//     height: '48px',
//     // display: 'none',
//   }),
//   dropdownIndicator: provided => ({
//     ...provided,
//     padding: '0',
//     margin: 'auto 0',

//     '&::before': {
//       content: 'none',
//     },
//   }),

//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: `${p => p.theme.colors.white}`,
//     color: state.isSelected
//       ? `${p => p.theme.colors.dark}`
//       : 'rgba(18, 20, 23, 0.2)',
//     lineHeight: '1.3',
//     '&:hover, &:focus': {
//       color: `${p => p.theme.colors.dark}`,
//     },
//   }),
//   placeholder: provided => ({
//     ...provided,
//     fontWeight: '500',
//     fontSize: '18px',
//     letterSpacing: '-0.02em',
//     color: `${p => p.theme.colors.dark}`,
//   }),
// };

export const BrandDropDown = ({ onSelectBrand }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const selectRef = useRef(null);
  const adverts = useSelector(selectAdverts);

  const handleChangeBrand = options => {
    const brand = options.value;
    const filtered = adverts.filter(advert => advert.make === brand);

    onSelectBrand(filtered);
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
    <div ref={selectRef}>
      <StyledSelect
        options={options}
        // styles={customStyles}
        onChange={handleChangeBrand}
        menuIsOpen={menuIsOpen}
        onMenuOpen={toggleSelect}
        onMenuClose={toggleSelect}
        placeholder={'Enter the text'}
      />{' '}
    </div>
  );
};
