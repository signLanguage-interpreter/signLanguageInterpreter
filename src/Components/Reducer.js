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
    authorization: null,
    logged: false
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "LOGIN":
            sessionStorage.setItem("authorization", JSON.stringify(action.payload.authorization));
            return __assign(__assign({}, state), { authorization: action.payload.authorization, logged: action.payload.logged });
        case "LOGOUT":
            sessionStorage.clear();
            return __assign(__assign({}, state), { authorization: null, logged: false });
        default:
            return state;
    }
};
exports["default"] = reducer;
