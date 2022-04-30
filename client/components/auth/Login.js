import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export function Login({onChange, onSubmit}) {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: 'secondary.main'
                        }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                    <Box
                        component="form"
                        noValidate="noValidate"
                        onSubmit={onSubmit}
                        sx={{
                            mt: 1
                        }}>
                        <TextField
                            margin="normal"
                            required="required"
                            fullWidth="fullWidth"
                            id="userid"
                            label="사용자ID"
                            name="userid"
                            autoComplete="email"
                            onChange={onChange}
                            autoFocus="autoFocus"/>
                        <TextField
                            margin="normal"
                            required="required"
                            fullWidth="fullWidth"
                            name="password"
                            label="비밀번호"
                            type="password"
                            id="password"
                            onChange={onChange}
                            autoComplete="current-password"/>
                        <FormControlLabel
                            control={<Checkbox value = "remember" color = "primary" />}
                            label="로그인정보저장"/>
                        <Button
                            type="submit"
                            fullWidth="fullWidth"
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2
                            }}>
                            전송
                        </Button>
                        <Grid container="container">
                            <Grid item="item" xs="xs">
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item="item">
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright
                    sx={{
                        mt: 8,
                        mb: 4
                    }}/>
            </Container>
        </ThemeProvider>
    );
}
