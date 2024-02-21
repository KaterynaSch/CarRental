import { NavBar } from 'components/NavBar/NavBar';
import { HeaderWrapper } from './Header.styled';
import { Logo } from 'components/Logo/Logo';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavBar />
    </HeaderWrapper>
  );
};
