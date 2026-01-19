/**
 * documentation controller
 */

import { factories } from "@strapi/strapi";
import { getPaginationParams, paginationGenerator } from "../../../pagination";

export default factories.createCoreController(
    "api::documentation.documentation",
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const { populate, ...query } = await this.sanitizeQuery(ctx);
            const entity = await strapi
                .documents("api::documentation.documentation")
                .findMany({
                    status: "published",
                    populate: {
                        photos: true,
                        documentation_categories: true,
                        ...(populate as object),
                    },
                    ...getPaginationParams(ctx),
                    ...query,
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity, {
                pagination: await paginationGenerator(
                    "api::documentation.documentation",
                    ctx,
                ),
            });
        },

        async findByCategory(ctx) {
            await this.validateQuery(ctx);

            const {
                populate,
                pagination,
                filters: _filters,
                ...query
            } = await this.sanitizeQuery(ctx);

            const entity = await strapi
                .documents("api::documentation.documentation")
                .findMany({
                    status: "published",
                    filters: {
                        documentation_categories: {
                            slug: { $eq: ctx.params.slug },
                        },
                    },
                    populate: {
                        photos: true,
                        documentation_categories: true,
                        ...(populate as object),
                    },
                    ...query,
                    ...getPaginationParams(ctx),
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity, {
                pagination: await paginationGenerator(
                    "api::documentation.documentation",
                    ctx,
                ),
            });
        },

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

        async count(ctx) {
            await this.validateQuery(ctx);

            const total = await strapi
                .documents("api::documentation.documentation")
                .count({
                    status: "published",
                });

            return await this.transformResponse({
                total,
            });
        },
    }),
);
