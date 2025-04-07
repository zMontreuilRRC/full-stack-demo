import { Term } from "@prisma/client";
import { TermListPage } from "./term-list-page";
import { useUser } from "@clerk/clerk-react";
import { NotSignedIn } from "../common";

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
    
        // TODO: request only favourited terms to reduce load
        return(
            <TermListPage
                title="My Terms"
                dependencies={[]}
                filterFn={termFilter}
            />
        )
    }
}