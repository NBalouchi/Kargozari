import React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams, useGridApiContext, useGridState } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { Button, Chip, Pagination, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  color: theme.palette.grey[500],
}));

const StyledButton = styled(Button)(({ theme }) => ({
  boxShadow: 'unset',
  '&:focus': {
    boxShadow: 'unset',
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
  color: theme.palette.success.dark,
  '&.error': {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.dark,
  },
}));

function CustomPagination() {
  const apiRef = useGridApiContext();
  const [state] = useGridState(apiRef);

  return <Pagination color="primary" count={state.pagination.pageCount} page={state.pagination.page + 1} onChange={(event, value) => apiRef.current.setPage(value - 1)} />;
}

const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'Hello',
    col2: 'World',
    col3: 'Admin',
    col4: 'Active',
    subTitle: 'Optimization',
    email: 's_uuuu@gmail.com',
  },
  {
    id: 2,
    col1: 'XGrid',
    col2: 'is Awesome',
    col3: 'member',
    col4: 'Active',
    subTitle: 'Optimization',
    email: 's_uuuu@gmail.com',
  },
  {
    id: 3,
    col1: 'Material-UI',
    col2: 'is Amazing',
    col3: 'Owner',
    col4: 'Active',
    subTitle: 'Optimization',
    email: 's_uuuu@gmail.com',
  },
  { id: 4, col1: 'Hello', col2: 'World', col3: 'Admin', subTitle: 'Optimization', email: 's_uuuu@gmail.com' },
  {
    id: 5,
    col1: 'XGrid',
    col2: 'is Awesome',
    col3: 'Admin',
    col4: 'Error',
    subTitle: 'Optimization',
    email: 's_uuuu@gmail.com',
  },
  {
    id: 6,
    col1: 'Material-UI',
    col2: 'is Amazing',
    col3: 'Admin',
    col4: 'Error',
    subTitle: 'Optimization',
    email: 's_uuuu@gmail.com',
  },
];

const columns: GridColDef[] = [
  { field: 'id', hide: true },
  {
    field: 'col1',
    headerName: 'Title',
    width: 300,
    renderCell: (params: GridRenderCellParams<React.ReactElement>) => (
      <Stack>
        <Typography>{params.value}</Typography>
        <StyledTypography>{params.row.subTitle}</StyledTypography>
      </Stack>
    ),
  },
  {
    field: 'col2',
    headerName: 'Name',
    width: 300,
    renderCell: (params: GridRenderCellParams<React.ReactElement>) => (
      <Stack>
        <Typography>{params.value}</Typography>
        <StyledTypography>{params.row.email}</StyledTypography>
      </Stack>
    ),
  },
  {
    field: 'col3',
    headerName: 'Role',
    width: 150,
    renderCell: (params: GridRenderCellParams<React.ReactElement>) => <StyledTypography>{params.value}</StyledTypography>,
  },
  {
    field: 'col4',
    headerName: 'Status',
    width: 150,
    renderCell: (params: GridRenderCellParams<React.ReactElement>) => {
      return (
        <StyledChip
          className={params.row.col4 === 'Active' ? 'success' : 'error'}
          label={params.row.col4 === 'Active' ? 'Active' : 'Disabled'}
          color={params.row.col4 === 'Active' ? 'success' : 'error'}
          size="small"
        />
      );
    },
  },
  {
    field: 'col5',
    headerName: '',
    width: 150,
    renderCell: (params: GridRenderCellParams<React.ReactElement>) => <StyledButton variant="text">Edit</StyledButton>,
  },
];

const CustomDataGrid = () => {
  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight={true}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Pagination: CustomPagination,
        }}
      />
    </Box>
  );
};

export default CustomDataGrid;
