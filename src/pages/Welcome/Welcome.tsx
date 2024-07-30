import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import pfLogo from './logos/pf-logo-no-background.svg';

import { Image } from './styled';

import Tilt from 'react-parallax-tilt';

function Welcome() {
  const isPortrait = useOrientation();

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: '#F9F9F8',
        },
      },
      fpsLimit: 120,
      interactivity: {
        detect_on: 'canvas',
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          onDiv: {
            enable: true,
            selectors: '.bouncerectangle',
            mode: 'bounce',
            type: 'rectangle',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ['#0079FF', '#00DFA2', '#F6FA70', '#FF0060'],
        },
        links: {
          color: '#D3D3D3',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  if (init) {
    return (
      <>
        <Meta title="Welcome" />
        <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
          <Tilt
            gyroscope={true}
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
          >
            <Image className="inner-element" alt="logo privatefunction" src={pfLogo} />
          </Tilt>
          <Particles
            id="paticlesBG"
            class="bouncerectangle"
            particlesLoaded={particlesLoaded}
            // @ts-expect-error: Should expect value
            options={options}
          />
        </FullSizeCenteredFlexBox>
      </>
    );
  }

  return <></>;
}

export default Welcome;
