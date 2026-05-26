'use client'

import style from "./page.module.css"
import {UiTextField} from "@/components/ui/UiTextField";
import UiButton from "@/components/ui/UiButton";
import Image from "next/image";
import WindowIcon from "@/../public/window-icon.svg"
import authLogin from "@/actions/auth-login";
import {useActionState, useEffect} from "react";


export default function AuthLogin () {
    const [stateLogin, formActionLogin] = useActionState(authLogin, {})

    useEffect(() => {
        if(stateLogin.success) {
            console.log(stateLogin.data) // datas dans la console coté client
        }
    }, [stateLogin]);

    return (
        <form action={formActionLogin}  className={style.form}>
            <UiTextField
                id="email"
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                placeholder="nom@exemple.fr"
                error={stateLogin.errors?.email !== undefined}
                helperText={stateLogin.errors?.email}
            />
            <UiTextField
                id="password"
                type='password'
                name="password"
                label="Mot de passe"
                variant="outlined"
                placeholder="nom@exemple.fr"
                error={stateLogin.errors?.password !== undefined}
                helperText={stateLogin.errors?.password}
            />
            <UiButton className={style.btnPrimary} type="submit" variant="contained" icon={<Image src={WindowIcon} alt="" />}>Se connecter</UiButton>
            <UiButton>Mot de passe oublié ?</UiButton>
        </form>
    )
}

