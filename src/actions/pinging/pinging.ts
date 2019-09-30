import { Observable } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';

export const PING = 'PING';
export const PONG = 'PONG';

interface PingI {
  type: typeof PING;
}

export const ping = (): PingI => ({
  type: PING,
});

interface PongI {
  type: typeof PONG;
}

export const pong = (): PongI => ({
  type: PONG,
});

export const pingingEpic: Epic<pingingActionTypes> = (action$):
Observable<pingingActionTypes> => action$.pipe(
  ofType(PING),
  delay(1000),
  mapTo(pong()),
);

export type pingingActionTypes = PingI | PongI;
