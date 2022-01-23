import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import { TableKit } from '../../components/kit/Table';
import { GreenFlashSvg, RedFlashSvg } from '../../assets';
import { Box } from '@mui/system';

const bestLimitResult = [
  { id: 0, num: '5', quantity: '1,256', price: '12,048', isDecreased: false },
  { id: 1, num: '2', quantity: '1,256', price: '12,048', isDecreased: true },
  { id: 2, num: '1', quantity: '1,256', price: '12,048', isDecreased: true },
  { id: 3, num: '4', quantity: '1,256', price: '12,048', isDecreased: false },
  { id: 4, num: '2', quantity: '1,256', price: '12,048', isDecreased: false },
  { id: 5, num: '8', quantity: '1,256', price: '12,048', isDecreased: true },
];

const BestLimit = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={0.5}>
      <Grid item lg={6}>
        <Box>
          <GreenFlashSvg />
        </Box>
        <TableKit
          secondary
          successHeader
          hasStyle
          headers={[{ children: `تعداد` }, { children: `حجم` }, { children: `قیمت` }]}
          rows={bestLimitResult.map((item, index) => {
            return {
              id: index + 1,
              data: {
                title: <Typography color={theme.palette.common.white}>{item.num}</Typography>,
                price: <Typography color={theme.palette.common.white}>{item.quantity}</Typography>,
                changes: item.isDecreased ? <Typography color={theme.palette.error.dark}>{item.price}</Typography> : <Typography color={theme.palette.success.main}>{item.price}</Typography>,
              },
            };
          })}
        />
      </Grid>
      <Grid item lg={6}>
        <Box display={'flex'} justifyContent={'flex-end'} width={'100%'}>
          <RedFlashSvg />
        </Box>

        <TableKit
          secondary
          errorHeader
          headers={[{ children: `تعداد` }, { children: `حجم` }, { children: `قیمت` }]}
          rows={bestLimitResult.map((item, index) => {
            return {
              id: index + 1,
              data: {
                title: <Typography color={theme.palette.common.white}>{item.num}</Typography>,
                price: <Typography color={theme.palette.common.white}>{item.quantity}</Typography>,
                changes: item.isDecreased ? <Typography color={theme.palette.error.dark}>{item.price}</Typography> : <Typography color={theme.palette.success.main}>{item.price}</Typography>,
              },
            };
          })}
        />
      </Grid>
    </Grid>
  );
};

export default BestLimit;
