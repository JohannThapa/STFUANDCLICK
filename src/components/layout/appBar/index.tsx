import React from 'react';
import {  useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import PeopleIcon from '@mui/icons-material/People';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { resetTeam } from '../../../store/auth/action';
import routes from '../../../routes';
import { Redux } from '../../../store/utils/@type';
import { selectTeam } from '../../../store/auth/selector';
import { connect } from 'react-redux';

interface StateProps {
  teamName: string
}

interface DispatchProps {
  resetTeam: typeof resetTeam
}

interface Props extends StateProps, DispatchProps {};

const Appbar = ({ teamName, resetTeam }: Props) => {
    const navigate = useNavigate()
  
    const handleResetClick = () => {
      resetTeam();
      navigate(routes.ROOT, { replace: true });
    }
    return (
      <AppBar position="static">
        <Toolbar sx={{justifyContent: "space-between"}}>
          <Typography variant="h6">STFU and CLICK!</Typography>
          {teamName && (
            <Button onClick={handleResetClick} color="inherit" startIcon={<PeopleIcon />}>
              Switch team
            </Button>
          )}
        </Toolbar>
      </AppBar>
    )
  }

  const mapStateToProps = (state: Redux) => ({
    teamName: selectTeam(state),
  })
  

  export default connect(mapStateToProps, { resetTeam })(Appbar)
