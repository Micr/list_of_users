import { FILTER_USERS, SUBMIT_USER } from '../actions';
const initialState = {
  users: [{
    "id": 1,
    "first_name": "Jaclyn",
    "last_name": "Flecknell",
    "email": "jflecknell0@free.fr",
    "gender": "Female",
    "ip_address": "111.90.85.118"
  }, {
    "id": 2,
    "first_name": "Garrott",
    "last_name": "Jarred",
    "email": "gjarred1@ibm.com",
    "gender": "Male",
    "ip_address": "188.4.75.168"
  }, {
    "id": 3,
    "first_name": "Gay",
    "last_name": "Phettiplace",
    "email": "gphettiplace2@nature.com",
    "gender": "Male",
    "ip_address": "125.40.101.1"
  }, {
    "id": 4,
    "first_name": "Jolie",
    "last_name": "Jirka",
    "email": "jjirka3@sbwire.com",
    "gender": "Female",
    "ip_address": "237.180.228.12"
  }, {
    "id": 5,
    "first_name": "Monro",
    "last_name": "Smithson",
    "email": "msmithson4@cpanel.net",
    "gender": "Male",
    "ip_address": "132.141.206.142"
  }, {
    "id": 6,
    "first_name": "Pat",
    "last_name": "Musgrave",
    "email": "pmusgrave5@technorati.com",
    "gender": "Male",
    "ip_address": "109.102.122.202"
  }, {
    "id": 7,
    "first_name": "Neil",
    "last_name": "Fudge",
    "email": "nfudge6@ocn.ne.jp",
    "gender": "Male",
    "ip_address": "95.30.202.59"
  }, {
    "id": 8,
    "first_name": "Tanney",
    "last_name": "Spore",
    "email": "tspore7@livejournal.com",
    "gender": "Male",
    "ip_address": "23.101.117.190"
  }, {
    "id": 9,
    "first_name": "Nicolina",
    "last_name": "Lemonby",
    "email": "nlemonby8@buzzfeed.com",
    "gender": "Female",
    "ip_address": "10.210.87.7"
  }, {
    "id": 10,
    "first_name": "Edithe",
    "last_name": "Pittaway",
    "email": "epittaway9@wiley.com",
    "gender": "Female",
    "ip_address": "152.118.57.29"
  }],
  search: '',
};

initialState.filteredUsers = initialState.users;

function filterUsers(users, text = '') {
  return users.filter(user => user.first_name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FILTER_USERS:
      return {
        ...state,
        filteredUsers: filterUsers(state.users, action.text),
        search: action.text,
      };
    case SUBMIT_USER:
      return {
        ...state,
        users: state.users.concat(action.user),
        filteredUsers: filterUsers(state.users.concat(action.user), state.search),
      }
    default:
      return state;
  }
}

export default reducer;
