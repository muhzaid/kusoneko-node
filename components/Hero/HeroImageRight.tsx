'use client';

import { Container, Title, Text, Button } from '@mantine/core';
import { useRouter } from 'next/navigation';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  const router = useRouter();
  return (
    <div style={{position:'relative'}}>
      <div className={classes.root} style={{ minHeight: '100vh' }}>
      <Container size="lg" py={100} style={{zIndex:9999,position:'relative'}}>
        <div className={classes.inner}>
          
          <Title className={classes.title}>
              <Text
                component="span"
                inherit
                // c={'pink'}
                fw={700}
                variant="gradient"
                gradient={{ from: 'blue', to: 'blue' }}
              >
                Raven
              </Text>{' '}
              Node
            </Title>

            <Text className={classes.description} mt={30}>
              Independent node validator, ready to contribute to decentralized networks and foster
              innovation in the realm of blockchain technology.
            </Text>
          <div>
          <Button
              onClick={() => router.push('/#about')}
                variant="gradient"
                gradient={{ from: 'blue', to: 'blue' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </div>
    </div>
  );
}
