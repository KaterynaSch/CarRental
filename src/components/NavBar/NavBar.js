import { NavigationLink, NavigationWrapper } from './NavBar.styled';

export const NavBar = () => {
  return (
    <NavigationWrapper>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/catalog">Catalog</NavigationLink>
      <NavigationLink to="/favorites">Favorites</NavigationLink>
    </NavigationWrapper>
  );
};
