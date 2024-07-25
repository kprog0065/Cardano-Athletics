import { FC, FormEvent, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container, { ContainerProps } from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CssBaseline from '@mui/material/CssBaseline';
// import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/input/use-input';
import { validateEmail } from '../../shared/utils/validation/email';
import { validatePasswordLength } from '../../shared/utils/validation/length';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/hooks';
import { login, reset } from '../../redux/features/auth/authSlice';
import CustomizedProgressBars from '../../components/CircularProgress/CircularProgress';

export interface LoginUser {
  email: string;
  password: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#FFC107',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
});

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}

    </Typography>
  );
}

const SignIn: React.FC = () => {

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

  const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
  };

  const dispatch = useAppDispatch();

  const { isLoading, isSuccess, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      clearForm();
    }
  }, [isSuccess, dispatch]);

  useEffect(() => {
    if (!isAuthenticated) return;
    navigate('/');
  }, [isAuthenticated]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailHasError || passwordHasError) return;

    if (email.length === 0 || password.length === 0) return;

    const loginUser: LoginUser = { email, password };

    dispatch(login(loginUser));
  };

  if (isLoading)
    return <CustomizedProgressBars  />;
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <form onSubmit={onSubmitHandler}>
          <Grid container spacing={2} sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} display='flex' alignItems='center' justifyContent='center'>
              <Paper elevation={4} sx={{ p: 4, borderRadius: 2, width: '70%' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography component="h1" variant="h4" align="center">
                      Sign In
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={emailChangeHandler}
                      onBlur={emailBlurHandler}
                      error={emailHasError}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={passwordChangeHandler}
                      onBlur={passwordBlurHandler}
                      error={passwordHasError}
                      helperText={
                        passwordHasError ? 'Minimum 6 characters required' : ''
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label={<Link>
                        Remember me
                      </Link>}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      disabled={
                        !validatePasswordLength(password) || !validateEmail(email)
                      }
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Link href="/404" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <RouteLink to="/signup" >
                      <Link variant="body2">
                        Don't have an account? Sign Up
                      </Link>
                    </RouteLink>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

          </Grid>
        </form>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;