import Box from "@mui/material/Box";
import CircularProgress, { CircularProgressProps } from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

const OverlayBox = styled(Box)(({ theme }) => ({
    background:  theme.palette.mode === 'light' ? '#3F51B5' : '#efefef',
    position: 'absolute',
    display: 'flex',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    color: theme.palette.mode === 'light' ? '#efefef' : '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center'
  }));
  
 export default function OverlayLoader(props: CircularProgressProps) {
    return (
      <OverlayBox>
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
            animationDuration: '550ms',
          }}
          {...props}
        />
      </OverlayBox>
    );
  }
  