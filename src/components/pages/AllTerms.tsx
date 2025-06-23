import { terms as termData } from "../../terms/termData";
import { TermListDisplay } from "../common/term-list-display/TermListDisplay";

export function AllTerms() {
    return(
        <TermListDisplay terms={termData} />
    )
}