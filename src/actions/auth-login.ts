'use server'

import { z } from 'zod'

const authLoginSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
})

type AuthLoginSchema = z.infer<typeof authLoginSchema>

interface AuthLoginResponse {
    success?: boolean,
    errors?: {
        email?: string[]
        password?: string[]
    },
    data?: AuthLoginSchema
}

export default async function authLogin(initialState: AuthLoginResponse, formData: FormData): Promise<AuthLoginResponse> {

    const validatedFields = authLoginSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

   console.log(validatedFields.data) //datas dans la console coté serveur
   return {
        success: true,
        data: validatedFields.data
    }
}
