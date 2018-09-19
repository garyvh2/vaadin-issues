import { popState } from '../utils/router-helpers';
import { PUSH_STATE, REPLACE_STATE, GO, GO_BACK, GO_FORWARD } from './routes/types';

// eslint-disable-next-line consistent-return
export const routerMiddleware = history => () => next => (action) => {
  switch (action.type) {
    case PUSH_STATE:
      history.push(action.data);
      popState();
      break;
    case REPLACE_STATE:
      history.replace(action.data);
      popState();
      break;
    case GO:
      history.go(action.data);
      break;
    case GO_BACK:
      history.goBack();
      break;
    case GO_FORWARD:
      history.goForward();
      break;
    default:
      return next(action);
  }
};
