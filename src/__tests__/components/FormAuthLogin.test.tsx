import {describe, it, expect, vi, beforeEach} from 'vitest'
import FormAuthLogin from "@/components/page/auth/FormAuthLogin";
import authLogin from '@/actions/auth-login'
import {cleanup, fireEvent, render, waitFor, screen} from "@testing-library/react";

// Mocks
vi.mock('@/actions/auth-login', () => ({ default: vi.fn() }))
vi.mock('next/image', () => ({
    default: ({ src, alt }: { src: string, alt: string }) => <img src={src} alt={alt} width={24} height={24} />,
}))

// Mock authLogin pour changer la value dans les tests
const mockedAuthLogin = vi.mocked(authLogin)


describe('components/page/auth/FormAuthLogin.tsx', async () => {
    beforeEach(() => {
        vi.clearAllMocks()
        cleanup()
    })

    it('Affiche les champs et boutons du formulaire', async () => {
        const {getByText} = render(<FormAuthLogin />)

        // Les champs et buttons sont défini
        expect(getByText('Email')).toBeDefined()
        expect(getByText('Mot de passe')).toBeDefined()
        expect(getByText('Se connecter')).toBeDefined()
        expect(getByText('Mot de passe oublié ?')).toBeDefined()
    })

    it('affiche "Envoyé" si le formulaire à fonctionné', async () => {

        // ajoute un "success:true" à l'envoie du formulaire
        mockedAuthLogin.mockResolvedValue({success: true})
        render(<FormAuthLogin />)

        fireEvent.click(screen.getByRole('button', { name: /se connecter/i }))

        await waitFor(() => {
            expect(mockedAuthLogin).toHaveBeenCalledOnce();
        });

        expect(screen.getByText('Envoyé')).toBeDefined()
    })

    it("affiche \"Envoyé\" si le formulaire n'a pas fonctionné", async () => {

        mockedAuthLogin.mockResolvedValue({success: false})

        render(<FormAuthLogin />)

        fireEvent.click(screen.getByRole('button', { name: /se connecter/i }))

        await waitFor(() => {
            expect(mockedAuthLogin).toHaveBeenCalledOnce();
        });

        expect(screen.getByText('Erreur')).toBeDefined()
    })


})