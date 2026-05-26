
import {redirect} from "next/navigation";

export default function Home() {
    /**
     * FIXME: création d'une redirection pour envoyer vers la page de login
     */
  redirect("/auth/login");
  return (
    <div>
      Accueil
    </div>
  );
}
