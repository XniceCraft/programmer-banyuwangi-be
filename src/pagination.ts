import type { UID } from "@strapi/strapi";

export function getPaginationParams(context: any) {
    return {
        page: parseInt(context.params?.pagination?.page as string) || 1,
        pageSize:
            parseInt(context.params?.pagination?.pageSize as string) || 25,
    };
}

export async function paginationGenerator(
    document: UID.ContentType,
    context: any
) {
    const count = await strapi.documents(document).count({});
    const params = getPaginationParams(context);

    return {
        page: params.page,
        pageSize: params.pageSize,
        pageCount: Math.ceil(count / params.pageSize),
        total: count,
    };
}
