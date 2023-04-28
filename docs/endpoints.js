module.exports = {
    paths: {
        //ENDPOINTS SPACE FOR USERS
        "/users/login": {
            post: {
                tags: {
                    Users: "Login a user",
                },
                description: "Login a user",
                operationId: "login",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/UserLogin",
                            },
                        },
                    },
                },
                responses: {
                    401: {
                        description: "It is necessary to confirm your email",
                    },
                    400: {
                        description: "Invalid email or password",
                    },
                    200: {
                        description: "Welcome + user.username",
                    },
                },
            }
        },
        //ENDPOINTS SPACE FOR POSTS
        // "/posts/create": {
        //     post: {
        //         tags: {
        //             Tasks: "Create a task",
        //         },
        //         description: "Create Task",
        //         operationId: "createTask",
        //         parameters: [],
        //         requestBody: {
        //             content: {
        //                 "application/json": {
        //                     schema: {
        //                         $ref: "#/components/schemas/TaskInput",
        //                     },
        //                 },
        //             },
        //         },
        //         responses: {
        //             201: {
        //                 description: "Task created successfully",
        //             },
        //             500: {
        //                 description: "Server error",
        //             },
        //         },
        //     },
        // },
        "/posts/getByTitle/Adios": {
            get: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Posts: "-Get Post by title",
                },
                description: "Get Post by title",
                operationId: "getByTitle",
                parameters: [],
                responses: {
                    404: {
                        description: "No posts found",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/post",
                                },
                            },
                        },
                    },
                    500: {
                        description: "There was a problem finding the posts",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/post",
                                },
                            },
                        },
                    },
                },
            },
        },
        //ENDPOINTS SPACE FOR COMMENTS
    },
};