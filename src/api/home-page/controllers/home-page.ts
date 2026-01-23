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
                        upcomingEventSection: {
                            populate: { poster: true, linkButton: true },
                        },
                        heroSection: {
                            populate: {
                                firstSection: true,
                                secondSection: true,
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
                                photo: true,
                            },
                        },
                        ...(populate as object),
                    },
                    ...query,
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity);
        },
    }),
);
