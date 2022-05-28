import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  export interface TypographyVariants {
    Title: React.CSSProperties;
    Subtitle: React.CSSProperties;
    Read: React.CSSProperties;
    Caption: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  export interface TypographyVariantsOptions {
    Title?: React.CSSProperties;
    Subtitle?: React.CSSProperties;
    Read?: React.CSSProperties;
    Caption?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    Title: true;
    Subtitle: true;
    Read: true;
    Caption: true;
  }
}
