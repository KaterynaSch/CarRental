import sprite from '../../images/icons.svg';
import { Homewrapper, StyledSVG, Text, Title } from './Home.styled';

export default function Home() {
  return (
    <Homewrapper>
      <div>
        <Title>CAR RENTAL</Title>
        <StyledSVG>
          <use xlinkHref={`${sprite}#icon-logo`} />
        </StyledSVG>
        <Text>
          Feel the real freedom on the road, renting a car from our service. We
          have a large selection of cars, convenient online booking and reliable
          service to make your trip unforgettable!
        </Text>
      </div>
    </Homewrapper>
  );
}
