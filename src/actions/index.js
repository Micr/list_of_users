export const FILTER_USERS = 'FILTER_USERS'

export function filterUsers(text) {
  return { type: FILTER_USERS, text }
}
