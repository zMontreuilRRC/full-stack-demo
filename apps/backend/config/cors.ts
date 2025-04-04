import { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
    origin: function(origin, callback) {
        const allowedOrigins = [process.env.FRONTEND_URL];

        if(allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS restriction"), false);
        }
    },
    allowedHeaders:['Content-Type', 'Authorization'],
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    credentials: true
}

export default corsOptions;