import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeTypes } from '../../reducers/configureStore';
import { fetchUser } from '../../actions/fetchGithubUser/fetchGithubUser';

export default function FetchGithubUser(): JSX.Element {
  const isPinging = useSelector((state: storeTypes) => state.pingingReducer.isPinging);

  const dispatch = useDispatch();

  return (
    <>
      <div>{`${isPinging}`}</div>

      <button
        type="button"
        onClick={(): void => {
          dispatch(fetchUser('littlehorseboy'));
        }}
      >
        Start PING
      </button>
    </>
  );
}
