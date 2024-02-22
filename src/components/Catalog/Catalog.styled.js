import styled from 'styled-components';

export const ButtonLoadMore = styled.button` 
  display: block;  
  font-weight: 600;
  line-height: 1.4;  
  padding: ${p => p.theme.spacing(3.5)} ${p => p.theme.spacing(11)};
  margin: 0 auto ;
  border: none;
  border-radius: ${p => p.theme.radius.s};
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover,
  &:focus{
    background-color: ${p => p.theme.colors.lightBlue};
  }
`