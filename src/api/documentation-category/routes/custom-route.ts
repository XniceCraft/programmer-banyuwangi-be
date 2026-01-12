export default {
    routes: [
        {
            method: "GET",
            path: "/documentation-categories/:slug",
            handler: "documentation-category.findOne",
        },
    ],
};
