/**
 * blog controller
 */

import { factories } from "@strapi/strapi";
import { getPaginationParams } from "../../../pagination";

export default factories.createCoreController(
    "api::blog.blog",
    ({ strapi }) => ({
        async findOne(ctx) {
            await this.validateQuery(ctx);

            const { populate, pagination, ...query } =
                await this.sanitizeQuery(ctx);
            const entity = await strapi.documents("api::blog.blog").findFirst({
                status: "published",
                filters: {
                    slug: {
                        $eq: ctx.params.slug,
                    },
                },
                populate: {
                    cover: true,
                    ...(populate as object),
                },
                ...getPaginationParams(ctx),
                ...query,
            });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity);
        },
    }),
);
