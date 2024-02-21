import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
  justify-content: center;
  row-gap: ${p => p.theme.spacing(12.5)};
  column-gap: ${p => p.theme.spacing(7)};
`;
