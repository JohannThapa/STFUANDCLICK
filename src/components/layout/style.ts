import { styled } from "@mui/material/styles";

const Wrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#efefef' : '#3F51B5',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}));

const Content = styled('div')(({ theme }) => ({
    position: 'absolute',
    margin: '0 auto',
    width: '90%',
    maxWidth: '900px',
    top: 'calc(56px + 10px)',
    bottom: 2,
    left: '50%',
    transform: 'translate(-50 %, 0)',
    background: '#fff',
    padding: '20px',
    boxShadow: '2px 2px 5px 0 rgba(0, 0, 0, 0.2)'
  }));

  export { Wrapper, Content};