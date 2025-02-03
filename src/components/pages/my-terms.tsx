import { terms as termData } from "../../services/terms";
import { TermListDisplay } from "../common";

export function MyTerms() {
    return(
        <TermListDisplay terms={termData.filter(t => t.isFavourite)} />
    )
}