import type { UID } from "@strapi/strapi";

export function getPaginationParams(context: any) {
    const limit = parseInt(context.query?.pagination?.pageSize as string) || 25;
    return {
        start:
            ((parseInt(context.query?.pagination?.page as string) || 1) - 1) *
                limit +
            1,
        limit,
    };
}

export async function paginationGenerator(
    document: UID.ContentType,
    context: any,
) {
    const count = await strapi.documents(document).count({});
    const page = parseInt(context.query?.pagination?.page as string) || 1;
    const pageSize =
        parseInt(context.query?.pagination?.pageSize as string) || 25;

    return {
        page,
        pageSize,
        pageCount: Math.ceil(count / pageSize),
        total: count,
    };
}
