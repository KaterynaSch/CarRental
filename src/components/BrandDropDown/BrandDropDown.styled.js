import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  /* Стилі для інпуту */
  .react-select__control {
    width: 224px; /* Задаємо ширину інпуту */
    height: 48px; /* Задаємо висоту інпуту */
    border-radius: ${p => p.theme.radius.s};
    background: ${p => p.theme.colors.light};
    
  }

  /* Стилі для випадаючого списку */
  .react-select__menu {
    width: 224px; /* Задаємо ширину випадаючого списку */
    height: 272px; /* Задаємо висоту випадаючого списку */
    border: 1px solid rgba(18, 20, 23, 0.05);
    border-radius: ${p => p.theme.radius.s};
    box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.02);
    background: ${p => p.theme.colors.white};
    padding :${p => p.theme.spacing(3.5)}${p => p.theme.spacing(4.5)}
  }
`;
