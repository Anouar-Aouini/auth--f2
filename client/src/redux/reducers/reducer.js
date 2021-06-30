const initialState = {
    users: [],
    errors: [],
    authenticated: false,
    load: false,
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "LOAD":
            return { ...state, load: true };
        case "ADD_USER":
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                users: payload.user,
                authenticated: true,
                load: false,
            };
        case "LOGIN":
            localStorage.setItem("token", payload.token);
            return { ...state, authenticated: true, users: payload.user };
        case "CURRENT_USER":
            return { ...state, users: payload, authenticated: true };
        case "FAILED_TO_ADD":
            return {
                ...state,
                errors: payload,
                load: false,
            };

        case "LOGOUT":
            localStorage.removeItem("token");
            return { ...state, users: {}, authenticated: false };
        default:
            return state;
    }
};
