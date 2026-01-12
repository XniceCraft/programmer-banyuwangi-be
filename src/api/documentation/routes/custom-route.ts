export default {
    routes: [
        {
            method: "GET",
            path: "/documentations/count",
            handler: "documentation.count",
        },
        {
            method: "GET",
            path: "/documentations/:slug",
            handler: "documentation.findOne",
        },
        {
            method: "GET",
            path: "/documentation-categories/:slug/documentations",
            handler: "documentation.findByCategory",
        },
    ],
};
