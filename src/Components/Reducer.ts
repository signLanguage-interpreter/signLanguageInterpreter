interface state {
  authorization: string | null;
  logged: Boolean;
}

const initialState: state = {
  authorization: null,
  logged: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      sessionStorage.setItem("authorization", action.payload.authorization);
      return {
        ...state,
        authorization: action.payload.authorization,
        logged: action.payload.logged,
      };
    case "LOGOUT":
      sessionStorage.clear();
      return {
        ...state,
        authorization: null,
        logged: false,
      };
    default:
      return state;
  }
};

export default reducer;
