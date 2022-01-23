import { useState } from "react";
import { InputAdornment, List, ListItem, ListItemText, ListItemIcon, Stack, Theme, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { ButtonKit } from "../kit/Button";
import { InputKit } from "../kit/Input";
import { SearchSvg, StarOutlineSvg } from "../../assets";
import Card from "../common/Card";
import TabsKit from "../kit/Tab/Tabs";
import { ChipKit } from "../kit/Chip";

interface ISearchBoxProps {
  hasSuggestion?: boolean;
  isInstrumentSearch?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  searchBox: {
    "& .MuiFormControl-root > div": {
      backgroundColor: `${theme.palette.background.paper} !important`,
      borderRadius: "0.8rem",
      padding: "2rem",
    },
  },
  instrumentSearch: {
    color: theme.palette.grey.A400,
    height: "5.6rem",
  },
  searchSuggestionBox: {
    backgroundColor: "#232329 ",
    minHeight: "15rem",
    width: "59rem",
    alignItems: "center",
    position: "absolute",
    top: "6rem",
    right: "0",
    left: "0",
    zIndex: 50,
    boxShadow: theme.shadows[1],
    color: theme.palette.grey.A400,
    "& .MuiListItem-root": {
      borderBottom: "1px solid #313136",
      "& .MuiListItemText-root": {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      },
    },
  },
  open: {
    zIndex: 50,
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
}));

const SearchBox: React.FC<ISearchBoxProps> = (props) => {
  const { hasSuggestion, isInstrumentSearch } = props;
  const classes = useStyles();
  const [sugestionOpen, setSugestionOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();

  const onSetQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length >= 2 && !sugestionOpen) setSugestionOpen(true);
    if (e.target.value.length >= 2 && sugestionOpen) setSugestionOpen(true);
  };

  const handleSugestionOpen = () => {
    if (typeof searchTerm === "string" && searchTerm.length >= 2) {
      if (!sugestionOpen) setSugestionOpen(true);
    }
  };

  // const onEnter = (e) => {
  //   if (e.key === "Enter" || e.type === "click") {
  //     setSugestionOpen(false);
  //   }
  // };

  return (
    <>
      <Stack onClick={handleSugestionOpen} className={clsx({ [classes.open]: sugestionOpen }, classes.searchBox)}>
        <InputKit
          type={"Search"}
          placeholder={"جستجو"}
          fullWidth
          variant={isInstrumentSearch ? "standard" : undefined}
          onChange={onSetQuery}
          // onKeyUp={onEnter}
          value={searchTerm}
          InputProps={{
            disableUnderline: isInstrumentSearch && true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchSvg />
              </InputAdornment>
            ),
            endAdornment: isInstrumentSearch && (
              <InputAdornment position="end">
                <ChipKit width={100} height={32} variant="outlined" label="چارت تکنیکال" clickable />
                <ChipKit width={100} height={32} variant="filled" label="اطلاعات نماد" clickable />
              </InputAdornment>
            ),
            className: classes.instrumentSearch,
          }}
        />
        {hasSuggestion && sugestionOpen && searchTerm.length >= 2 && (
          <Card disableGutters className={classes.searchSuggestionBox}>
            <TabsKit
              paddingX="0"
              tertiary
              tabs={[
                {
                  title: "نتیجه جستجو",
                  children: (
                    <>
                      <List>
                        {Array(5)
                          .fill("")
                          .map((_, key) => (
                            <ListItem>
                              <ListItemIcon>
                                <StarOutlineSvg />
                              </ListItemIcon>
                              <ListItemText primary="Single-line item" />
                            </ListItem>
                          ))}
                      </List>
                    </>
                  ),
                },
                {
                  title: "دیده بان",
                  children: (
                    <>
                      <List>
                        {Array(5)
                          .fill("")
                          .map((_, key) => (
                            <ListItem>
                              <ListItemIcon>
                                <StarOutlineSvg />
                              </ListItemIcon>
                              <ListItemText primary="Single-line item" />
                            </ListItem>
                          ))}
                      </List>
                    </>
                  ),
                },
              ]}
            />
          </Card>
        )}
      </Stack>
    </>
  );
};

export default SearchBox;
