import { Box, buttonUnstyledClasses, TabPanelUnstyled, Tabs, TabsListUnstyled, TabsProps, TabsUnstyled, TabUnstyled, tabUnstyledClasses, Theme } from '@mui/material';
import { createStyles, makeStyles, withStyles } from '@mui/styles';
import { styled } from '@mui/system';
import React from 'react';

interface TabsList {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  children?: React.ReactElement | any[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
}));

interface ITabsKit {
  classes?: TabsProps['classes'];
  value?: number;
  onChange?: (value: number) => void;
  hideTabs?: boolean;
  tabs: {
    title: React.ReactNode;
    children: React.ReactNode;
    key?: number;
  }[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
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

const Tab = styled(TabUnstyled)`
  font-family: 'IRANSans';
  color: white;
  cursor: pointer;
  background-color: transparent;
  width: 100%;
  padding: 6px 16px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:focus {
    color: #fff;
    border-radius: 8px;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    color: #fff;
  }
  &.${tabUnstyledClasses.selected}:first-child {
    background-color: #02c076;
  }
  &.${tabUnstyledClasses.selected}:last-child {
    background-color: #fe4335;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: #36363d;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

const ButtonTabsKit: React.FC<ITabsKit> = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    debugger;
    setValue(newValue);
    props.onChange && props.onChange(newValue);
  };

  return (
    <Box className={classes.root}>
      <TabsUnstyled defaultValue={0} onChange={() => handleChange}>
        <TabsList>
          {props.tabs.map((item, index) => {
            return (
              <Tab key={index} {...a11yProps(item.key || index)} onChange={() => handleChange}>
                {item.title}
              </Tab>
            );
          })}
        </TabsList>
        {props.tabs.map((item, index) => {
          return (
            <TabPanel key={index} value={value} index={item.key || index}>
              {item.children}
            </TabPanel>
          );
        })}
      </TabsUnstyled>
    </Box>
  );
};

export default ButtonTabsKit;
