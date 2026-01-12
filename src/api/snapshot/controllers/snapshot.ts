/**
 * snapshot controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::snapshot.snapshot",
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const { populate, ...query } = await this.sanitizeQuery(ctx);
            const entity = await strapi
                .documents("api::snapshot.snapshot")
                .findMany({
                    status: "published",
                    populate: {
                        photos: true,
                        ...(populate as object),
                    },
                    ...query,
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity);
        },

        async findOne(ctx) {
            await this.validateQuery(ctx);

            const { populate, ...query } = await this.sanitizeQuery(ctx);
            const entity = await strapi
                .documents("api::snapshot.snapshot")
                .findFirst({
                    status: "published",
                    populate: {
                        photos: true,
                        ...(populate as object),
                    },
                    ...query,
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity);
        },
    })
);
