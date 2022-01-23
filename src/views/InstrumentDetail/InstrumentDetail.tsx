import React from "react";
import { ListItemText, Stack, Typography, useTheme } from "@mui/material";
import { ListItemKit } from "../../components/kit/ListItem";
import { Box } from "@mui/system";
import { StarSvg } from "../../assets";
import { ChipKit } from "../../components/kit/Chip";

const listItemResult = [
  { id: 0, title: "قیمت پایانی", price: "12,180" },
  { id: 1, title: "قیمت مجاز(آستانه قیمت)", price: "15,000" },
  { id: 2, title: "پایانی روز قبل", price: "12,180" },
  { id: 3, title: "اولین قیمت", price: "12,180" },
  { id: 4, title: "تعداد معاملات", price: "12,180" },
  { id: 5, title: "حجم معاملات", price: "12,180" },
  { id: 6, title: "ارزش معاملات", price: "12,180" },
];

const InstrumentDetail = () => {
  const theme = useTheme();

  return (
    <>
      <Box display={"flex"} alignItems={"center"} mb={1.5}>
        <Box sx={{ width: "0.7rem", height: "0.7rem", backgroundColor: theme.palette.secondary.main, borderRadius: theme.shape.rounded }}></Box>
        <Typography variant="h2" component={"p"} color={theme.palette.common.white} sx={{ px: 0.5 }}>
          بپیوند
        </Typography>
        <StarSvg width={8} />
      </Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Stack>
          <Typography paragraph variant="subtitle2" color={theme.palette.common.white}>
            پایان مشاوره - مجاز
          </Typography>
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <ChipKit width={37} borderRadius={9} fontSize={8} variant="outlined" label={"یادداشت"} />
            <ChipKit width={37} borderRadius={9} fontSize={8} variant="outlined" label={"کدال"} />
            <ChipKit width={37} borderRadius={9} fontSize={8} variant="outlined" label={"لینک TSE"} />
          </Box>
        </Stack>
        <Stack>
          <Typography paragraph variant="subtitle2" color={theme.palette.common.white}>
            قیمت لحظه ای
          </Typography>
          <Typography paragraph variant="subtitle1" color={theme.palette.secondary.main}>
            12,179(%2.65)
          </Typography>
        </Stack>
      </Box>
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
    </>
  );
};

export default InstrumentDetail;
