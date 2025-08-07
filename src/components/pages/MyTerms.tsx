import { FrontendTerm as Term } from "@shared/types/frontend-term";
import { TermListPage } from "./TermListPage";
import { useUser } from "@clerk/clerk-react";
import { NotSignedIn } from "../common/not-signed-in/NotSignedIn";

export function MyTerms() {
    const { isSignedIn, isLoaded } = useUser();

    if(!isSignedIn) {
        return <NotSignedIn />
    } else if(!isLoaded) {
        return <div>Loading...</div>
    } else {
        const termFilter = (termEle: Term) => {
            return termEle.isFavourite;
        }
    
        return(
            <main>
                <TermListPage
                    title="My Terms"
                    dependencies={[]}
                    filterFn={termFilter}
                />
            </main>
        )
    }
}