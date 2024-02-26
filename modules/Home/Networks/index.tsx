'use client';

import { Title, Text, Card, SimpleGrid, Container, Space, Badge, Button } from '@mantine/core';
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
    title: 'Lava',
    icon: '/networks/lava_logo.svg',
    type: 'Testnet',
    monit:
      'https://lava.explorers.guru/validator/lava@valoper1kgv2eskje2y574fq3ska3jepsjzdufsyysexrz',
  },
  {
    title: 'Stratisevm (Auroria)',
    icon: '/networks/stratis.png',
    type: 'Testnet',
    monit:
      'https://auroria.beacon.stratisevm.com/validator/8713dbd04bca9565b752784b63731396995d7fe07300ea4963226d4711f3a534e1b336e36328bae69d1943e4f08040a6',
  },
  {
    title: 'Waku',
    icon: '/networks/waku-logo.jpg',
    type: 'Testnet',
    monit: '/',
  },
  {
    title: 'Union',
    icon: '/networks/union-logo.jpg',
    type: 'Testnet',
    monit: '/',
  },
  {
    title: 'Dusk',
    icon: '/networks/dusk-logo.svg',
    type: 'Testnet',
    monit: '/',
  },
  {
    title: 'Koii',
    icon: '/networks/koii.png',
    type: 'Testnet',
    monit: 'https://explorer.koii.live/address/BpHX5a7WEQYMek3MjaEtQENXmANkU894rFy6N3L1MUU1',
  },
  {
    title: 'Tangle',
    icon: '/networks/tangle.png',
    type: 'Testnet',
    monit:
      'https://telemetry.polkadot.io/#list/0x3d22af97d919611e03bbcbda96f65988758865423e89b2d99547a6bb61452db3',
  },
  {
    title: 'Juneo',
    icon: '/networks/juneo.jpg',
    status: 'Archived',
    type: 'Testnet',
    monit: 'https://mcnscan.io/chain/gr7AypMQYLdjGK9yLWQhDiSLACy2mChwqh6nxnygQmqGs241m',
  },
  {
    title: 'Arkeo',
    icon: '/networks/arkeo.jpg',
    status: 'Archived',
    type: 'Testnet',
    monit:
      'https://testnet.arkeo.explorers.guru/validator/tarkeovaloper1fpsqsd70dfwpj0r5z3mwrur0uc7rh2w5fe262l',
  },
  {
    title: 'Over Protocol',
    icon: '/networks/over-protocol.png',
    status: 'Archived',
    type: 'Testnet',
    monit: 'https://view.over.network/address/0x42351e363e1ea5385befa7b9628c8b8f0b124e88',
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
