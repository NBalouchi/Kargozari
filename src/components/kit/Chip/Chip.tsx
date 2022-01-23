import React from "react";
import { Chip, ChipProps, Theme } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import clsx from "clsx";

interface IChipKitProps extends ChipProps {
  colors?: "info" | "error" | "primary" | "secondary";
  height?: number;
  disabled?: boolean;
  width?: number;
  fontSize?: number;
  borderRadius?: number;
}

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  error: {
    // backgroundColor: `${theme.palette.error.main} !important`,
    color: `${theme.palette.error.main} !important`,
    borderColor: theme.palette.error.main,
    // "&:hover": {
    //   backgroundColor: `${theme.palette.error.dark} !important`,
    // },
  },
  secondary: {
    // backgroundColor: `${theme.palette.secondary.light} !important`,
    color: `${theme.palette.secondary.main} !important`,
    borderColor: ` ${theme.palette.secondary.main} !important`,
  },
  primary: {
    // backgroundColor: `${theme.palette.primary.light} !important`,
    color: `${theme.palette.primary.main} !important`,
    borderColor: ` ${theme.palette.primary.main} !important`,
  },
  info: {
    // backgroundColor: `${theme.palette.info.light} !important`,
    color: `${theme.palette.info.main} !important`,
    borderColor: ` ${theme.palette.info.main} !important`,
  },
  disabled: {
    backgroundColor: "#e7e7e7 !important",
    borderColor: "#e7e7e7 !important",
    color: "#b5afaf !important",
    cursor: "not-allowed !important",
    "& svg": {
      fill: "#7e7e7e !important",
    },
  },
}));

const Custom = withStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius / 2,
    fontSize: theme.typography.subtitle2.fontSize,
    fontWeight: 400,
    lineHeight: theme.typography.subtitle2.fontSize,
    margin: " 0 0.4rem",
    "& span ": {
      padding: "0",
    },
  },
  icon: {
    color: "inherit",
  },
  outlined: {
    backgroundColor: `transparent !important`,
    borderColor: theme.palette.primary.main,
    color: "#D6D5DD",
  },
  filled: {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: theme.palette.grey.A200,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}))(Chip);

const ChipKit: React.FC<IChipKitProps> = (props) => {
  const { colors, height, disabled, width, fontSize,borderRadius, ...rest } = props;

  const classes = useStyles();

  return (
    <Custom
      className={clsx({
        [classes.error]: colors?.includes("error"),
        [classes.info]: colors?.includes("info"),
        [classes.primary]: colors?.includes("primary"),
        [classes.secondary]: colors?.includes("secondary"),
        [classes.disabled]: disabled,
      })}
      disabled={disabled}
      // deleteIcon={<CloseRoundedIcon style={{ width: 16 }} />}
      {...rest}
      // size={"small"}
      style={{ width: width, height: height, fontSize: fontSize, borderRadius: borderRadius }}
    />
  );
};

ChipKit.defaultProps = {
  width: 56,
  height: 24,
};

export default ChipKit;
