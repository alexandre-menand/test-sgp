import {Alert} from "@mui/material";

interface UiFormFeedbackProps {
    success?: boolean,
    text?: string,
}
export default function UiFormFeedback (props: UiFormFeedbackProps) {
    if (props.success) {
        return(
            <Alert severity="success">
                {props.text}
            </Alert>
        )
    }

    else if (props.success === false) {
        return (
            <Alert severity="error">
                {props.text}
            </Alert>
        )
    }

    return null
}
