import { NavigationLink, NavigationWrapper } from './NavBar.styled';

export const NavBar = () => {
  return (
    <NavigationWrapper>
      <li>
        <NavigationLink to="/">Home</NavigationLink>
      </li>
      <li>
        <NavigationLink to="/catalog">Catalog</NavigationLink>
      </li>
      <li>
        <NavigationLink to="/favorites">Favorites</NavigationLink>
      </li>
    </NavigationWrapper>
  );
};
