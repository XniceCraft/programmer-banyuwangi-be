/**
 * documentation controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::documentation.documentation",
    ({ strapi }) => ({
        async findOne(ctx) {
            await this.validateQuery(ctx);

            const {
                filters: _filters,
                populate,
                ...query
            } = await this.sanitizeQuery(ctx);
            const entity = await strapi
                .documents("api::documentation.documentation")
                .findFirst({
                    status: "published",
                    filters: {
                        slug: {
                            $eq: ctx.params.slug,
                        },
                    },
                    populate: {
                        photos: true,
                        documentation_categories: true,
                        ...(populate as object),
                    },
                    ...query,
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity);
        },
    })
);
