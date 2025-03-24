export interface ApiResponse<T> {
    status: string; // "success" or "error"
    data?: T; // optional data returned in case of success
    message?: string; // information about result
    error?: string; // optional error message
    code?: string // optional error code
};

// helper functions to easily manufacture different response options
export const successResponse = <T>(
    data?: T,
    message?: string
): ApiResponse<T> => ({
    status: "success",
    data,
    message
});

export const errorResponse = (
    message: string,
    code?: string
): ApiResponse<null> => ({
    status: "error",
    message,
    code
});