"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var initialState = {
    user: {
        username: "",
        password: "",
        email: "",
        userNickName: "",
        cellphone: "",
        birth: "",
        gender: ""
    },
    logged: false
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "LOGIN":
            sessionStorage.setItem("user", JSON.stringify(action.payload));
            return __assign(__assign({}, state), { user: action.payload.user, logged: action.payload.logged });
        case "LOGOUT":
            sessionStorage.clear();
            return __assign(__assign({}, state), { user: {
                    username: "",
                    password: "",
                    email: "",
                    userNickName: "",
                    cellphone: "",
                    birth: "",
                    gender: ""
                }, logged: false });
        default:
            return state;
    }
};
exports["default"] = reducer;
