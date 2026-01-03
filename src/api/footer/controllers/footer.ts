/**
 * footer controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::footer.footer",
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const { populate, ...query } = await this.sanitizeQuery(ctx);
            const entity = await strapi
                .documents("api::footer.footer")
                .findFirst({
                    status: "published",
                    populate: {
                        navigationGrid: {
                            populate: {
                                navigations: true,
                            },
                        },
                        additionalNavigation: {
                            populate: {
                                primary: true,
                                secondary: true,
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
