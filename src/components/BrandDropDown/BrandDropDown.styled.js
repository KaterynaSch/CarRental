import styled from 'styled-components';

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: ${p => p.theme.spacing(4.5)};
  /* margin: 0 auto; */
`;

export const SelectWrapper = styled.div`
  width: 406px;
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
export const StyledButton = styled.button`
display :block;
  font-weight: 600;
  padding: 10px 44px;
  border-radius: ${p => p.theme.radius.s};
  border: none;
  border-bottom: 2px solid ${p => p.theme.colors.lightBlue};
  background: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.lightBlue};
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);

  &:active {
    box-shadow: 0 8px 24px 0 rgba(22, 22, 22, 0.16);
  }
`;

