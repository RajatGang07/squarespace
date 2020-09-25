import _get from 'lodash/get';

export const getUserToken = state => _get(state, 'credential.userToken', {}); 

export const getSignOutValue = state => _get(state, 'credential.isSignout', {});
