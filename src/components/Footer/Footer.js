import React, { useState } from 'react';
import { useScrollPosition } from './useScrollPosition';
import Box from '@material-ui/core/Box';
import './style.css';

export default function Footer() {
  const [sticky, setSticky] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  return (
    <Box
      as='footer'
      mb='-1em'
      sx={{
        position: 'sticky',
        transform: sticky ? 'translateY(100%)' : 'translateY(0)',
        transition: 'transform 400ms ease-in',
        bottom: 0,
        left: 0,
      }}
    >
      © {new Date().getFullYear()}
    </Box>
  );
}
