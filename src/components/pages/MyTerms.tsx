import { TermListPage } from "./TermListPage";
import { useUser } from "@clerk/clerk-react";
import { NotSignedIn } from "../common/not-signed-in/NotSignedIn";
import { Term } from "../../types/term";

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