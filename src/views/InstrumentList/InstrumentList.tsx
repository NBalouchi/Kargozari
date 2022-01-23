import React from 'react';
import { Typography, useTheme } from '@mui/material';
import TabsKit from '../../components/kit/Tab/Tabs';
import { TableKit } from '../../components/kit/Table';

const tableResult = [
  { id: 0, title: 'کبافق', price: '26, 589', changes: '%2,68', isDecreased: false },
  { id: 1, title: 'بجهرم', price: '26, 589', changes: '%2,68', isDecreased: true },
  { id: 2, title: 'ولانا', price: '26, 589', changes: '%2,68', isDecreased: true },
  { id: 3, title: 'شتران', price: '26, 589', changes: '%2,68', isDecreased: false },
  { id: 4, title: 'غسالم', price: '26, 589', changes: '%2,68', isDecreased: false },
  { id: 5, title: 'کبافق', price: '26, 589', changes: '%2,68', isDecreased: true },
  { id: 6, title: 'کبافق', price: '26, 589', changes: '%2,68', isDecreased: true },
  { id: 7, title: 'کبافق', price: '26, 589', changes: '%2,68', isDecreased: true },
  { id: 8, title: 'کبافق', price: '26, 589', changes: '%2,68', isDecreased: false },
  { id: 9, title: 'کبافق', price: '26, 589', changes: '%2,68', isDecreased: true },
];

const InstrumentWatchList = () => {
  const theme = useTheme();

  return (
    <TabsKit
      tabs={[
        {
          title: 'پرتفوی لحظه ای',
          children: (
            <>
              <TableKit
                headers={[{ children: `نماد` }, { children: `قیمت` }, { children: `تغییرات` }]}
                rows={tableResult.map((item, index) => {
                  return {
                    id: index + 1,
                    data: {
                      title: <Typography color={theme.palette.common.white}>{item.title}</Typography>,
                      price: <Typography color={theme.palette.common.white}>{item.price}</Typography>,
                      changes: item.isDecreased ? <Typography color={theme.palette.error.dark}>{item.changes}</Typography> : <Typography color={theme.palette.success.main}>{item.changes}</Typography>,
                    },
                  };
                })}
              />
            </>
          ),
        },
        {
          title: 'نماد من',
          children: (
            <>
              <TableKit
                secondary
                errorHeader
                headers={[{ children: `تعداد` }, { children: `حجم` }, { children: `قیمت` }]}
                rows={tableResult.map((item, index) => {
                  return {
                    id: index + 1,
                    data: {
                      title: <Typography color={theme.palette.common.white}>{item.title}</Typography>,
                      price: <Typography color={theme.palette.common.white}>{item.price}</Typography>,
                      changes: item.isDecreased ? <Typography color={theme.palette.error.dark}>{item.changes}</Typography> : <Typography color={theme.palette.success.main}>{item.changes}</Typography>,
                    },
                  };
                })}
              />
            </>
          ),
        },
      ]}
    />
  );
};

export default InstrumentWatchList;
