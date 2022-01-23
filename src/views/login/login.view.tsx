import { Box, Button, Checkbox, Container, Fab, FormControl, InputLabel, MenuItem, Radio, Select, Stack, styled, Switch, TextField, Typography } from '@mui/material';
import React from 'react';
import CustomDataGrid from '../../components/DataGrid';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';

const Item = styled('div')(({ theme }) => ({
  ...theme.typography.base,
  padding: theme.spacing(1),
  textAlign: 'center',
  '& > *': {
    paddingRight: theme.spacing(2),
  },
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const LoginViewRoute = () => `/login`;

const LoginView = () => {
  return (
    <>
      <Container>
        <Box sx={{ padding: '10rem 6rem' }}>
          <CustomDataGrid />
        </Box>
      </Container>
      <Box sx={{ '& > *': { marginRight: '1rem !important' } }}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outlined">Outlined</Button>
        <Fab color="primary" size="lg" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab variant="extended" color="primary">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Box sx={{ '& > *': { marginRight: '1rem !important' } }}>
          <Button size={'xs'} variant="contained">
            Contained
          </Button>
          <Button size={'sm'} variant="contained">
            Contained
          </Button>
          <Button size={'base'} variant="contained">
            Contained
          </Button>
          <Button size={'lg'} variant="contained">
            Contained
          </Button>
          <Button size={'xl'} variant="contained">
            Contained
          </Button>
          <Button size={'small'} variant="contained">
            Contained
          </Button>
          <Button size={'medium'} variant="contained">
            Contained
          </Button>
          <Button size={'large'} variant="contained">
            Contained
          </Button>
        </Box>
      </Box>
      <Box sx={{ '& > *': { marginRight: '1rem !important' } }}>
        <Button variant="text" color={'secondary'}>
          Text
        </Button>
        <Button variant="contained" color={'secondary'}>
          Contained
        </Button>{' '}
        <Button variant="secondary" color={'secondary'}>
          Secondary
        </Button>
        <Button variant="outlined" color={'secondary'}>
          Outlined
        </Button>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab variant="extended" color={'secondary'}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
      </Box>
      <Box sx={{ '& > *': { marginRight: '1rem !important' } }}>
        <Fab size={'xs'} variant="extended" color={'primary'}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab size={'sm'} variant="extended" color={'primary'}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab size={'base'} variant="extended" color={'primary'}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab size={'lg'} variant="extended" color={'primary'}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab size={'xl'} variant="extended" color={'primary'}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab size={'small'} variant="extended" color={'primary'}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab size={'medium'} variant="extended" color={'primary'}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab size={'large'} variant="extended" color={'primary'}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Box sx={{ '& > *': { marginRight: '1rem !important' } }}>
          <Fab size={'xs'} color="primary" aria-label="edit">
            <EditIcon fontSize="xs" />
          </Fab>

          <Fab size={'sm'} color="primary" aria-label="edit">
            <EditIcon />
          </Fab>

          <Fab size={'base'} color="primary" aria-label="edit">
            <EditIcon />
          </Fab>

          <Fab size={'lg'} color="primary" aria-label="edit">
            <EditIcon />
          </Fab>

          <Fab size={'xl'} color="primary" aria-label="edit">
            <EditIcon />
          </Fab>

          <Fab size={'small'} color="primary" aria-label="edit">
            <EditIcon />
          </Fab>

          <Fab size={'medium'} color="primary" aria-label="edit">
            <EditIcon />
          </Fab>

          <Fab size={'large'} color="primary" aria-label="edit">
            <EditIcon />
          </Fab>
        </Box>
      </Box>
      <Box sx={{ '& > *': { marginRight: '1rem !important' } }}>
        <TextField id="outlined-required" rounded size="small" label="Required" color="primary" />
        <TextField id="outlined-required" size="small" label="Required" color="secondary" />
        <TextField id="outlined-required" size="small" label="Required" color="error" />
        <TextField id="outlined-required" size="small" label="Required" color="info" />
        <TextField id="outlined-required" size="small" label="Required" color="success" />
        <TextField id="outlined-required" size="small" label="Required" color="warning" />
        <TextField error id="outlined-error" rounded size="small" label="Error" />
        <TextField error id="outlined-error-helper-text" size="small" label="Error" helperText="Incorrect entry." />
        {/*  */}
        <TextField id="outlined-required" size="medium" label="Required" />
        <TextField error id="outlined-error" size="medium" label="Error" />
        <TextField error id="outlined-error-helper-text" size="medium" label="Error" helperText="Incorrect entry." />
      </Box>
      <Box sx={{ '& > *': { marginRight: '1rem !important' } }}>
        <Radio defaultChecked />
        <Radio />
        <Radio disabled />
        <Radio disabled checked />
      </Box>
      <Box sx={{ '& > *': { marginRight: '1rem !important' } }}>
        <Checkbox {...label} defaultChecked color="primary" />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked color="primary" />
      </Box>
      <Box sx={{ '& > *': { marginRight: '1rem !important' } }}>
        <Switch sx={{ m: 1 }} defaultChecked />
      </Box>
      <Box sx={{ '& > *': { marginRight: '1rem !important' } }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>{' '}
      </Box>
      <Stack spacing={2}></Stack>
    </>
  );
};

export default LoginView;
