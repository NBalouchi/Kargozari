import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@mui/styles';
import { Box, BoxProps, Theme } from '@mui/material';

interface ICardProps extends BoxProps {
  className?: string;
  disableGutters?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Card: React.FC<ICardProps> = (props) => {
  const classes = useStyles();
  const { children, className, disableGutters, ...rest } = props;
  return (
    <Box className={clsx(classes.card, className)} px={disableGutters ? 0 : { xl: 4, lg: 2.5 }} py={2} {...rest}>
      <>{children}</>
    </Box>
  );
};

export default Card;
