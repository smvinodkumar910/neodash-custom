import React from 'react';

import { DASHBOARD_HEADER_BRAND_LOGO, IS_CUSTOM_LOGO } from '../../config/ApplicationConfig';
import StyleConfig from '../../config/StyleConfig';
import { Typography } from '@neo4j-ndl/react';


await StyleConfig.getInstance();


const darklogo = "https://scr-network-tableau-viz-ext-244762339286.us-east4.run.app/aptivlogo/APTV_BIG.D.png";
const lightlogo = "https://scr-network-tableau-viz-ext-244762339286.us-east4.run.app/aptivlogo/APTV_BIG.png";
//const darklogo = '/APTV_BIG.D.png';
//const lightlogo = '/APTV_BIG.png';

export const NeoDashboardHeaderLogo = ({ resetApplication, isDarkMode }) => {
  const content = (
    <div className='n-items-center sm:n-flex md:n-flex-1 n-justify-start'>
      <a className='n-cursor-pointer'>
        <img onClick={resetApplication} className='n-h-6 n-w-auto n-m-2' src={isDarkMode ? darklogo:lightlogo} alt='Logo' />
      </a>
      {IS_CUSTOM_LOGO ? <></> : <Typography variant='h6'>Labs</Typography>}
    </div>
  );

  return content;
};

export default NeoDashboardHeaderLogo;
