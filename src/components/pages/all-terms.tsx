import { terms as termData } from "../../services/terms";
import { TermListDisplay } from "../common";

export function AllTerms() {
    return(
        <TermListDisplay terms={termData} />
    )
}