import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.5;
  margin: 200px auto ${p => p.theme.spacing(3.5)};
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: ${p => p.theme.colors.lightBlue};
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
