export const getRemminder = () => async (dispatch) => {
    dispatch({ type: "GET_REMINDER_REQUEST" });

    try {
        const response = await fetch("http://localhost:8000/reminder/", {
            method: "GET",
            credentials: 'include'
        });
        
        const data = await response.json();
        console.log('is arrya', Array.isArray(data))

        if (response.ok) {
            dispatch({ type: "GET_REMINDER_SUCCESS", payload: data });
        } else {
            dispatch({ type: "GET_REMINDER_FAILURE", payload: data });
        }
    } catch (error) {
        console.log(error);
        dispatch({ type: "GET_REMINDER_FAILURE", payload: "Network Error" });
    }
}

export const addReminder = (reminder) => async (dispatch) => {
    dispatch({ type: "POST_REMINDER_REQUEST" });

    try {
        const response = await fetch("http://localhost:8000/reminder/addReminder", {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(reminder)
        })

        const data = await response.json();
console.log(data)
        if (response.ok) {
            dispatch({ type: "POST_REMINDER_SUCCESS", payload: data });
        } else {
            dispatch({ type: "POST_REMINDER_FAILURE", payload: data });
        }
    } catch (error) {
        console.log(error);
        dispatch({ type: "POST_REMINDER_FAILURE", payload: 'Network Error' })
    }
}