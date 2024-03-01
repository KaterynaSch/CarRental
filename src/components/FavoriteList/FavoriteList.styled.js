import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DefaultText = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-top: 150px;
`;
export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.lightBlue};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blue};
  }
`;
