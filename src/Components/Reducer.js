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
    jwt_token: null,
    logged: false
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "LOGIN":
            sessionStorage.setItem("jwt_token", JSON.stringify(action.payload.jwt_token));
            return __assign(__assign({}, state), { jwt_token: action.payload.jwt_token, logged: action.payload.logged });
        case "LOGOUT":
            sessionStorage.clear();
            return __assign(__assign({}, state), { jwt_token: null, logged: false });
        default:
            return state;
    }
};
exports["default"] = reducer;
