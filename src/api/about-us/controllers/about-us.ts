/**
 * about-us controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::about-us.about-us",
    ({ strapi }) => ({
        async findOne(ctx) {
            await this.validateQuery(ctx);

            const { populate, ...query } = await this.sanitizeQuery(ctx);
            const entity = await strapi
                .documents("api::about-us.about-us")
                .findFirst({
                    status: "published",
                    populate: {
                        documentations: true,
                        ...(populate as object),
                    },
                    ...query,
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity);
        },
    })
);
