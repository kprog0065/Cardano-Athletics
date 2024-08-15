import { FC, FormEvent, useEffect } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CustomizedProgressBars from '../../components/CircularProgress/CircularProgress';
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/input/use-input';
import useCheckbox from '../../hooks/checkbox/use-checkbox';
import { validateEmail } from '../../shared/utils/validation/email';
import { validatePasswordLength } from '../../shared/utils/validation/length';
import { validateNameLength } from '../../shared/utils/validation/length';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/hooks';
import { register, reset } from '../../redux/features/auth/authSlice';
import { NewUser } from '../../redux/models/NewUser';

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#FFC107",
    },
  },
  typography: {
    fontFamily: "Open Sans",
  },
});

function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {"Copyright © "}
    </Typography>
  );
}

const SignUp: React.FC = () => {
  const {
    text: firstName,
    shouldDisplayError: firstNameHasError,
    textChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    clearHandler: firstNameClearHandler,
  } = useInput(validateNameLength);

  const {
    text: lastName,
    shouldDisplayError: lastNameHasError,
    textChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    clearHandler: lastNameClearHandler,
  } = useInput(validateNameLength);

  const {
    text: fatherName,
    shouldDisplayError: fatherNameHasError,
    textChangeHandler: fatherNameChangeHandler,
    inputBlurHandler: fatherNameBlurHandler,
    clearHandler: fatherNameClearHandler,
  } = useInput(validateNameLength);
  const {
    text: country,
    shouldDisplayError: countryHasError,
    textChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    clearHandler: countryClearHandler,
  } = useInput(validateNameLength);
  const {
    text: dob,
    shouldDisplayError: dobHasError,
    textChangeHandler: dobChangeHandler,
    inputBlurHandler: dobBlurHandler,
    clearHandler: dobClearHandler,
  } = useInput(validateNameLength);
  const {
    text: email,
    shouldDisplayError: emailHasError,
    textChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    clearHandler: emailClearHandler,
  } = useInput(validateEmail);

  const {
    text: password,
    shouldDisplayError: passwordHasError,
    textChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    clearHandler: passwordClearHandler,
  } = useInput(validatePasswordLength);

  const {
    checked,
    shouldDisplayError,
    checkboxChangeHandler,
    clearHandler,
  } = useCheckbox((value) => value === true);
  // const {
  //   text: confirmPassword,
  //   shouldDisplayError: confirmPasswordHasError,
  //   textChangeHandler: confirmPasswordChangeHandler,
  //   inputBlurHandler: confirmPasswordBlurHandler,
  //   clearHandler: confirmPasswordClearHandler,
  // } = useInput(validatePasswordLength);

  const clearForm = () => {
    firstNameClearHandler();
    lastNameClearHandler();
    fatherNameClearHandler();
    emailClearHandler();
    countryClearHandler();
    dobClearHandler();
    passwordClearHandler();
    clearHandler();
    // confirmPasswordClearHandler();
  };


  const dispatch = useAppDispatch();

  const { isLoading, isSuccess } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      clearForm();
      navigate('/signin');
    }
  }, [isSuccess, dispatch]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (password !== confirmPassword) return;

    if (
      firstNameHasError ||
      lastNameHasError ||
      fatherNameHasError ||
      countryHasError ||
      dobHasError ||
      emailHasError ||
      passwordHasError ||
      shouldDisplayError
      // confirmPasswordHasError
    )
      return;

    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      country.length === 0 ||
      fatherName.length === 0 ||
      dob.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      !checked
      // confirmPassword.length === 0
    )
      return;

    const newUser: NewUser = {
      firstName,
      lastName,
      fatherName,
      country,
      dob,
      email,
      password,
    };

    dispatch(register(newUser));
  };

  if (isLoading)
    return <CustomizedProgressBars />;

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <form onSubmit={onSubmitHandler}>

          <Grid
            container
            spacing={2}
            sx={{ minHeight: "100vh", marginTop: "25px" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <Paper elevation={4} sx={{ p: 4, borderRadius: 2, width: "70%" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography component='h1' variant='h4' align='center'>
                      Sign Up
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={firstName}
                      onChange={firstNameChangeHandler}
                      onBlur={firstNameBlurHandler}
                      error={firstNameHasError}
                      // helperText={nameHasError ? 'Enter your name' : ''}
                      margin='normal'
                      required
                      fullWidth
                      id='firstName'
                      label='First Name'
                      name='firstName'
                      autoComplete='given-name'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={lastName}
                      onChange={lastNameChangeHandler}
                      onBlur={lastNameBlurHandler}
                      error={lastNameHasError}
                      margin='normal'
                      required
                      fullWidth
                      id='lastName'
                      label='Last Name'
                      name='lastName'
                      autoComplete='family-name'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={fatherName}
                      onChange={fatherNameChangeHandler}
                      onBlur={fatherNameBlurHandler}
                      error={fatherNameHasError}
                      margin='normal'
                      required
                      fullWidth
                      id='fathersName'
                      label="Father's Name"
                      name='fathersName'
                      autoComplete='given-name'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={email}
                      onChange={emailChangeHandler}
                      onBlur={emailBlurHandler}
                      error={emailHasError}
                      margin='normal'
                      required
                      fullWidth
                      id='email'
                      label='Email Address'
                      name='email'
                      autoComplete='email'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={password}
                      onChange={passwordChangeHandler}
                      onBlur={passwordBlurHandler}
                      error={passwordHasError}
                      margin='normal'
                      required
                      fullWidth
                      id='password'
                      label='Password'
                      name='password'
                      type='password'
                      autoComplete='new-password'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={country}
                      onChange={countryChangeHandler}
                      onBlur={countryBlurHandler}
                      error={countryHasError}
                      margin='normal'
                      required
                      fullWidth
                      id='country'
                      label='Country'
                      name='country'
                      autoComplete='country'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={dob}
                      onChange={dobChangeHandler}
                      onBlur={dobBlurHandler}
                      error={dobHasError}
                      margin='normal'
                      required
                      fullWidth
                      id='dateOfBirth'
                      label='Date of Birth'
                      name='dateOfBirth'
                      type='date'

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value='agree' color='primary' checked={checked} onChange={checkboxChangeHandler} required />}
                      label={<Link>I agree to the terms and conditions</Link>
                      } />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type='submit'
                      fullWidth
                      variant='contained'
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <RouteLink to='/signin'>
                      <Link variant='body2'>
                        Already have an account? Log In
                      </Link>
                    </RouteLink>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  backgroundImage:
                    "url(https://source.unsplash.com/random/800x600)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              ></Box>
            </Grid>
          </Grid>
        </form>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container >
    </ThemeProvider >
  );
};

export default SignUp;
