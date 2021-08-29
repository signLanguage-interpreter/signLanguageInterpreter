export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const initialState = {
  user: {
    username: "",
    password: "",
    email: "",
    userNickName: "",
    cellphone: "",
    birth: "",
    gender: "",
  },
  logged: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: true,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
};

export default reducer;
