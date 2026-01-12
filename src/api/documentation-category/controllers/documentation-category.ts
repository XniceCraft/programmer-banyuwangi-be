/**
 * documentation-category controller
 */

import { factories } from "@strapi/strapi";
import { getPaginationParams, paginationGenerator } from "../../../pagination";

export default factories.createCoreController(
    "api::documentation-category.documentation-category",
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const { populate, pagination, ...query } = await this.sanitizeQuery(
                ctx
            );
            const entity = await strapi
                .documents("api::documentation-category.documentation-category")
                .findMany({
                    status: "published",
                    populate: {
                        documentations: {
                            count: true,
                        },
                        ...(populate as object),
                    },
                    ...(pagination
                        ? {
                              ...(pagination as object),
                              page: parseInt((pagination as any).page) || 1,
                              pageSize:
                                  parseInt((pagination as any).page) || 25,
                          }
                        : {}),
                    ...query,
                    ...getPaginationParams(ctx),
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity, {
                pagination: await paginationGenerator(
                    "api::documentation-category.documentation-category",
                    ctx
                ),
            });
        },

        async findOne(ctx) {
            await this.validateQuery(ctx);

            const { populate, ...query } = await this.sanitizeQuery(ctx);
            const entity = await strapi
                .documents("api::documentation-category.documentation-category")
                .findFirst({
                    status: "published",
                    filters: {
                        slug: {
                            $eq: ctx.params.slug,
                        },
                    },
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
