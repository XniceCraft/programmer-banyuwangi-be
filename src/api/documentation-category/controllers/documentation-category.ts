/**
 * documentation-category controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::documentation-category.documentation-category",
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const { populate, ...query } = await this.sanitizeQuery(ctx);
            const entity = await strapi
                .documents("api::documentation-category.documentation-category")
                .findMany({
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
