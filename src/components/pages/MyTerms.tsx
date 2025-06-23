import { terms as termData } from "../../terms/termData";
import { TermListDisplay } from "../common/term-list-display/TermListDisplay";

export function MyTerms() {
    return(
        <TermListDisplay terms={termData.filter(t => t.isFavourite)} />
    )
}