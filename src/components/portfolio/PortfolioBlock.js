import React from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';

function PortfolioBlock(props) {
  const { image, live, source, title, requirements } = props;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingLeft={'2rem'}
    >
      <Box
        component={'img'}
        src={image}
        alt={'mockup'}
        p={'1rem'}
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '2rem' }}
      />
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <p>{requirements}</p>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.5rem'}
        py={'2rem'}
      >
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
        </Box>
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
