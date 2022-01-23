import React from 'react';
import {
  alpha,
  Checkbox,
  Collapse,
  Grid,
  IconButton,
  PaginationProps,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableFooter,
  TableHead,
  TableProps,
  TableRow,
  Theme,
} from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
// import { MoreVerticalSvg } from 'assets';

interface ITableKitProps extends Omit<TableProps, 'onSelect'> {
  loading?: boolean;
  headers: TableCellProps[];
  rows: {
    data: { [name: string]: any };
    expandNode?: React.ReactElement;
    id: string | number;
  }[];
  // menu?: (item: string | number, key: number) => IMenuKitProps;
  onExpand?: (id: string | number) => void;
  emptyRows?: number;
  expandHeader?: string;
  menuHeader?: string;
  onSelect?: (id: Array<string | number>) => void;
  pagination?: Pick<PaginationProps, 'onChange' | 'page' | 'count'> & {
    rowsPerPage?: number;
    total?: number;
    onRowsPerPageChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, page: number, rowsPerPage: number) => void;
  };
  emptyNode?: React.ReactNode;
  newItems?: Array<string | number>;
  successItems?: Array<string | number>;
  errorItems?: Array<string | number>;
  edit?: boolean;
  secondary?: boolean;
  successHeader?: boolean;
  errorHeader?: boolean;
  hasStyle?: boolean;
}
interface IUseStyles {
  secondary?: boolean;
  successHeader?: boolean;
  errorHeader?: boolean;
}

const useStyles = makeStyles<Theme, IUseStyles>((theme: Theme) => ({
  skeleton: {
    borderRadius: 0,
  },
  loadingTD: {
    border: 'none',
    paddingBottom: '0',
    paddingRight: '0',
    paddingLeft: '0',
    paddingTop: '0',
  },
  moreIcon: {},
  successRow: {
    backgroundColor: `${alpha(theme.palette.success.dark, 0.13)} !important`,
  },
  errorRow: {
    backgroundColor: `${alpha(theme.palette.error.dark, 0.1)} !important`,
  },
  secondary: {
    '& .MuiTableCell-head': {
      backgroundColor: 'transparent',
    },
    '& .MuiTableBody-root': {
      '& tr:nth-of-type(even)': {
        backgroundColor: '#28272c',
      },
      '& tr:nth-of-type(odd)': {
        backgroundColor: '#2c2b32',
      },
    },
  },
  successHeader: {
    '&.MuiTableCell-head': {
      color: theme.palette.success.main,
    },
  },
  errorHeader: {
    '&.MuiTableCell-head': {
      color: theme.palette.error.dark,
    },
  },
}));

const TableKit: React.FC<ITableKitProps> = (props) => {
  const {
    headers,
    loading,
    children,
    rows,
    onSelect,
    // menu,
    expandHeader,
    menuHeader,
    pagination,
    onExpand,
    emptyNode,
    emptyRows: emptyRowsFromProps,
    newItems,
    successItems,
    errorItems,
    edit,
    secondary,
    successHeader,
    errorHeader,
    hasStyle,
    ...rest
  } = props;

  const classes = useStyles({ secondary, successHeader, errorHeader });
  const [selected, setSelected] = React.useState<Array<string | number>>([]);
  const [open, setOpen] = React.useState<{ [name: string]: boolean }>({});

  let colSpan = headers.length;

  if (expandHeader) {
    colSpan = colSpan + 1;
  }
  if (menuHeader) {
    colSpan = colSpan + 1;
  }
  if (onSelect) {
    colSpan = colSpan + 1;
  }

  React.useMemo(() => {
    pagination && setOpen({});
  }, [pagination?.page, pagination?.rowsPerPage]);

  const emptyRows = emptyRowsFromProps || 10;

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.reduce<Array<number | string>>((acc, { id }) => {
        if (id) {
          acc.push(id);
        }
        return acc;
      }, []);
      onSelect && onSelect(newSelecteds);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_event: React.MouseEvent<unknown>, name: string | number) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: Array<string | number> = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    onSelect && onSelect(newSelected);
    setSelected(newSelected);
  };

  const isSelected = (name: string | number) => selected.indexOf(name) !== -1;

  return (
    <TableContainer>
      <Table className={clsx(classes.table, { [classes.secondary]: secondary })} aria-label="table" {...rest}>
        <TableHead>
          <TableRow>
            {onSelect && (
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < rows.length}
                  checked={rows.length > 0 && selected.length === rows.length}
                  onChange={handleSelectAllClick}
                  inputProps={{ 'aria-label': 'select all desserts' }}
                />
              </TableCell>
            )}
            {headers.map((head, key) => (
              <TableCell key={key} {...head} component={'th'} className={clsx({ [classes.successHeader]: successHeader, [classes.errorHeader]: errorHeader })} />
            ))}
            {menuHeader && (
              <TableCell width={150} component={'th'}>
                {menuHeader}
              </TableCell>
            )}
            {expandHeader && (
              <TableCell width={150} component={'th'}>
                {expandHeader}
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        {loading ? (
          <>
            Loading...
            {/* {Array(emptyRows)
              .fill(null)
              .map((_, key) => (
                <TableRow key={key}>
                  <TableCell className={classes.loadingTD} colSpan={colSpan}>
                    <SkeletonKit className={classes.skeleton} loading={loading} variant={'rect'} height={'48px'} width={'100%'} />
                  </TableCell>
                </TableRow>
              ))} */}
          </>
        ) : (
          <>
            <TableBody>
              {rows.length > 0 ? (
                rows.map(({ data, expandNode, id }, key) => {
                  const isItemSelected = id ? isSelected(id) : false;
                  // const menuData = menu && menu(id, key);

                  return (
                    <React.Fragment key={key}>
                      <TableRow hover role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={key} selected={isItemSelected}>
                        {onSelect && (
                          <TableCell onClick={(event) => handleClick(event, id)} padding="checkbox">
                            <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': String(id) }} />
                          </TableCell>
                        )}
                        {Object.values(data).map((item, index) =>
                          hasStyle ? (
                            // <TableCell key={index} style={{backgroundColor:`${hasStyle? colors.map((el,id)=>())}`}}>
                            <TableCell key={index}>{item}</TableCell>
                          ) : (
                            <TableCell key={index}>{item}</TableCell>
                          )
                        )}
                      </TableRow>
                      {expandNode && (
                        <TableRow>
                          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={colSpan}>
                            <Collapse in={open[key]} timeout="auto" unmountOnExit>
                              <Box margin={1}>{expandNode}</Box>
                            </Collapse>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={colSpan}>
                    {emptyNode}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            {/* pagination goes here */}
          </>
        )}
        {/* {!loading && pagination && (
          <TableFooter>
            <TableRow>
              <TableCell style={{ border: 'none' }} align="center" colSpan={colSpan}>
                <PaginationKit {...pagination} />
              </TableCell>
            </TableRow>
          </TableFooter>
        )} */}
        {/* {loading && pagination && (
          <TableFooter>
            <TableRow>
              <TableCell style={{ border: 'none', height: 92 }} align="center" colSpan={colSpan}>
                <Grid container spacing={1} alignItems={'center'} justifyContent={'space-between'}>
                  <Grid item>
                    <Grid container spacing={1} alignItems={'center'}>
                      {Array(5)
                        .fill('')
                        .map((_, key) => {
                          return (
                            <Grid item key={key}>
                              <SkeletonKit loading={loading} variant={'circle'} height={'32px'} width={'32px'} />
                            </Grid>
                          );
                        })}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <SkeletonKit loading={loading} variant={'rect'} height={'45px'} width={'80px'} />
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableFooter>
        )} */}
      </Table>
    </TableContainer>
  );
};
export default TableKit;

TableKit.defaultProps = {
  emptyNode: 'No Data',
};
