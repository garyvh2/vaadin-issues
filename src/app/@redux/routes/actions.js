import { parseQuery } from '../../utils/url-helpers';

import { PUSH_STATE, REPLACE_STATE, GO, GO_BACK, GO_FORWARD, CHANGE_LOCATION, LAST_LOCATION, LOGIN_REQUEST } from './types';

export const pushState = href => ({ type: PUSH_STATE, data: href });

export const replaceState = href => ({ type: REPLACE_STATE, data: href });

export const go = index => ({ type: GO, data: index });

export const goBack = () => ({ type: GO_BACK });

export const goForward = () => ({ type: GO_FORWARD });

export const saveLastLocation = url => ({ type: LAST_LOCATION, data: url });

export const requestLogin = data => ({ type: LOGIN_REQUEST, data });

export const changeLocation = ({
  pathname, search, hash,
}) => ({
  type: CHANGE_LOCATION,
  data: {
    pathname,
    search,
    queries: parseQuery(search),
    hash,
  },
});
