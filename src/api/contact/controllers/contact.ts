/**
 * contact controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::contact.contact",
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const { populate, ...query } = await this.sanitizeQuery(ctx);
            const entity = await strapi
                .documents("api::contact.contact")
                .findFirst({
                    status: "published",
                    populate: {
                        informations: {
                            populate: {
                                linkButton: true,
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
