import { TermListDisplay } from "../common";
import { useTerms } from "../../hooks/useTerms";
import { Term } from "../../interfaces/term";
import { useState } from "react";

/** 
 * this "wrapper" page allows us to explicitly set page filters without
 * having to restate the save function on click
 */
export function TermListPage(
    {title, dependencies, filterFn}:
    {
       title: string,
       dependencies: any[],
       filterFn: ((term: Term) => Boolean)|null,
    } 
) {
    const { terms, error, toggleFavouriteTerm } = useTerms(dependencies, filterFn);
    const [ showModal, setShowModal ] = useState<Boolean>(false);
    const [ modalText, setModalText ] = useState<String>("");


    return(
        <main>
            <h2>{title}</h2>
            <div>
                {error ? 
                    <span className="error">Something went wrong ({error})</span>:
                    <TermListDisplay 
                        terms={terms} 
                        onSaveClick={toggleFavouriteTerm} 
                    />
                }
            </div>
        </main>
    )
}