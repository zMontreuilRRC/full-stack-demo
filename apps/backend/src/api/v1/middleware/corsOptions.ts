import { CorsOptions } from "cors";

const allowedOrigins = [process.env.FRONTEND_URL];

// allow requests from the correct origins, or if they do not have an origin
// for example, POSTMAN does not include an origin by default
const corsOptions: CorsOptions = {
    origin: function(origin, callback) {
        if(allowedOrigins.includes(origin) || !origin ) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS restriction"), false);
        }
    }
}

export default corsOptions;