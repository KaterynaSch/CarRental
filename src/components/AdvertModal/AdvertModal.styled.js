import styled from 'styled-components';

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  border-radius: ${props => props.theme.radius.l};
  width: 542px;
  height: auto;
  padding: ${p => p.theme.spacing(10)};
  background-color: ${p => p.theme.colors.white};
  position: relative;
`;

export const CLoseButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
`;

export const IconClose = styled.svg`
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  stroke: ${props => props.theme.colors.dark};
  stroke-width: 1.5px;
`;

export const ImgWrapper = styled.div`
  padding: 0;
  width: 462px;
  height: 248px;
  overflow: hidden;
  background: ${p => p.theme.colors.imgBgn} ${p => p.theme.colors.gradient};
  border-radius: ${p => p.theme.radius.m};
`;

export const ImgModal = styled.img`
  object-fit: cover;
`;

export const InfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${p => p.theme.spacing(6)};
  max-height: 342px;
  margin: ${p => p.theme.spacing(3.5)} 0 ${p => p.theme.spacing(6)};
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.scroll};
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${p => p.theme.colors.white};
    border-radius: 8px;
  }
`;

export const InfoTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: ${p => p.theme.spacing(2)};
`;

export const AccentText = styled.span`
  color: ${p => p.theme.colors.lightBlue};
`;

export const DescriptionInfo = styled.ul`
  li:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(1)};
    padding: 0;
  }
  p {
    font-size: 12px;
    opacity: 0.5;
    margin: 0;
    display: inline-block;
  }
  p:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: ${p => p.theme.colors.dark};
    opacity: 0.1;
    margin: 0 ${p => p.theme.spacing(1.5)};
    vertical-align: middle;
  }
`;

export const DescriptionSent = styled.p`
  font-weight: 400;
  margin-top: ${p => p.theme.spacing(3.5)};
`;

export const Subtitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: ${p => p.theme.spacing(2)};
`;

export const ConditionList = styled.ul`
  li:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(2)};
    padding: 0;
  }
  p {
    display: inline-block;
    font-size: 12px;
    letter-spacing: -0.02em;
    margin-right: ${p => p.theme.spacing(2)};
    padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(3.5)};
    color: ${p => p.theme.colors.condition};
    background-color: ${p => p.theme.colors.conditionBgn};
    border-radius: ${p => p.theme.radius.xl};
  }
  span {
    color: ${p => p.theme.colors.lightBlue};
    font-weight: 600;
  }
`;

export const ButtonRental = styled.a`
  display: inline-block;
  line-height: 1.4;
  font-weight: 600;
  border: none;
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(12.5)};
  border-radius: ${p => p.theme.radius.s};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.lightBlue};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.blue};
  }
`;
