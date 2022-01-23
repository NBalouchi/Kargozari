import React from 'react';
import { IconButton, Typography, useTheme } from '@mui/material';
import TabsKit from '../../components/kit/Tab/Tabs';
import { TableKit } from '../../components/kit/Table';
import { PinSvg } from '../../assets';
import { Box } from '@mui/system';
import CreateOrder from './createOrder';
import DeleteOrder from './deleteOrder';
import { ButtonTabsKit } from '../../components/kit/ButtonTab';

const tableResult = [
  { id: 0, title: 'کبافق', price: '26', changes: '%2,68', isDecreased: false },
  { id: 1, title: 'بجهرم', price: '26', changes: '%2,68', isDecreased: true },
  { id: 2, title: 'ولانا', price: '26', changes: '%2,68', isDecreased: true },
  { id: 3, title: 'شتران', price: '26', changes: '%2,68', isDecreased: false },
  { id: 4, title: 'غسالم', price: '26', changes: '%2,68', isDecreased: false },
  { id: 5, title: 'کبافق', price: '26', changes: '%2,68', isDecreased: true },
];

const Order = () => {
  const theme = useTheme();

  return (
    <>
      <Box display={'flex'} justifyContent={'flex-end'} width={'100%'} mt="-1.6rem">
        <IconButton>
          <PinSvg width={16} />
        </IconButton>
      </Box>
      <ButtonTabsKit
        tabs={[
          {
            title: 'خرید',
            children: (
              <>
                <CreateOrder />
              </>
            ),
          },
          {
            title: 'فروش',
            children: (
              <>
                <DeleteOrder />
              </>
            ),
          },
        ]}
      />
      {/* <TabsKit
        secondary
        tabs={[
          {
            title: 'خرید',
            children: (
              <>
                <CreateOrder />
              </>
            ),
          },
          {
            title: 'فروش',
            children: (
              <>
                <DeleteOrder />
              </>
            ),
          },
        ]}
      /> */}
    </>
  );
};

export default Order;
