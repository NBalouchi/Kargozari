import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowDown } from '../../assets';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  radioChip: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1.4rem',
    '& label': {
      margin: '0',
    },
  },
  numberInput: {
    height: '4rem',
    maxHeight: 'inherit',
    backgroundColor: 'rgba(134, 135 ,136 ,47%)',
    width: '6rem',
    marginLeft: '-14px',
    borderRadius: ' 8px 0 0 8px ',
    justifyContent: 'center',
    color: '#d6d5dd',
  },
  inputWrapper: {
    position: 'relative',
    '&:after': {
      content: `" "`,
      backgroundImage: `url(${ArrowDown})`,
      left: '5.5rem',
      top: '2rem',
      position: 'absolute',
      width: '25px',
      backgroundRepeat: ' no-repeat',
      height: '15px',
      pointerEvents: 'none',
      backgroundColor: theme.palette.background.paper,
      zIndex: 10,
      backgroundPosition: 'center',
      cursor: 'pointer',
    },
    '&:before': {
      content: `" "`,
      backgroundImage: `url(${ArrowDown})`,
      left: '5.6rem',
      top: '0.5rem',
      position: 'absolute',
      width: '25px',
      backgroundRepeat: ' no-repeat',
      height: '19px',
      pointerEvents: 'none',
      backgroundColor: theme.palette.background.paper,
      transform: 'rotate(180deg)',
      zIndex: 10,
      backgroundPosition: 'center',
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
