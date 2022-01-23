import React from 'react';
import { LinkProps, SvgIcon, ThemeOptions } from '@mui/material';
import { Box } from '@mui/system';
import { CheckedTrueSvg, RadioSelectedTrueSvg } from '../assets';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LinkBehavior from '../components/LinkBehavior';

const theme: ThemeOptions = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    unit: 'px',
  },
  direction: 'ltr',
  components: {
    // MuiButtonBase: { defaultProps: { disableRipple: true, disableTouchRipple: true } },
    MuiButton: {
      defaultProps: { disableElevation: true, size: 'base' },
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        },

        contained: {
          backgroundColor: '#f8d12f',
          color: '#19191c',
          '&:disabled': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            color: 'rgba(255, 255, 255, 0.38)',
          },
        },
        outlined: {
          borderColor: '#f8d12f',
          color: '#d6d5dd',
          '&:hover': {
            backgroundColor: 'rgba(248, 209, 47, 0.04)',
          },
          ':disabled': {
            borderColor: 'rgba(255, 255, 255, 0.12)',
            color: 'rgba(255, 255, 255, 0.38)',
          },
        },
        text: {
          color: '#d6d5dd',
          ':hover': {
            backgroundColor: 'rgba(248, 209, 47, 0.04)',
          },
          '&:focus': {
            border: 'solid 1px #f8d12f',
            backgroundColor: 'rgba(248, 209, 47, 0.12)',
          },
          ':disabled': {
            color: 'rgba(255, 255, 255, 0.38)',
          },
        },

        sizeXs: {
          padding: '7px 11px',
          fontSize: '1.3rem',
          lineHeight: 1.231,
        },
        sizeSm: {
          padding: '9px 13px',
          lineHeight: 1.231,
        },
        sizeBase: {
          padding: '9px 17px',
          lineHeight: 1.429,
          fontSize: '1.4rem',
        },
        sizeLg: {
          padding: '9px 17px',
          lineHeight: 1.715,
        },
        sizeXl: {
          padding: '13px 25px',
          lineHeight: 1.6,
          fontSize: '1.5rem',
        },
      },
    },
    MuiFab: {
      defaultProps: { size: 'base', color: 'primary' },
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
          '&:active': {
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
          },
        },
        extended: {
          width: 'auto !important',
        },

        sizeXs: {
          height: 30,
          minHeight: 30,
          width: 30,
          minWidth: 30,
        },
        sizeSm: {
          height: 34,
          minHeight: 34,
          width: 34,
          minWidth: 34,
        },
        sizeBase: {
          height: 38,
          minHeight: 38,
          width: 38,
          minWidth: 38,
        },
        sizeLg: {
          height: 42,
          minHeight: 42,
          width: 42,
          minWidth: 42,
        },
        sizeXl: {
          height: 50,
          minHeight: 50,
          width: 50,
          minWidth: 50,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeXs: {},
        fontSizeSm: {},
        fontSizeBase: {},
        fontSizeLg: {},
        fontSizeXl: {},
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: 'outlined',
        InputLabelProps: {
          shrink: false,
        },
      },
      styleOverrides: {
        root: {
          '&:hover': {
            borderColor: '#a9a9a9',
          },
          '& label:not(.MuiInputLabel-sizeSmall)': {
            transform: 'translate(14px, 11px) scale(1)',
          },
          '& label.MuiInputLabel-shrink:not(.MuiInputLabel-sizeSmall)': {
            transform: 'translate(14px, -9px) scale(0.75) !important',
          },
          '& .MuiOutlinedInput-root': {
            '& input::placeholder': {
              color: '#d6d5dd',
              opacity: 'unset',
            },
            color: '#bdbdbd',

            '& fieldset': {
              borderColor: '#fff',
            },
            '&:hover fieldset': {
              borderColor: '#a9a9a9',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#f8d12f',
              borderWidth: '1px',
            },
            '&.Mui-disabled fieldset': {
              borderColor: '#7a7a7a',
            },
          },
        },
      },

      variants: [
        {
          props: { rounded: true },
          style: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '1000rem',
            },
          },
        },
      ],
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#bdbdbd',
          '&.Mui-disabled': {
            color: '#797979',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        inputSizeSmall: {
          paddingTop: '8px !important',
          paddingBottom: '8px !important',
          height: '1.375em',
        },
        input: {
          paddingTop: '13px !important',
          paddingBottom: '13px !important',
          height: '1em',
          fontSize: '1.4rem',
        },
        root: {
          ':hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#a9a9a9 !important',
            },
          },
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        checkedIcon: <SvgIcon component={CheckedTrueSvg} viewBox="0 0 16 16" />,
        disableRipple: true,
        icon: (
          <Box
            sx={{
              width: '24px',
              height: '24px',
              background: '#FFFFFF',
              border: '2px solid #D1D5DB',
              boxSizing: 'border-box',
              borderRadius: '6px',
            }}
          />
        ),
        sx: {
          '&:hover': { bgcolor: 'transparent' },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        checkedIcon: <SvgIcon component={RadioSelectedTrueSvg} viewBox="0 0 16 16" />,
        icon: (
          <Box
            sx={{
              width: '24px',
              height: '24px',
              background: '#FFFFFF',
              border: '2px solid #D1D5DB',
              boxSizing: 'border-box',
              borderRadius: '1000rem',
            }}
          />
        ),
        sx: {
          '&:hover': { bgcolor: 'transparent' },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: KeyboardArrowDownRoundedIcon,
      },
      styleOverrides: {
        select: {
          color: '#fff',
          '&:hover': {
            borderColor: '#a9a9a9 !important',
          },
          notchedOutline: {
            borderColor: '#fff',
          },
          '&.MuiOutlinedInput-input': {
            border: 'solid 1px #fff !important',
          },
          '& ~ fieldset': {
            // borderColor: '#fff !important',
            '&:hover': {
              // borderColor: '#a9a9a9 !important',
            },
          },
          '& .MuiTextField-root': {
            '&:hover': {
              borderColor: '#fff !important',
            },
          },

          '& ~ .MuiSelect-icon': {
            fill: '#d6d5dd',
          },
          '& ~ .MuiSelect-nativeInput': {
            '& input::placeholder': {
              color: '#d6d5dd',
              opacity: 'unset',
            },
          },
        },
        // '& fieldset': {
        //   borderColor: '#fff',
        // },
      },
    },
    MuiSwitch: {
      defaultProps: {
        focusVisibleClassName: '.Mui-focusVisible',
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          width: 44,
          height: 24,
          padding: 0,
        },
        switchBase: {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-disabled .MuiSwitch-thumb': {
            color: '#F3F4F6',
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.7,
          },
        },
        thumb: {
          boxSizing: 'border-box',
          boxShadow: 'none',
        },
        track: {
          borderRadius: 26 / 2,
          backgroundColor: '#E5E7EB',
          opacity: 1,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiCssBaseline: {
      styleOverrides: `
			  h1 {
				color: grey;
			  }
			  html {
				font-size: 62.5%; /* 62.5% of 16px = 10px */
		  	  }
			`,
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: '1px solid #E5E7EB',
          // color: theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
          WebkitFontSmoothing: 'auto',
          letterSpacing: 'normal',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#F9FAFB',
            borderBottom: 'solid 1px #E5E7EB',
            color: '#6B7280',
          },
          '& .MuiDataGrid-columnsContainer': {
            borderBottom: 'solid 1px #E5E7EB',
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-iconSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
            borderBottom: 'solid 1px #E5E7EB',
          },
          '& .MuiDataGrid-row': {
            color: '#111827',
            fontSize: '1.4rem',
          },
          'MuiDataGrid-cell': {
            // color: theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
          },
          'MuiPaginationItem-root': {
            borderRadius: 0,
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          border: `solid 1px #D1D5DB`,
          borderRadius: 6,
          marginRight: '1.5rem',
          '& .MuiPagination-ul': {
            '& li': {
              '&:not(:last-child)': {
                borderRight: `solid 1px #D1D5DB`,
              },
              '& button': {
                color: '#6B7280',
                margin: 0,
              },
              '& svg': {
                fill: '#6B7280',
              },
            },
          },
          '& .Mui-selected': {
            borderRadius: 0,
            border: `solid 1px #FADD62`,
            color: `#6B7280!important`,
            // @ts-ignore
            backgroundColor: `#FFEEA7 !important`,
          },
        },
      },
    },
    MuiTable: {
      defaultProps: {},
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#2e2e33',
            color: '#d6d5dd',
            padding: '5px 16px',
            lineHeight: '2rem',
            fontSize: '1.2rem',
            border: 'none',
            textAlign: 'center',
          },
          '& .MuiTableBody-root': {
            '& tr:nth-of-type(even)': {
              backgroundColor: '#28272c',
            },
          },
          '& .MuiTableCell-body': {
            border: 'none',
            textAlign: 'center',
            padding: '1.8rem 1.6rem',
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: '#24242a',
          boxShadow: '0 2px 30px 0 rgba(0, 0, 0, 0.5)',
          paddingBottom: 0,
          paddingTop: 0,
        },
      },
    },

    MuiMenuItem: {
      defaultProps: {},
      styleOverrides: {
        root: {
          color: '#d6d5dd',
          backgroundColor: '#24242a',
          borderBottom: 'solid 1px #313136',
          ':hover': {
            color: '#f8d12f',
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#FADD62', // 100
      main: '#F8D12F', // 200
      dark: '#F0C200', // 700
      '900': '#E8BC00',
      '800': '#EBBE00',
      '700': '#F0C200',
      '600': '#F7C700',
      '500': '#FACA00',
      '400': '#FACA00',
      '300': '#F7CD21',
      '200': '#F8D12F',
      '100': '#FADD62',
      '50': '#FFEEA7',
      contrastText: '#fff',
    },
    secondary: {
      light: '#04d583', // 100
      main: '#02c076', // 200
      dark: '#00955b', // 700
      '900': '#017447',
      '800': '#018954',
      '700': '#00955B',
      '600': '#00A565',
      '500': '#02AF6C',
      '400': '#02AD6B',
      '300': '#01B570',
      '200': '#02C076',
      '100': '#04D583',
      '50': '#06EB92',
      contrastText: '#fff',
    },
    // check
    error: {
      main: '#CF6679',
      // 'light': '#FEE2E2',
      dark: '#fe4335',
      // 'contrastText': '#fff',
    },
    // check
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#fff',
    },
    // check
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#fff',
    },
    // check
    success: {
      main: '#02c076',
      light: '#D1FAE5',
      dark: '#065F46',
      contrastText: '#fff',
    },
    grey: {
      '50': '#F9FAFB',
      '100': '#F3F4F6',
      '200': '#E5E7EB',
      '300': '#D1D5DB',
      '400': '#9CA3AF',
      '500': '#6B7280',
      '600': '#4B5563',
      '700': '#374151',
      '800': '#1F2937',
      '900': '#111827',
      A100: '#36363d',
      A200: '#19191c',
      A400: '#bdbdbd',

      A700: '#616161',
    },
    text: {
      primary: '#24242A', // grey 900
      secondary: '#6B7280', // grey 500
      disabled: '#797979', // grey 200
    },

    divider: '#bdbdbd', // A400
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      paper: '#24242A',
      default: '#151516',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  shape: {
    borderRadius: 8,
    rounded: '1000rem',
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48,
      },
      '@media (min-width:600px)': {
        minHeight: 64,
      },
    },
  },
  shadows: [
    'none',
    '0 1px 15px 0 rgba(0, 0, 0, 0.5)',
    '0 0.5px 0.5px 0 rgba(0, 0, 0, 0.14)',
    '0 1.5px 0.5px 0 rgba(0, 0, 0, 0.12)',
    '0 1.5px 1.5px 0 rgba(0, 0, 0, 0.12)',
    '0 0.5px 5px 0 rgba(0, 0, 0, 0.12)',
    '0 0.5px 9px 0 rgba(0, 0, 0, 0.12)',
    '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
    '0 1.5px 7px 0 rgba(0, 0, 0, 0.12)',
    '0 6px 8.5px 0 rgba(0, 0, 0, 0.14)',
    '0 3px 15px 0 rgba(0, 0, 0, 0.12)',
    '0 12px 19px 0 rgba(0, 0, 0, 0.14)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
  typography: {
    htmlFontSize: 10,
    fontFamily: 'IRANSans',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: '3.6rem',
      lineHeight: '3.6rem',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2.2rem',
      lineHeight: '2.2rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
      lineHeight: '2rem',
    },
    h4: {
      fontWeight: 400,
      fontSize: '2rem',
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.8rem',
      lineHeight: '1.8rem',
    },
    h6: {
      fontWeight: 400,
      fontSize: '1.6rem',
      lineHeight: '1.6rem',
    },
    subtitle1: { fontWeight: 400, fontSize: '1.4rem', lineHeight: '1.4rem' },
    subtitle2: { fontWeight: 400, fontSize: '1.2rem', lineHeight: '1.2rem' },
    body1: { fontWeight: 400, fontSize: '1.6rem', lineHeight: '1rem' },
    body2: { fontWeight: 400, fontSize: '1.3rem', lineHeight: '0.8rem' },
    button: { fontWeight: 400, fontSize: '1.4rem', lineHeight: '0.6rem' },
    caption: { fontWeight: 400, fontSize: '1.6rem', lineHeight: '0.6rem' },
    overline: { fontWeight: 400, fontSize: '1.6rem', lineHeight: '0.6rem' },
  },

  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

export default theme;
