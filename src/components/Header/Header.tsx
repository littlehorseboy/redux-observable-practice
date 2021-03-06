import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { routes } from '../../router/Router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#24292E',
    color: '#FFFFFF',
  },
}));

export default function Header(): JSX.Element {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Typography>Header</Typography>
      <div>
        <Button color="inherit" component={Link} to="/">Home</Button>

        {routes[0].routes && routes[0].routes.map((route) => (
          <Button
            key={route.path}
            color="inherit"
            component={Link}
            to={route.path}
          >
            {route.breadcrumbName}
          </Button>
        ))}
      </div>
    </Container>
  );
}
