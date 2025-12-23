export default {
    routes: [
        {
            method: "GET",
            path: "/documentation/:slug",
            handler: "documentation.findOne",
        },
    ],
};
