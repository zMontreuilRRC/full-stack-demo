import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { Express } from "express";

//define swagger options
const swaggerOptions: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0"

        }
    },
    // path to annotated files
    apis: ["./src/app.ts"]
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const swaggerDocs: any = swaggerJSDoc(swaggerOptions);

// export method for serving swagger documentation in /api-docs directory
const setupSwagger = (app:Express): void => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

// import as Express app middleware invocation
export default setupSwagger;