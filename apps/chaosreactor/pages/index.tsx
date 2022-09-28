import styled from '@emotion/styled';

import { Header } from '../components/Header';
import { Cta } from '../components/Cta';
import Image from 'next/image';
import DiscordGif from '../public/discord.gif';
import Demo from '../public/demo.png';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <Header />
          <Image alt="Demo" src={Demo} />
          <Image alt="Chaos Reactor Discord" src={DiscordGif} />
          <Cta />
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
