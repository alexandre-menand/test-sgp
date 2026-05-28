'use client'

import {UiTextField} from "@/components/ui/UiTextField";
import UiButton from "@/components/ui/UiButton";
import Image from "next/image";
import WindowIcon from "@/../public/window-icon.svg"
import authLogin from "@/actions/auth-login";
import {useActionState, useEffect} from "react";
import Stack from '@mui/material/Stack';

export default function FormAuthLogin () {
    const [stateLogin, formActionLogin] = useActionState(authLogin, {})

    useEffect(() => {
        if(stateLogin.success) {
            console.log(stateLogin.data) // datas dans la console coté client
        }
    }, [stateLogin]);

    return (
            <form action={formActionLogin}  >
                <Stack direction="column" gap={3} width={250}>
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
                    <Stack direction="column" gap={2}>
                        <UiButton type="submit" variant="contained" icon={<Image src={WindowIcon} alt="" />}>Se connecter</UiButton>
                        <UiButton>Mot de passe oublié ?</UiButton>
                    </Stack>
                </Stack>
            </form>
    )
}

