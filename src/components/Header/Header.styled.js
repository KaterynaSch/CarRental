import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: ${p => p.theme.spacing(2)}; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--cornflower);
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08);
`;
