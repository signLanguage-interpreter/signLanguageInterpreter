interface User {
  username: string;
  password: string;
  email: string;
  userNickName: string;
  cellphone: string;
  birth: string;
  gender: string;
}

interface state {
  user: User;
  logged: Boolean;
}

const initialState: state = {
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

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload.user,
        logged: action.payload.logged,
      };
    case "LOGOUT":
      sessionStorage.clear();
      return {
        ...state,
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
    default:
      return state;
  }
};

export default reducer;
