const BASE_URL = "/api/v1";

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