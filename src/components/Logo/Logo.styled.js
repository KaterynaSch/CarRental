import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
`;
export const LogoText = styled.p`
  text-transform: uppercase;
  font-weight: 700;
`;
export const AccentText = styled.span`
  color: ${p => p.theme.colors.lightBlue};
`;

export const StyledSVG = styled.svg`
  stroke: ${p => p.theme.colors.lightBlue};
  fill: ${p => p.theme.colors.white};
  width: 46px;
  height: 46px;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: ${p => p.theme.colors.blue};
  }
`;
