import { createTheme } from "@mui/material/styles";
import createTypography from "./createTypography";
import createPalette from "./createPalette";
import createShadow from "./createShadow";
import createComponents from "./createComponents";

const shadows = createShadow();
const typography = createTypography();
const palette = createPalette();
const components = createComponents(palette);

const theme = createTheme({
  components,
  palette,
  shape: {
    borderRadius: 8,
  },
  shadows,
  typography,
});

export default theme;

// const theme = createTheme({
//   typography: {
//     fontFamily:
//       '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
//     subtitle1: {
//       fontWeight: 700,
//     },
//     body1: {
//       fontSize: "1rem",
//     },
//     body2: {
//       fontSize: "14px",
//       letterSpacing: "-0.42px",
//     },
//   },
//   components: {
//     MuiButton: {
//       defaultProps: {
//         variant: "contained",
//         disableElevation: true,
//       },
//     },
//     MuiCardHeader: {
//       defaultProps: {
//         titleTypographyProps: {
//           variant: "h6",
//         },
//       },
//     },
//     MuiChip: {
//       defaultProps: {
//         variant: "outlined",
//       },
//       styleOverrides: {
//         root: ({ theme: t }) => ({
//           width: "100%",
//           borderRadius: 30,
//           background: t.palette.background.paper,
//           "&.MuiChip-clickable:hover": {
//             backgroundColor: "#a7ffeb",
//           },
//         }),
//         outlined: {
//           borderColor: "#bdbdbd",
//         },
//         outlinedPrimary: ({ theme: t }) => ({
//           background: "#a7ffeb",
//           color: t.palette.text.primary,
//         }),
//         sizeMedium: {
//           height: 48,
//         },
//         label: ({ theme: t }) => ({
//           ...t.typography.body2,
//         }),
//       },
//     },
//     MuiPaper: {
//       defaultProps: {
//         elevation: 0,
//       },
//     },
//     MuiLink: {
//       defaultProps: {
//         underline: "hover",
//       },
//     },
//     MuiSlider: {
//       styleOverrides: {
//         root: {
//           marginBottom: 0,
//           marginTop: 10,
//           height: 10,
//         },
//         thumb: ({ theme: t }) => ({
//           borderWidth: 2,
//           borderColor: t.palette.background.paper,
//           borderStyle: "solid",
//         }),
//         rail: {
//           backgroundColor: "#c0c0c0",
//           opacity: 1,
//         },
//         mark: {
//           backgroundColor: "#c0c0c0",
//         },
//         markLabel: ({ theme: t }) => ({
//           top: "auto",
//           bottom: "100%",
//           color: t.palette.text.secondary,
//           "@media(pointer: coarse)": {
//             top: "auto",
//           },
//         }),
//       },
//     },
//   },
//   palette: {
//     primary: {
//       main: "#50b1a9",
//     },
//     background: {
//       default: "#fafafa",
//     },
//   },
// });

// export default theme;
