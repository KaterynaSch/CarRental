import styled from 'styled-components';

export const SelectWrapper = styled.div`
  width: 224px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: ${p => p.theme.spacing(6)} auto;
  gap: ${p => p.theme.spacing(2)};
`;
export const StyledLabel = styled.p`
  font-weight: 500;
  line-height: 1;
  color: ${p => p.theme.colors.labelGrey};
  padding: 0;
`;
