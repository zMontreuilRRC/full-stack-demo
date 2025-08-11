import { SignInButton } from "@clerk/clerk-react";

export function NotSignedIn() {
    return (
        <section className="container">
            <h2>Sign in to view this content.</h2>
            <SignInButton>
                <button>Click here to sign in or create an account.</button>
            </SignInButton>
        </section>
    )
}