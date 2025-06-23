import { terms as termData } from "../../terms/termData";
import { TermListDisplay } from "../common";

export function AllTerms() {
    return(
        <TermListDisplay terms={termData} />
    )
}