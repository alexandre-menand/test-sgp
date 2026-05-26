import  "./UiTextField.css";

import {InputLabel, TextField} from "@mui/material";
import {TextFieldProps} from "@mui/material/TextField";

export function UiTextField ({...props}: TextFieldProps ) {
    return (
        <div className='UiTextField'>
            <InputLabel className='UiTextField-label'>{props.label}</InputLabel>
            <TextField className='UiTextField-TextField' {...props} label='' />
        </div>

    )
}

