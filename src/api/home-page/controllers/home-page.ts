/**
 * home-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::home-page.home-page",
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const { populate, ...query } = await this.sanitizeQuery(ctx);
            const entity = await strapi
                .documents("api::home-page.home-page")
                .findFirst({
                    status: "published",
                    populate: {
                        heroSection: true,
                        subHeroSection: {
                            populate: {
                                documentations: {
                                    populate: {
                                        photos: true,
                                        documentation_categories: {
                                            fields: ["title"],
                                        },
                                    },
                                },
                            },
                        },
                        eventSection: {
                            populate: {
                                events: {
                                    populate: {
                                        photo: true,
                                    },
                                },
                            },
                        },
                        ...(populate as object),
                    },
                    ...query,
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity);
        },
    })
);
