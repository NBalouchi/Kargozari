import React from 'react';
import { Container, Divider, Grid, ListItemText, Stack, Typography, useTheme } from '@mui/material';
import { ButtonKit } from '../../components/kit/Button';
import { Box } from '@mui/system';
import InputKit from '../../components/kit/Input/Input';
import { SearchBox } from '../../components/SearchBox';
import { TableKit } from '../../components/kit/Table';
import Card from '../../components/common/Card';
import { SelectKit } from '../../components/kit/Select';
import { TabsKit } from '../../components/kit/Tab';
import { ListItemKit } from '../../components/kit/ListItem';
import { ChipKit } from '../../components/kit/Chip';

export const KitViewRoute = () => `/kit`;

const tableResult = [
  { id: 0, title: 'کبافق', price: '26, 589', changes: '%2,68', isDecreased: false },
  { id: 1, title: 'بجهرم', price: '26, 589', changes: '%2,68', isDecreased: true },
  { id: 2, title: 'ولانا', price: '26, 589', changes: '%2,68', isDecreased: true },
  { id: 3, title: 'شتران', price: '26, 589', changes: '%2,68', isDecreased: false },
  { id: 4, title: 'غسالم', price: '26, 589', changes: '%2,68', isDecreased: false },
  { id: 5, title: 'کبافق', price: '26, 589', changes: '%2,68', isDecreased: true },
];

const bestLimitResult = [
  { id: 0, num: '5', quantity: '1,256', price: '12,048', isDecreased: false },
  { id: 1, num: '2', quantity: '1,256', price: '12,048', isDecreased: true },
  { id: 2, num: '1', quantity: '1,256', price: '12,048', isDecreased: true },
  { id: 3, num: '4', quantity: '1,256', price: '12,048', isDecreased: false },
  { id: 4, num: '2', quantity: '1,256', price: '12,048', isDecreased: false },
  { id: 5, num: '8', quantity: '1,256', price: '12,048', isDecreased: true },
];

const listItemResult = [
  { id: 0, title: 'قیمت پایانی', price: '12,180' },
  { id: 1, title: 'قیمت مجاز(آستانه قیمت)', price: '15,000' },
  { id: 2, title: 'پایانی روز قبل', price: '12,180' },
  { id: 3, title: 'اولین قیمت', price: '12,180' },
  { id: 4, title: 'تعداد معاملات', price: '12,180' },
  { id: 5, title: 'حجم معاملات', price: '12,180' },
  { id: 6, title: 'ارزش معاملات', price: '12,180' },
];

const KitView = () => {
  const theme = useTheme();
  return (
    <Container>
      <Card>
        <Typography sx={{ fontSize: "4rem", color: "#fff", textAlign: "center", fontWeight: 500, py: 4 }}>Kit</Typography>
        <Typography sx={{ fontSize: "2rem", color: "#fff", fontWeight: 500, my: 2 }}>Buttons</Typography>
        <Box
          sx={{
            "& button": {
              margin: 1,
            },
          }}
        >
          <ButtonKit variant={"text"}> Enabled</ButtonKit>
          <ButtonKit variant={"text"}>hovered</ButtonKit>
          <ButtonKit variant={"text"} disabled>
            disabled
          </ButtonKit>
          <ButtonKit dragged variant={"text"}>
            dragged
          </ButtonKit>
        </Box>
        <Box
          sx={{
            "& button": {
              margin: 1,
            },
          }}
        >
          <ButtonKit variant={"outlined"}>Eanabled</ButtonKit>
          <ButtonKit variant={"outlined"}>hovered</ButtonKit>
          <ButtonKit variant={"outlined"} disabled>
            disabled
          </ButtonKit>
          <ButtonKit dragged variant={"outlined"}>
            dragged
          </ButtonKit>
        </Box>
        <Box
          sx={{
            "& button": {
              margin: 1,
            },
          }}
        >
          <ButtonKit variant={"contained"}>contained</ButtonKit>
          <ButtonKit variant={"contained"}>hovered</ButtonKit>
          <ButtonKit variant={"contained"} disabled>
            disabled
          </ButtonKit>
          <ButtonKit dragged variant={"contained"}>
            dragged
          </ButtonKit>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography sx={{ fontSize: "2rem", color: "#fff", fontWeight: 500, my: 3 }}>Text Fields</Typography>
          <Grid container spacing={5}>
            <Grid item lg={4}>
              <InputKit placeholder="Inactive" variant="outlined" />
            </Grid>
            <Grid item lg={4}>
              <InputKit placeholder="focused" variant="outlined" focused />
            </Grid>
            <Grid item lg={4}>
              <InputKit placeholder="error" variant="outlined" error isError errorText="کد وارد شده اشتباه است" />
            </Grid>
            <Grid item lg={4}>
              <InputKit placeholder="disabled" variant="outlined" disabled />
            </Grid>
            <Grid item lg={4}>
              <InputKit placeholder="multiline" variant="outlined" multiline />
            </Grid>
            <Grid item lg={4}>
              <SelectKit
                options={[
                  { title: "اعتبار1", value: 0 },
                  { title: "اعتبار2", value: 1 },
                ]}
                label={"اعتبار"}
              ></SelectKit>
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography sx={{ fontSize: "2rem", color: "#fff", fontWeight: 500, my: 3 }}>Search Box</Typography>
          <Grid container spacing={5}>
            <Grid item lg={12}>
              <SearchBox isInstrumentSearch hasSuggestion />
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography sx={{ fontSize: "2rem", color: "#fff", fontWeight: 500, my: 3 }}>Table</Typography>
          <Grid container spacing={5}>
            <Grid item lg={12}>
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
            </Grid>

            <Grid item lg={6}>
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
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography sx={{ fontSize: "2rem", color: "#fff", fontWeight: 500, my: 3 }}>Tab</Typography>
          <Grid container spacing={5}>
            <Grid item lg={6}>
              <TabsKit
                tabs={[
                  {
                    title: "پرتفوی لحظه ای",
                    children: (
                      <>
                        {" "}
                        <TableKit
                          headers={[{ children: `نماد` }, { children: `قیمت` }, { children: `تغییرات` }]}
                          rows={tableResult.map((item, index) => {
                            return {
                              id: index + 1,
                              data: {
                                title: <Typography color={theme.palette.common.white}>{item.title}</Typography>,
                                price: <Typography color={theme.palette.common.white}>{item.price}</Typography>,
                                changes: item.isDecreased ? (
                                  <Typography color={theme.palette.error.dark}>{item.changes}</Typography>
                                ) : (
                                  <Typography color={theme.palette.success.main}>{item.changes}</Typography>
                                ),
                              },
                            };
                          })}
                        />
                      </>
                    ),
                  },
                  {
                    title: "نماد من",
                    children: (
                      <>
                        {" "}
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
                                changes: item.isDecreased ? (
                                  <Typography color={theme.palette.error.dark}>{item.price}</Typography>
                                ) : (
                                  <Typography color={theme.palette.success.main}>{item.price}</Typography>
                                ),
                              },
                            };
                          })}
                        />
                      </>
                    ),
                  },
                ]}
              />
            </Grid>
            <Grid item lg={6}>
              <TabsKit
                secondary
                tabs={[
                  {
                    title: "پرتفوی لحظه ای",
                    children: (
                      <>
                        {" "}
                        <TableKit
                          headers={[{ children: `نماد` }, { children: `قیمت` }, { children: `تغییرات` }]}
                          rows={tableResult.map((item, index) => {
                            return {
                              id: index + 1,
                              data: {
                                title: <Typography color={theme.palette.common.white}>{item.title}</Typography>,
                                price: <Typography color={theme.palette.common.white}>{item.price}</Typography>,
                                changes: item.isDecreased ? (
                                  <Typography color={theme.palette.error.dark}>{item.changes}</Typography>
                                ) : (
                                  <Typography color={theme.palette.success.main}>{item.changes}</Typography>
                                ),
                              },
                            };
                          })}
                        />
                      </>
                    ),
                  },
                  {
                    title: "نماد من",
                    children: (
                      <>
                        {" "}
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
                                changes: item.isDecreased ? (
                                  <Typography color={theme.palette.error.dark}>{item.price}</Typography>
                                ) : (
                                  <Typography color={theme.palette.success.main}>{item.price}</Typography>
                                ),
                              },
                            };
                          })}
                        />
                      </>
                    ),
                  },
                ]}
              />
            </Grid>
            <Grid item lg={6}>
              <TabsKit
                tertiary
                paddingX="0"
                tabs={[
                  {
                    title: "پرتفوی لحظه ای",
                    children: (
                      <>
                        {" "}
                        <TableKit
                          headers={[{ children: `نماد` }, { children: `قیمت` }, { children: `تغییرات` }]}
                          rows={tableResult.map((item, index) => {
                            return {
                              id: index + 1,
                              data: {
                                title: <Typography color={theme.palette.common.white}>{item.title}</Typography>,
                                price: <Typography color={theme.palette.common.white}>{item.price}</Typography>,
                                changes: item.isDecreased ? (
                                  <Typography color={theme.palette.error.dark}>{item.changes}</Typography>
                                ) : (
                                  <Typography color={theme.palette.success.main}>{item.changes}</Typography>
                                ),
                              },
                            };
                          })}
                        />
                      </>
                    ),
                  },
                  {
                    title: "نماد من",
                    children: (
                      <>
                        {" "}
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
                                changes: item.isDecreased ? (
                                  <Typography color={theme.palette.error.dark}>{item.price}</Typography>
                                ) : (
                                  <Typography color={theme.palette.success.main}>{item.price}</Typography>
                                ),
                              },
                            };
                          })}
                        />
                      </>
                    ),
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Typography sx={{ fontSize: "2rem", color: "#fff", fontWeight: 500, my: 2 }}>ChipKit</Typography>
        <Box
          sx={{
            "& .MuiChip-root": {
              margin: 1,
            },
          }}
        >
          <ChipKit color="error" label="error" variant="outlined" />
          <ChipKit color="info" label="info" />
          <ChipKit color="primary" label="primary" variant="outlined" />
        </Box>
        <Divider sx={{ my: 3 }} />

        <Box>
          <Typography sx={{ fontSize: "2rem", color: "#fff", fontWeight: 500, my: 3 }}>ListItem</Typography>
          <ListItemKit
            rows={listItemResult.map((item, index) => {
              return {
                id: index + 1,
                data: {
                  title: <ListItemText primary={item.title} secondary={item.price} />,
                },
              };
            })}
          />
        </Box>
      </Card>
    </Container>
  );
};

export default KitView;
