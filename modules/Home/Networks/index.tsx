'use client';

import { Title, Text, Card, SimpleGrid, Container, Badge } from '@mantine/core';
import Image from 'next/image';
import classes from './index.module.css';

const mockdata = [
  {
    title: 'Artella',
    icon: '/networks/artela.png',
    type: 'Testnet',
    monit:
      'https://explorer.halonode.top/artela/staking/artvaloper13qgjyl0392a294r98rhhr2cltgzvaq8l0uskvq',
  },
  {
    title: 'Stratisevm (Auroria)',
    icon: '/networks/stratis.png',
    type: 'Testnet',
    monit:
      'https://auroria.beacon.stratisevm.com/validator/8713dbd04bca9565b752784b63731396995d7fe07300ea4963226d4711f3a534e1b336e36328bae69d1943e4f08040a6',
  },
];

export function Networks() {
  const features = mockdata.map((feature, index) => (
    <a  key={index} href={feature.monit} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
    <Card  shadow="md" radius="md" className={classes.card} padding="md">
      
      <div style={{ display: 'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' }}>
        <Image src={feature.icon} alt="hero" width="70" height="70" />
        <div style={{ marginTop: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection:'column' }}>
            <Text fz="xl" fw={500}>
              {feature.title}
            </Text>
            <Badge variant="light" size="sm" style={{marginTop:'8px'}}>
              {feature.type}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
    </a>
  ));

  return (
    <>
      <div id="network" style={{ minHeight: '800px' }}>
        <Container size="lg" style={{ paddingTop: '100px',marginBottom:'200px' }}>
          <Title order={2} className={classes.title} ta="center" mt="sm">
            Our Networks
          </Title>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt={50}>
            {features}
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
}
