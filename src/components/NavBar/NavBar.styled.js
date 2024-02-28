import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: ${p => p.theme.spacing(2)};
`;

export const NavigationLink = styled(NavLink)`
  font-weight: 700;
  text-decoration: none;
  font-size: 18px;
  padding: ${p => p.theme.spacing(2)};
  border-bottom: 2px solid transparent;
  border-radius: ${p => p.theme.radius.s};
  color: ${p => p.theme.colors.lightBlue};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blue};
  }
  &.active {
    border-color: ${p => p.theme.colors.lightBlue};
  }
`;
