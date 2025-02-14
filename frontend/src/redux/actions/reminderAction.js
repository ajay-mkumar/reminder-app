export const getReminder = () => async (dispatch) => {
    dispatch({ type: "GET_REMINDER_REQUEST" });

    try {
        const response = await fetch("http://localhost:8000/reminder/", {
            method: "GET",
            credentials: 'include'
        });

        const data = await response.json();


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

export const deleteReminder = (reminderId) => async (dispatch) => {
    dispatch({ type: "POST_DELETE_REQUEST" });

    try {
        const response = await fetch(`http://localhost:8000/reminder/${reminderId}`, {
            method: 'DELETE',
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error("Failed to delete");
        }

        dispatch({ type: "POST_DELETE_SUCCESS", payload: reminderId });
    } catch (error) {
        console.log(error);
        dispatch({ type: "POST_DELETE_FAILURE", payload: "Network Error" });
    }
}

export const updateReminder = (reminderId, updatedReminder) => async (dispatch) => {
    dispatch({ type: "UPDATE_REMINDER_REQUEST" });

    try {
        const response = await fetch(`http://localhost:8000/reminder/${reminderId}`, {
            method: 'PUT',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedReminder)
        });

        const data = await response.json();

        if (response.ok) {
            dispatch({ type: "UPDATE_REMINDER_SUCCESS", payload: data });
        } else {
            dispatch({ type: "UPDATE_REMINDER_FAILURE", payload: data });
        }
    } catch (error) {
        console.log(error);
        dispatch({ type: "UPDATE_REMINDER_FAILURE", payload: "Network Error" });
    }
}