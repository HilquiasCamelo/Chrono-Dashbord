import styled from 'styled-components';
import { defaultTheme } from '../../styles/default';
import { ContentContainer, HomeContainer, Title, Subtitle , Image} from './style';


function Home() {
  return (
    <HomeContainer>
      <ContentContainer>
        <Title>Welcome to my awesome app</Title>
        <Subtitle>Where all your dreams come true</Subtitle>
        <Image src="https://via.placeholder.com/600x400" alt="Placeholder image" />
      </ContentContainer>
    </HomeContainer>
  );
}

export default Home;