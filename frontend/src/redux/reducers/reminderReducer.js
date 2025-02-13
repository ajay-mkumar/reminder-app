const initialState = {
    loading: false,
    reminders: [],
    error: null
};

export const reminderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_REMINDER_REQUEST":
            return { ...state, loading: true };
        case "GET_REMINDER_SUCCESS":
            return { loading: false, reminders: action.payload, error: null };
        case "Get_REMINDER_FAILURE":
            return { loading: false, reminders: null, error: action.payload };
        case "POST_REMINDER_REQUEST":
            return { ...state, loading: true };
        case "POST_REMINDER_SUCCESS":
            return {
                loading: false, reminders: [...state.reminders
                    , action.payload], error: null
            };
        case "POST_REMINDER_FAILURE":
            return { loading: false, reminders: state.reminders, error: action.payload };
        case "POST_DELETE_REQUEST":
            return { ...state, loading: true };
        case "POST_DELETE_SUCCESS":
            return { loading: false, reminders: state.reminders.filter(reminder => reminder.id !== action.payload), error: null };
        case "POST_DELETE_FAILURE":
            return { loading: false, reminder: state.reminders, error: action.payload };
        default:
            return state;
    }
}