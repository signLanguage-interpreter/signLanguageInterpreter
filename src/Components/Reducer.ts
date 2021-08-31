interface state {
  jwt_token: string | null;
  logged: Boolean;
}

const initialState: state = {
  jwt_token: null,
  logged: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      sessionStorage.setItem(
        "jwt_token",
        JSON.stringify(action.payload.jwt_token)
      );
      return {
        ...state,
        jwt_token: action.payload.jwt_token,
        logged: action.payload.logged,
      };
    case "LOGOUT":
      sessionStorage.clear();
      return {
        ...state,
        jwt_token: null,
        logged: false,
      };
    default:
      return state;
  }
};

export default reducer;
