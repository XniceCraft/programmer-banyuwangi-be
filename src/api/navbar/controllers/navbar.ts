/**
 * navbar controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::navbar.navbar",
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const { populate, ...query } = await this.sanitizeQuery(ctx);
            const entity = await strapi
                .documents("api::navbar.navbar")
                .findFirst({
                    status: "published",
                    populate: {
                        brandImage: true,
                        navigations: true,
                        additionalNavigation: true,
                        ...(populate as object),
                    },
                    ...query,
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity);
        },
    })
);
