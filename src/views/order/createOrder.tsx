import React from 'react';
import { FormControlLabel, Radio, RadioGroup, useTheme, Theme, Typography, Box, useMediaQuery, InputAdornment, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { InputKit } from '../../components/kit/Input';
import { ButtonKit } from '../../components/kit/Button';
import { ChipKit } from '../../components/kit/Chip';
import { SelectKit } from '../../components/kit/Select';
import useStyles from './style';

const CreateOrder = () => {
  const theme = useTheme();
  const classes = useStyles();
  // const isXL = [theme.breakpoints.up(1880)];
  const isXL = useMediaQuery(theme.breakpoints.up(1880));
  const [value, setValue] = React.useState('3');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <InputKit placeholder="تعداد" variant="outlined" sx={{ mb: 2, mt: '1.2rem' }} />
      <Box className={classes.inputWrapper}>
        <InputKit
          placeholder="قیمت"
          variant="outlined"
          type={'number'}
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment className={classes.numberInput} position="end">
                <Stack>
                  <Typography variant="subtitle2" component={'p'} sx={{ mb: 0.5 }}>
                    11,572
                  </Typography>
                  <Typography variant="subtitle2" component={'p'}>
                    10,470
                  </Typography>
                </Stack>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <InputKit placeholder="سرمایه" variant="outlined" sx={{ mb: 2 }} />
      <Box sx={{ mb: 2 }}>
        <SelectKit
          options={[
            { title: 'اعتبار1', value: 0 },
            { title: 'اعتبار2', value: 1 },
          ]}
          label={'اعتبار'}
        ></SelectKit>
      </Box>
      <InputKit placeholder="نوع حساب" variant="outlined" sx={{ mb: 2 }} />
      <Typography paragraph variant="subtitle2" color={theme.palette.grey.A400}>
        قدرت خرید
      </Typography>
      <RadioGroup row aria-label="percent" name="percent" value={value} onChange={handleChange} className={classes.radioChip}>
        <FormControlLabel
          value={1}
          control={<Radio style={{ display: 'none' }} />}
          label={<ChipKit width={isXL ? 65 : 53} clickable colors={value === '1' ? 'primary' : undefined} variant="outlined" label={'25%'} />}
        />
        <FormControlLabel
          value={2}
          control={<Radio style={{ display: 'none' }} />}
          label={<ChipKit width={isXL ? 65 : 53} clickable colors={value === '2' ? 'primary' : undefined} variant="outlined" label={'50%'} />}
        />
        <FormControlLabel
          value={3}
          control={<Radio style={{ display: 'none' }} />}
          label={<ChipKit width={isXL ? 65 : 53} clickable colors={value === '3' ? 'primary' : undefined} variant="outlined" label={'75%'} />}
        />
        <FormControlLabel
          value={4}
          control={<Radio style={{ display: 'none' }} />}
          label={<ChipKit width={isXL ? 65 : 53} clickable colors={value === '4' ? 'primary' : undefined} variant="outlined" label={'10%'} />}
        />
      </RadioGroup>
      <ButtonKit variant={'contained'} fullWidth>
        ثبت خرید
      </ButtonKit>
    </>
  );
};

export default CreateOrder;
