import {Button, ButtonProps} from "@mui/material";
import "./UiButton.css";

export interface UiButtonProps extends ButtonProps {
    icon?: React.ReactNode;
}
export default function UiButton({...props}: UiButtonProps ) {

    return <Button {...props} className='button'>
        {props.icon}
        <span>
             {props.children}
        </span>
    </Button>;
}