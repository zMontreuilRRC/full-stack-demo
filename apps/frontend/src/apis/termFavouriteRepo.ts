const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;

/**
 * Because our back-end now has a new route/resource (the userTerm many-to-many
 * middle table) we use a new repository to POST/DELETE to that route
 */

export async function addFavouriteTerm(
    termId: number,
    sessionToken: string
) {
    const queryUrl = `${BASE_URL}/terms/${termId}/favourite`
    const response = await fetch(
        queryUrl,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }
    );

    if(!response.ok) {
        throw new Error("Error adding term to favourites");
    }
}

export async function deleteFavouriteTerm(
    termId: number,
    sessionToken: string
) {
    const queryUrl = `${BASE_URL}/terms/${termId}/favourite`
    const response = await fetch(
        queryUrl,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }
    );

    if(!response.ok) {
        throw new Error("Error removing term from favourites");
    }
}