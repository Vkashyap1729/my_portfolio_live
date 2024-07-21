import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/mypic.jpg';
import classNames from 'classnames';
import EmojiBullet from './EmojiBullet';
import SocialIcon from './SocialIcon';
import { Box, Button } from '@mui/material';
import { info } from '../../info/Info';

export default function Home() {
  const downloadCv = async () => {
    const pdfUrl =
      'https://drive.google.com/file/d/1P0qdOsffLX6l99qpA6PmCCdUfAKfc7gk/view?usp=drive_link';
    window.open(pdfUrl, '_blank');
  };
  return (
    <Box
      component={'main'}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 175px)'}
    >
      <Box
        // className={classNames(Style.avatar, Style.shadowed)}
        sx={{
          filter: `drop-shadow(0 -6mm 4mm rgb(0,255,164))`,
        }}
        alt={'image of developer'}
        // style={{ background: info.gradient }}
        component={'img'}
        src={me}
        width={{ xs: '27vh', md: '40vh' }}
        height={{ xs: '35vh', md: '51vh' }}
        borderRadius={'50%'}
        p={'0.75rem'}
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '2rem' }}
      />
      <Box>
        <h1>
          Hi, I'm{' '}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {info.firstName}
          </span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>I'm {info.position}.</h2>
        <Box component={'ul'} p={'0.8rem'}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={'flex'}
          gap={'1.5rem'}
          justifyContent={'center'}
          fontSize={{ xs: '2rem', md: '2.5rem' }}
        >
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
        <Box
          display={'flex'}
          gap={'1.5rem'}
          justifyContent={'center'}
          fontSize={{ xs: '2rem', md: '2.5rem' }}
        >
          <Button onClick={downloadCv}>CV / Resume</Button>
        </Box>
      </Box>
    </Box>
  )
}
