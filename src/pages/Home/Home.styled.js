import styled from 'styled-components';

export const Homewrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(4)};
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.5;
  margin: 0 auto;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: ${p => p.theme.colors.dark};
  max-width: 320px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 24px;
  max-width: 510px;
  margin: 0 auto;
  text-align: center;
  color: ${p => p.theme.colors.dark};
`;
export const StyledSVG = styled.svg`
  display: block;
  stroke: ${p => p.theme.colors.lightBlue};
  fill: ${p => p.theme.colors.white};
  margin: 0 auto;
  width: 166px;
  height: 166px;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: ${p => p.theme.colors.blue};
  }
`;
