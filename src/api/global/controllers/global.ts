/**
 * global controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::global.global",
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const { populate, ...query } = await this.sanitizeQuery(ctx);
            const entity = await strapi
                .documents("api::global.global")
                .findFirst({
                    status: "published",
                    populate: {
                        favicon: true,
                        ...(populate as object),
                    },
                    ...query,
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity);
        },
    })
);
