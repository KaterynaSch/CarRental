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
  width: 18px;
  height: 18px;
  border: none;
  padding: 0;

  stroke: ${props => props.theme.colors.dark};
  stroke-width: 1.5px;
`;
export const ImgWrapper = styled.div`
  padding: 0;
  width: 462px;
  height: 268px;
  overflow: hidden;
  background: ${p => p.theme.colors.imgBgn} ${p => p.theme.colors.gradient};
  border-radius: ${p => p.theme.radius.m};
  margin-bottom: ${p => p.theme.spacing(3.5)};
`;

export const ImgModal = styled.img`
  object-fit: cover;
`;

export const InfoText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
`;
export const AccentText = styled.span`
  color: ${p => p.theme.colors.lightBlue};
`;

export const DescriptionInfo = styled.ul`
  margin-bottom: ${p => p.theme.spacing(3.5)};
  li:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(1)};
    padding: 0;
  }
  p {
    font-size: 12px;
    /* color: ${p => p.theme.colors.dark}; */
    /* width: 18px; */
    opacity: 0.5;
    margin: 0;
    display: inline-block;
    /* overflow: hidden; */
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
  margin-bottom: ${p => p.theme.spacing(6)};
`;
export const Subtitle = styled.p`
  font-weight: 500;
  margin-bottom: ${p => p.theme.spacing(2)};
`;

