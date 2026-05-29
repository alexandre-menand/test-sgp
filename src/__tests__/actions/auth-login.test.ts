import {describe, it, expect} from "vitest";
import authLogin from "@/actions/auth-login"

const mockFormDataAuthLogin = (): FormData => {
    const mockFormDataAuthLogin = new FormData();
    mockFormDataAuthLogin.append("email", "email@mail.com")
    mockFormDataAuthLogin.append("password", "abcdefzerzsqserzrz")
    return mockFormDataAuthLogin
}



describe('actions/auth-login.ts', async () => {

    it('Un formulaire correctement remplit ', async () => {

        const authLoginTest = await authLogin({}, mockFormDataAuthLogin())

        expect(authLoginTest.success).toBe(true)
        expect(authLoginTest.data).contain({
            email: "email@mail.com",
            password: "abcdefzerzsqserzrz",
        })

    });

    it("Le champs email n'est pas renseigné", async () => {

        const mockFormData = mockFormDataAuthLogin()
        mockFormData.delete("email");

        const authLoginTest = await authLogin({}, mockFormData)

        expect(authLoginTest.success).toBe(false)
        expect(authLoginTest.errors?.email).contain( 'Invalid input: expected string, received null')
    })

    it("Le champs email n'est pas correctement renseigné", async () => {

        const mockFormData = mockFormDataAuthLogin()
        mockFormData.set("email", "email#zz.ff");

        const authLoginTest = await authLogin({}, mockFormData)

        expect(authLoginTest.success).toBe(false)
        expect(authLoginTest.errors?.email).contain( 'Invalid email address')
    })

    it("Le champs password n'est pas renseigné", async () => {

        const mockFormData = mockFormDataAuthLogin()
        mockFormData.delete("password");

        const authLoginTest = await authLogin({}, mockFormData)

        expect(authLoginTest.success).toBe(false)
        expect(authLoginTest.errors?.password).contain(  'Invalid input: expected string, received null' )
    })

    it("Le champs password n'est pas correctement renseigné", async () => {

        const mockFormData = mockFormDataAuthLogin()
        mockFormData.set("password", "1");

        const authLoginTest = await authLogin({}, mockFormData)

        expect(authLoginTest.success).toBe(false)
        expect(authLoginTest.errors?.password).contain(  'Too small: expected string to have >=8 characters' )
    })
})