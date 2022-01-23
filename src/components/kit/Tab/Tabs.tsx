import { Box, Tab, Tabs, Theme } from '@mui/material';
import { createStyles, makeStyles, withStyles } from '@mui/styles';
import React from 'react';

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  children?: React.ReactElement | any[];
  secondary?: boolean;
  tertiary?: boolean;
}

const StyledTabs = withStyles((theme: Theme) => ({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: (props) => (props.tertiary ? '1px !important' : `calc(100% - 20px) !important`),
    bottom: '1.9rem ',
    zIndex: 1,
    borderRadius: `${theme.shape.borderRadius}px`,

    '& > span': {
      borderRadius: `${theme.shape.borderRadius}px !important`,
      width: '100%',
      backgroundColor: (props) => (props.secondary ? `${theme.palette.secondary.main} !important` : `${theme.palette.primary.main} !important`),
    },
    selected1: {
      background: 'red',
      color: 'white',
    },
    selected2: {
      background: 'maroon',
      color: 'white',
    },
  },
  flexContainer: {
    backgroundColor: (props) => (props.tertiary ? 'transparent' : theme.palette.grey.A100),
    justifyContent: (props) => (props.tertiary ? 'flex-start' : 'center'),
    width: (props) => (props.tertiary ? 'auto' : 'fit-content'),
    margin: '0 auto',
    borderRadius: theme.shape.borderRadius,
    '& + .MuiTabs-indicator': {
      transition: theme.transitions.create(['all'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }),
    },
    '& + .MuiTabs-indicator > span': {
      backgroundColor: () => {
        return theme.palette.common.white;
      },
      boxShadow: '0 6px 16px 0 rgba(7, 20, 44, 0.14)',
    },
  },
}))((props: StyledTabsProps) => <Tabs {...props} centered TabIndicatorProps={{ children: <span /> }} />);

interface StyledTabProps {
  label: React.ReactNode;
  secondary?: boolean;
  tertiary?: boolean;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 2,
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(13),
      marginRight: theme.spacing(1),
      opacity: 1,

      '&:first-child': {
        margin: 0,
        marginRight: (props) => (props.tertiary ? '1.6rem' : '0'),
      },
      transition: theme.transitions.create(['color'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }),
      color: (props) => (props.tertiary ? '#868788' : theme.palette.common.white),
      '&.MuiButtonBase-root': {
        minHeight: '3rem',
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    selected: {
      color: (props) => {
        if (props.secondary) {
          return `${theme.palette.common.white} !important`;
        } else if (props.tertiary) {
          return '#868788 !important';
        } else {
          return `${theme.palette.grey.A200} !important`;
        }
      },
    },
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
}));

interface ITabsKit {
  initialValue?: number;
  tabs: {
    title: React.ReactNode;
    children: React.ReactNode;
    key?: number;
  }[];
  secondary?: boolean;
  tertiary?: boolean;
  paddingX?: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  px?: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`nav-tabpanel-${index}`} aria-labelledby={`nav-tab-${index}`} {...other}>
      {value === index && (
        <Box>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const TabsKit: React.FC<ITabsKit> = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (props.initialValue) {
      setValue(props.initialValue);
    }
  }, [props.initialValue]);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <StyledTabs value={value} onChange={handleChange} secondary={props.secondary} tertiary={props.tertiary} aria-label="custom tab">
        {props.tabs.map((item, index) => {
          return <StyledTab secondary={props.secondary} tertiary={props.tertiary} key={index} label={item.title} {...a11yProps(item.key || index)} />;
        })}
      </StyledTabs>
      {props.tabs.map((item, index) => {
        return (
          <TabPanel key={index} value={value} index={item.key || index}>
            {item.children}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default TabsKit;
