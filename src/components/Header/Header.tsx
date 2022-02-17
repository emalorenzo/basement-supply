import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';
import { useMediaQuery } from '@/hooks';
import { QUERIES } from '@/theme';

const Wrapper = styled.header`
  padding: 2.3vw;
`;

const Nav = styled.nav`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

const Logo = styled(Image)`
  @media ${({ theme }) => theme.queries.mobile} {
    content: url('/images/basement.logotype.small.svg');

    & img {
      width: 43px;
    }
  }
`;

const Logos = styled.div`
  display: flex;
  flex-shrink: 9999999;
  margin: 0 2rem;

  & > * {
    margin: 0 0.4vw !important; // overrides next/image default margin
  }

  @media ${({ theme }) => theme.queries.mobile} {
    display: none;
  }
`;

export const Header = () => {
  const isMobile = useMediaQuery(QUERIES.mobile);
  return (
    <Wrapper>
      <Nav>
        <Link href="https://basement.studio" passHref prefetch={false}>
          <Logo
            src={
              isMobile
                ? '/images/basement.logotype.small.svg'
                : '/images/basement.logotype.svg'
            }
            layout="fixed"
            height={isMobile ? 40 : 48}
            width={isMobile ? 43 : 192}
          />
        </Link>
        <Logos>
          <Image src="/images/nav1.svg" height={24} width={24} layout="fixed" />
          <Image src="/images/nav2.svg" height={24} width={43} layout="fixed" />
          <Image src="/images/nav3.svg" height={22} width={84} layout="fixed" />
          <Image src="/images/nav4.svg" height={24} width={43} layout="fixed" />
          <Image src="/images/nav5.svg" height={22} width={25} layout="fixed" />
        </Logos>
        <Button title="cart (0)" />
      </Nav>
    </Wrapper>
  );
};