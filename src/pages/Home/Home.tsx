import React from 'react';
import { RouteComponentPropsI, RouteWithSubRoutes } from '../../router/Router';

export default function Home(props: RouteComponentPropsI): JSX.Element {
  const { routes } = props;

  return (
    <>
      {routes && routes.map((route): JSX.Element => (
        <React.Fragment key={route.path}>
          <RouteWithSubRoutes route={route} />
        </React.Fragment>
      ))}
    </>
  );
}
