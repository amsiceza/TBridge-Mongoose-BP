module.exports = {
    paths: {
        //ENDPOINTS SPACE FOR USERS
        "/users/login": {
            post: {
                tags: {
                    Users: "-Login a user",
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
        "/posts/create": {
            post: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Posts: "-Create a post",
                },
                description: "Create a post",
                operationId: "create",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/PostInput",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Post created successfully",
                    },
                    500: {
                        description: "There was a problem",
                    },
                },
            },
        },
        "/posts/update/644d9468a8c90df3e92c414b": {
            put: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Posts: "-Update a post",
                },
                description: "Update a post",
                operationId: "update",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                        $ref: "#/components/schemas/_id",
                        },
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/PostInput",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Post updated successfully",
                    },
                    500: {
                        description: "There was a problem",
                    },
                },
            },
        },
        "/posts/delete/644d9465a8c90df3e92c4148": {
            delete: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Posts: "-Delete Post by Id",
                },
                description: "Delete Post by Id",
                operationId: "delete",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                        $ref: "#/components/schemas/_id",
                        },
                    }
                ],
                responses: {
                    200: {
                        description: "Deleted post || ${post.title} ||",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/post",
                                },
                            },
                        },
                    },
                    404: {
                        description: "Post not found",
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
                        description: "Post not found",
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
        "/posts/getById/644d9468a8c90df3e92c414b": {
            get: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Posts: "-Get Post by Id",
                },
                description: "Get Post by Id",
                operationId: "getById",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                        $ref: "#/components/schemas/_id",
                        },
                    }
                ],
                responses: {
                    404: {
                        description: "Post not found",
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