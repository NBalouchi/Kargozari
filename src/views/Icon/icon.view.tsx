import React from 'react';
import { Container, IconButton, Stack, Typography } from '@mui/material';
import {
  ArrowDownSvg,
  CheckedTrueSvg,
  ExcelSvg,
  FilterSvg,
  GreenFlashSvg,
  LogoutSvg,
  MessageSvg,
  NotificationSvg,
  PinSvg,
  RadioSelectedTrueSvg,
  RedFlashSvg,
  SearchSvg,
  StarOutlineSvg,
  StarSvg,
} from '../../assets';
import { Box } from '@mui/system';

export const IconViewRoute = () => `/icon`;

const IconView = () => {
  return (
    <Container
      sx={{
        backgroundColor: '#292929',
        padding: 3,
        '& button': {
          width: '8rem',
          height: '8rem',
          '& svg': {
            width: '3rem',
            height: '3rem',
          },
        },
      }}
    >
      <Typography sx={{ fontSize: '4rem', color: '#fff', textAlign: 'center', fontWeight: 500, my: 2 }}>Icons view</Typography>
      <Box display={'flex'}>
        <Stack alignItems={'center'}>
          <IconButton size="large">
            <ExcelSvg />
          </IconButton>
          <Typography variant="caption" color={'#fff'}>
            ExcelSvg
          </Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <IconButton>
            <RedFlashSvg />
          </IconButton>
          <Typography variant="caption" color={'#fff'}>
            FlashSvg
          </Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <IconButton>
            <GreenFlashSvg />
          </IconButton>
          <Typography variant="caption" color={'#fff'}>
            FlashSvg
          </Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <IconButton>
            <ArrowDownSvg />
          </IconButton>
          <Typography variant="caption" color={'#fff'}>
            ArrowDownSvg
          </Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <IconButton>
            <StarSvg />
          </IconButton>
          <Typography variant="caption" color={'#fff'}>
            StarSvg
          </Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <IconButton>
            <FilterSvg />
          </IconButton>
          <Typography variant="caption" color={'#fff'}>
            FilterSvg
          </Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <IconButton>
            <LogoutSvg />
          </IconButton>
          <Typography variant="caption" color={'#fff'}>
            LogoutSvg
          </Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <IconButton>
            <MessageSvg />
          </IconButton>
          <Typography variant="caption" color={'#fff'}>
            MessageSvg
          </Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <IconButton>
            <NotificationSvg />
          </IconButton>
          <Typography variant="caption" color={'#fff'}>
            NotificationSvg
          </Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <IconButton>
            <PinSvg />
          </IconButton>
          <Typography variant="caption" color={'#fff'}>
            PinSvg
          </Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <IconButton>
            <SearchSvg />
          </IconButton>
          <Typography variant="caption" color={'#fff'}>
            SearchSvg
          </Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <IconButton>
            <StarOutlineSvg />
          </IconButton>
          <Typography variant="caption" color={'#fff'}>
            StarOutlineSvg
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default IconView;
