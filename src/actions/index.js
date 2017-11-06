export const FILTER_USERS = 'FILTER_USERS';
export const SUBMIT_USER = 'SUBMIT_USER';

export function filterUsers(text) {
  return { type: FILTER_USERS, text }
}

export function submitUser(user) {
  return { type: SUBMIT_USER, user }
}
