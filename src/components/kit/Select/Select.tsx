import { alpha, InputBase, Menu, MenuItem, MenuProps, OutlinedInput, SelectProps, TextField, Theme } from '@mui/material';
import { makeStyles, styled, withStyles } from '@mui/styles';
import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const useStyles = makeStyles(() => ({
  '&.MuiMenu-paper': {
    backgroundColor: 'red',
  },
  formControl: {
    marign: 0,
    minWidth: 120,
  },
  select: {
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
}));

const StyledMenu = withStyles((theme: Theme) => ({
  root: {
    fontSize: '1.4rem',
    paddingTop: '1.1rem',
    paddingBottom: '1.1rem',
  },
}))(MenuItem);

interface ISelectKitProps extends SelectProps {
  label?: React.ReactNode;
  options: { value: any; title: string }[];
  name?: string;
}

const SelectKit: React.FC<ISelectKitProps> = (props) => {
  const { label, options, name, ...rest } = props;
  const classes = useStyles();
  const [option, setOption] = React.useState<string>();

  const handleChange = (event: SelectChangeEvent<typeof option>) => {
    const {
      target: { value },
    } = event;
    setOption(
      // On autofill we get a stringified value.
      value
    );
  };

  return (
    <>
      <Select
        fullWidth
        size="small"
        // multiple
        displayEmpty
        value={option}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected) {
            return selected;
          }

          return label;
        }}
        // MenuProps={MenuProps}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <StyledMenu disabled value="">
          <em>انتخاب کنید...</em>
        </StyledMenu>
        {options.map((item, index) => (
          <StyledMenu key={index} value={item.title}>
            {item.title}
          </StyledMenu>
        ))}
      </Select>
    </>
  );
};

export default SelectKit;
