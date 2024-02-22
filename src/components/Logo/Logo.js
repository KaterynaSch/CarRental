import { Link } from 'react-router-dom';
import sprite from '../../images/icons.svg';
import { AccentText, LogoContainer, LogoText, StyledSVG } from './Logo.styled';
export const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <StyledSVG>
          <use xlinkHref={`${sprite}#icon-logo`} />
        </StyledSVG>
      </Link>
      <LogoText>
        car<AccentText>rental</AccentText>
      </LogoText>
    </LogoContainer>
  );
};
