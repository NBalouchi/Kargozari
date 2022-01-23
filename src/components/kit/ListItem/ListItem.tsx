import { List, ListItem, ListItemProps, ListItemText, Theme } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import React from 'react';

interface IListItemProps extends ListItemProps {
  rows: {
    data: { [name: string]: any };
    id: string | number;
  }[];
}

const useStyles = makeStyles((theme: Theme) => ({}));

const StyledListItem = withStyles((theme: Theme) => ({
  root: {
    marginBottom: '0.6rem',
    borderRadius: '0.8rem',
    paddingTop: '1.2rem',
    paddingBottom: '1.2rem',
    '&:nth-of-type(even)': {
      backgroundColor: '#2c2b32',
    },
    '&:nth-of-type(odd)': {
      backgroundColor: '#28272c',
    },
    '& .MuiListItemText-root': {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '& .MuiListItemText-primary': {
      color: theme.palette.grey.A400,
      fontSize: 16,
    },
    '& .MuiListItemText-secondary': {
      color: theme.palette.common.white,
      fontSize: 16,
    },
  },
}))(ListItem);

const ListItemKit: React.FC<IListItemProps> = (props) => {
  const { children, rows, ...rest } = props;
  const classes = useStyles();

  return (
    <List>
      {rows.length > 0 &&
        rows.map(({ data, id }, key) => {
          return (
            <React.Fragment key={key}>
              {Object.values(data).map((item, index) => {
                return (
                  <StyledListItem {...rest}>
                    <ListItemText primary={item.props.primary} secondary={item.props.secondary} />
                  </StyledListItem>
                );
              })}
            </React.Fragment>
          );
        })}
      )
    </List>
  );
};

export default ListItemKit;
