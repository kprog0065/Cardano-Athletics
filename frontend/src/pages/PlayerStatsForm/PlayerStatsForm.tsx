import React, { FC, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline, TextField, Button, Typography, Box, Grid, Paper, CircularProgress } from '@mui/material';
import CustomizedProgressBars from '../../components/CircularProgress/CircularProgress';
import useInput from '../../hooks/input/use-input';
import { validateNumberRange } from '../../shared/utils/numberRange';
import api from '../../helper/api';
import { store } from '../../redux/store';

export const getuserId = () => {
  const state = store.getState();
  return state.auth.user?.id;
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    background: {
      default: '#191F2D',
      paper: '#191F2D',
    },
    secondary: {
      main: '#FFC107',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
});

const PlayerStatsForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    text: dribbling,
    shouldDisplayError: dribblingHasError,
    textChangeHandler: dribblingChangeHandler,
    inputBlurHandler: dribblingBlurHandler,
    clearHandler: dribblingClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: defending,
    shouldDisplayError: defendingHasError,
    textChangeHandler: defendingChangeHandler,
    inputBlurHandler: defendingBlurHandler,
    clearHandler: defendingClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: physical,
    shouldDisplayError: physicalHasError,
    textChangeHandler: physicalChangeHandler,
    inputBlurHandler: physicalBlurHandler,
    clearHandler: physicalClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: sprintSpeed,

    textChangeHandler: sprintSpeedChangeHandler,
    inputBlurHandler: sprintSpeedBlurHandler,
    clearHandler: sprintSpeedClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: acceleration,
    textChangeHandler: accelerationChangeHandler,
    inputBlurHandler: accelerationBlurHandler,
    clearHandler: accelerationClearHandler,
  } = useInput(validateNumberRange(0, 100));


  const {
    text: finishing,
    shouldDisplayError: finishingHasError,
    textChangeHandler: finishingChangeHandler,
    inputBlurHandler: finishingBlurHandler,
    clearHandler: finishingClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: attPosition,
    shouldDisplayError: attPositionHasError,
    textChangeHandler: attPositionChangeHandler,
    inputBlurHandler: attPositionBlurHandler,
    clearHandler: attPositionClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: shotPower,
    shouldDisplayError: shotPowerHasError,
    textChangeHandler: shotPowerChangeHandler,
    inputBlurHandler: shotPowerBlurHandler,
    clearHandler: shotPowerClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: longShots,
    shouldDisplayError: longShotsHasError,
    textChangeHandler: longShotsChangeHandler,
    inputBlurHandler: longShotsBlurHandler,
    clearHandler: longShotsClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: penalties,
    shouldDisplayError: penaltiesHasError,
    textChangeHandler: penaltiesChangeHandler,
    inputBlurHandler: penaltiesBlurHandler,
    clearHandler: penaltiesClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: volleys,
    shouldDisplayError: volleysHasError,
    textChangeHandler: volleysChangeHandler,
    inputBlurHandler: volleysBlurHandler,
    clearHandler: volleysClearHandler,
  } = useInput(validateNumberRange(0, 100));


  const {
    text: vision,
    shouldDisplayError: visionHasError,
    textChangeHandler: visionChangeHandler,
    inputBlurHandler: visionBlurHandler,
    clearHandler: visionClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: crossing,
    shouldDisplayError: crossingHasError,
    textChangeHandler: crossingChangeHandler,
    inputBlurHandler: crossingBlurHandler,
    clearHandler: crossingClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: fkAcc,
    shouldDisplayError: fkAccHasError,
    textChangeHandler: fkAccChangeHandler,
    inputBlurHandler: fkAccBlurHandler,
    clearHandler: fkAccClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: longPass,
    shouldDisplayError: longPassHasError,
    textChangeHandler: longPassChangeHandler,
    inputBlurHandler: longPassBlurHandler,
    clearHandler: longPassClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: shortPass,
    shouldDisplayError: shortPassHasError,
    textChangeHandler: shortPassChangeHandler,
    inputBlurHandler: shortPassBlurHandler,
    clearHandler: shortPassClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: curve,
    shouldDisplayError: curveHasError,
    textChangeHandler: curveChangeHandler,
    inputBlurHandler: curveBlurHandler,
    clearHandler: curveClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: agility,
    shouldDisplayError: agilityHasError,
    textChangeHandler: agilityChangeHandler,
    inputBlurHandler: agilityBlurHandler,
    clearHandler: agilityClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: balance,
    shouldDisplayError: balanceHasError,
    textChangeHandler: balanceChangeHandler,
    inputBlurHandler: balanceBlurHandler,
    clearHandler: balanceClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: reactions,
    shouldDisplayError: reactionsHasError,
    textChangeHandler: reactionsChangeHandler,
    inputBlurHandler: reactionsBlurHandler,
    clearHandler: reactionsClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: composure,
    shouldDisplayError: composureHasError,
    textChangeHandler: composureChangeHandler,
    inputBlurHandler: composureBlurHandler,
    clearHandler: composureClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: ballControl,
    shouldDisplayError: ballControlHasError,
    textChangeHandler: ballControlChangeHandler,
    inputBlurHandler: ballControlBlurHandler,
    clearHandler: ballControlClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: interceptions,
    shouldDisplayError: interceptionsHasError,
    textChangeHandler: interceptionsChangeHandler,
    inputBlurHandler: interceptionsBlurHandler,
    clearHandler: interceptionsClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: headingAcc,
    shouldDisplayError: headingAccHasError,
    textChangeHandler: headingAccChangeHandler,
    inputBlurHandler: headingAccBlurHandler,
    clearHandler: headingAccClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: defAware,
    shouldDisplayError: defAwareHasError,
    textChangeHandler: defAwareChangeHandler,
    inputBlurHandler: defAwareBlurHandler,
    clearHandler: defAwareClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: standTackle,
    shouldDisplayError: standTackleHasError,
    textChangeHandler: standTackleChangeHandler,
    inputBlurHandler: standTackleBlurHandler,
    clearHandler: standTackleClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: slideTackle,
    shouldDisplayError: slideTackleHasError,
    textChangeHandler: slideTackleChangeHandler,
    inputBlurHandler: slideTackleBlurHandler,
    clearHandler: slideTackleClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: jumping,
    shouldDisplayError: jumpingHasError,
    textChangeHandler: jumpingChangeHandler,
    inputBlurHandler: jumpingBlurHandler,
    clearHandler: jumpingClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: stamina,
    shouldDisplayError: staminaHasError,
    textChangeHandler: staminaChangeHandler,
    inputBlurHandler: staminaBlurHandler,
    clearHandler: staminaClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: strength,
    shouldDisplayError: strengthHasError,
    textChangeHandler: strengthChangeHandler,
    inputBlurHandler: strengthBlurHandler,
    clearHandler: strengthClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: aggression,
    shouldDisplayError: aggressionHasError,
    textChangeHandler: aggressionChangeHandler,
    inputBlurHandler: aggressionBlurHandler,
    clearHandler: aggressionClearHandler,
  } = useInput(validateNumberRange(0, 100));



  const clearForm = () => {
    dribblingClearHandler();
    defendingClearHandler();
    physicalClearHandler();
    // sprintSpeedClearHandler();
    // accelerationClearHandler();
    finishingClearHandler();
    attPositionClearHandler();
    shotPowerClearHandler();
    longShotsClearHandler();
    volleysClearHandler();
    visionClearHandler();
    crossingClearHandler();
    fkAccClearHandler();
    longPassClearHandler();
    shortPassClearHandler();
    curveClearHandler();
    agilityClearHandler();
    balanceClearHandler();
    reactionsClearHandler();
    composureClearHandler();
    ballControlClearHandler();
    interceptionsClearHandler();
    headingAccClearHandler();
    defAwareClearHandler();
    standTackleClearHandler();
    slideTackleClearHandler();
    jumpingClearHandler();
    staminaClearHandler();
    strengthClearHandler();
    aggressionClearHandler();

  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      dribblingHasError ||
      defendingHasError ||
      physicalHasError ||
      finishingHasError ||
      attPositionHasError ||
      longShotsHasError ||
      shotPowerHasError ||
      penaltiesHasError ||
      volleysHasError ||
      visionHasError ||
      fkAccHasError ||
      longPassHasError ||
      shortPassHasError ||
      curveHasError ||
      agilityHasError ||
      balanceHasError ||
      reactionsHasError ||
      composureHasError ||
      ballControlHasError
    )
      return true;

    if (
      dribbling.trim() === '' ||
      defending.trim() === '' ||
      physical.trim() === '' ||
      sprintSpeed.trim() === '' ||
      acceleration.trim() === '' ||
      finishing.trim() === '' ||
      attPosition.trim() === '' ||
      longShots.trim() === '' ||
      shotPower.trim() === '' ||
      penalties.trim() === '' ||
      volleys.trim() === '' ||
      vision.trim() === '' ||
      crossing.trim() === '' ||
      fkAcc.trim() === '' ||
      longPass.trim() === '' ||
      shortPass.trim() === '' ||
      curve.trim() === '' ||
      agility.trim() === '' ||
      balance.trim() === '' ||
      reactions.trim() === '' ||
      composure.trim() === '' ||
      ballControl.trim() === '' ||
      dribbling.trim() === '' ||
      interceptions.trim() === '' ||
      headingAcc.trim() === '' ||
      defAware.trim() === '' ||
      standTackle.trim() === '' ||
      slideTackle.trim() === '' ||
      jumping.trim() === '' ||
      stamina.trim() === '' ||
      strength.trim() === '' ||
      aggression.trim() === ''
    )
      try {
        setLoading(true)
        const userId = getuserId()
        const payload = {
          userId: userId,
          pace: {
            sprintSpeed,
            acceleration
          },
          shooting: {
            finishing,
            attPosition,
            shotPower,
            longShots,
            penalties,
            volleys
          },
          passing: {
            vision,
            crossing,
            fkAcc,
            longPass,
            shortPass,
            curve
          },
          dribbling: {
            agility,
            balance,
            reactions,
            composure,
            ballControl,
            dribbling
          },
          defending: {
            interceptions,
            headingAcc,
            defAware,
            standTackle,
            slideTackle
          },
          physical: {
            jumping,
            stamina,
            strength,
            aggression
          }
        }
      
        const response = await api.post('/cardano-athletics/football/player', payload);
        console.log('Player added successfully:', response);
      } catch (error) {
        console.error('Error adding player:', error);
      } finally {
        setLoading(false)
        // navigate('/home');
        clearForm();
      }
  };
  return (

    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />

        <Box sx={{ mt: 20, mb: 5 }}>

          <Paper elevation={4} sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
              Player Information
            </Typography>

            <form onSubmit={handleSubmit}>

              <Typography className="sub-form-main" variant="h5" gutterBottom>
                Pace Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={sprintSpeed}
                    onChange={sprintSpeedChangeHandler}
                    onBlur={sprintSpeedBlurHandler}
                    // error={sprintSpeedHasError}
                    margin="normal"
                    required
                    fullWidth
                    id="sprintSpeed"
                    label="Sprint Speed"
                    name="sprintSpeed"
                    autoComplete="sprintSpeed"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={acceleration}
                    onChange={accelerationChangeHandler}
                    onBlur={accelerationBlurHandler}
                    // error={accelerationHasError}
                    margin="normal"
                    required
                    fullWidth
                    id="acceleration"
                    label="acceleration"
                    name="acceleration"
                    autoComplete="acceleration"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
              </Grid>
              <Typography className="sub-form-main" variant="h5" gutterBottom>
                Shooting Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={finishing}
                    onChange={finishingChangeHandler}
                    onBlur={finishingBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="finishing"
                    label="Finishing"
                    name="finishing"
                    autoComplete="finishing"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={attPosition}
                    onChange={attPositionChangeHandler}
                    onBlur={attPositionBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="attPosition"
                    label="Att. Position"
                    name="attPosition"
                    autoComplete="attPosition"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={shotPower}
                    onChange={shotPowerChangeHandler}
                    onBlur={shotPowerBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="shotPower"
                    label="Shot Power"
                    name="shotPower"
                    autoComplete="shotPower"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={longShots}
                    onChange={longShotsChangeHandler}
                    onBlur={longShotsBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="longShots"
                    label="Long Shots"
                    name="longShots"
                    autoComplete="longShots"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={penalties}
                    onChange={penaltiesChangeHandler}
                    onBlur={penaltiesBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="penalties"
                    label="Penalties"
                    name="penalties"
                    autoComplete="penalties"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                  <Grid item xs={12} md={6} sm={6}>
                    <TextField
                      value={volleys}
                      onChange={volleysChangeHandler}
                      onBlur={volleysBlurHandler}
                      margin="normal"
                      required
                      fullWidth
                      id="volleys"
                      label="volleys"
                      name="volleys"
                      autoComplete="volleys"
                      InputLabelProps={{
                        style: { color: '#fff' },
                      }}
                      InputProps={{
                        style: { color: '#fff' },
                      }}
                    />
                  </Grid>
                </Grid>

                <Typography className="sub-form-main" variant="h5" gutterBottom>
                  Passing
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} sm={6}>
                    <TextField
                      value={vision}
                      onChange={visionChangeHandler}
                      onBlur={visionBlurHandler}
                      margin="normal"
                      required
                      fullWidth
                      id="vision"
                      label="Vision"
                      name="vision"
                      autoComplete="vision"
                      InputLabelProps={{
                        style: { color: '#fff' },
                      }}
                      InputProps={{
                        style: { color: '#fff' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sm={6}>
                    <TextField
                      value={crossing}
                      onChange={crossingChangeHandler}
                      onBlur={crossingBlurHandler}
                      margin="normal"
                      required
                      fullWidth
                      id="crossing"
                      label="Crossing"
                      name="crossing"
                      autoComplete="crossing"
                      InputLabelProps={{
                        style: { color: '#fff' },
                      }}
                      InputProps={{
                        style: { color: '#fff' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sm={6}>
                    <TextField
                      value={fkAcc}
                      onChange={fkAccChangeHandler}
                      onBlur={fkAccBlurHandler}
                      margin="normal"
                      required
                      fullWidth
                      id="fkAcc"
                      label="Fk Acc"
                      name="fkAcc"
                      autoComplete="fkAcc"
                      InputLabelProps={{
                        style: { color: '#fff' },
                      }}
                      InputProps={{
                        style: { color: '#fff' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sm={6}>
                    <TextField
                      value={longPass}
                      onChange={longPassChangeHandler}
                      onBlur={longPassBlurHandler}
                      margin="normal"
                      required
                      fullWidth
                      id="longPass"
                      label="Long Pass"
                      name="longPass"
                      autoComplete="longPass"
                      InputLabelProps={{
                        style: { color: '#fff' },
                      }}
                      InputProps={{
                        style: { color: '#fff' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sm={6}>
                    <TextField
                      value={shortPass}
                      onChange={shortPassChangeHandler}
                      onBlur={shortPassBlurHandler}
                      margin="normal"
                      required
                      fullWidth
                      id="shortPass"
                      label="Short Pass"
                      name="shortPass"
                      autoComplete="shortPass"
                      InputLabelProps={{
                        style: { color: '#fff' },
                      }}
                      InputProps={{
                        style: { color: '#fff' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sm={6}>
                    <TextField
                      value={curve}
                      onChange={curveChangeHandler}
                      onBlur={curveBlurHandler}
                      margin="normal"
                      required
                      fullWidth
                      id="curve"
                      label="curve"
                      name="curve"
                      autoComplete="curve"
                      InputLabelProps={{
                        style: { color: '#fff' },
                      }}
                      InputProps={{
                        style: { color: '#fff' },
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Typography className="sub-form-main" variant="h5" gutterBottom>
                Dribbling
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={agility}
                    onChange={agilityChangeHandler}
                    onBlur={agilityBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="agility"
                    label="Agility"
                    name="agility"
                    autoComplete="agility"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={balance}
                    onChange={balanceChangeHandler}
                    onBlur={balanceBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="balance"
                    label="Balance"
                    name="balance"
                    autoComplete="balance"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={reactions}
                    onChange={reactionsChangeHandler}
                    onBlur={reactionsBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="reactions"
                    label="Reactions"
                    name="reactions"
                    autoComplete="reactions"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={composure}
                    onChange={composureChangeHandler}
                    onBlur={composureBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="composure"
                    label="Composure"
                    name="composure"
                    autoComplete="composure"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={ballControl}
                    onChange={ballControlChangeHandler}
                    onBlur={ballControlBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="ballControl"
                    label="Ball Control"
                    name="ballControl"
                    autoComplete="ballControl"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={dribbling}
                    onChange={dribblingChangeHandler}
                    onBlur={dribblingBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="dribbling"
                    label="Dribbling"
                    name="dribbling"
                    autoComplete="dribbling"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
              </Grid>

              <Typography className="sub-form-main" variant="h5" gutterBottom>
                Defending
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={interceptions}
                    onChange={interceptionsChangeHandler}
                    onBlur={interceptionsBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="interceptions"
                    label="Interceptions"
                    name="interceptions"
                    autoComplete="interceptions"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={headingAcc}
                    onChange={headingAccChangeHandler}
                    onBlur={headingAccBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="headingAcc"
                    label="Heading Acc."
                    name="headingAcc"
                    autoComplete="headingAcc"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={defAware}
                    onChange={defAwareChangeHandler}
                    onBlur={defAwareBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="defAware"
                    label="Def. Aware"
                    name="defAware"
                    autoComplete="defAware"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={standTackle}
                    onChange={standTackleChangeHandler}
                    onBlur={standTackleBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="standTackle"
                    label="Stand Tackle"
                    name="standTackle"
                    autoComplete="standTackle"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={slideTackle}
                    onChange={slideTackleChangeHandler}
                    onBlur={slideTackleBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="slideTackle"
                    label="Slide Tackle"
                    name="slideTackle"
                    autoComplete="slideTackle"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
              </Grid>
              <Typography className="sub-form-main" variant="h5" gutterBottom>
                Physical
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={jumping}
                    onChange={jumpingChangeHandler}
                    onBlur={jumpingBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="jumping"
                    label="Jumping"
                    name="jumping"
                    autoComplete="jumping"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={stamina}
                    onChange={staminaChangeHandler}
                    onBlur={staminaBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="stamina"
                    label="Stamina"
                    name="stamina"
                    autoComplete="stamina"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={strength}
                    onChange={strengthChangeHandler}
                    onBlur={strengthBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="strength"
                    label="Strength"
                    name="strength"
                    autoComplete="strength"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={aggression}
                    onChange={aggressionChangeHandler}
                    onBlur={aggressionBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="aggression"
                    label="Aggression"
                    name="aggression"
                    autoComplete="aggression"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, width: 100 }}
                  disabled={loading}
                >
                  {loading && <Box
                    sx={{
                      width: 100,
                      position: 'absolute', // Full viewport coverage
                      top: 0,
                      left: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
                      zIndex: 1300, // Ensure it's above other content
                    }}
                  ><CircularProgress /> </Box>}Submit
                </Button>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default PlayerStatsForm;
