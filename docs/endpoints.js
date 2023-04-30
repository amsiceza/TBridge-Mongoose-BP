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
                    404: {
                        description: "Post not found",
                    },
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
                    },
                    404: {
                        description: "Post not found",
                    },
                    500: {
                        description: "There was a problem finding the posts",
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
                    },
                    500: {
                        description: "There was a problem finding the posts",
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
                    },
                    500: {
                        description: "There was a problem finding the posts",
                    },
                },
            },
        },
        "/posts/getInfo/": {
            get: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Posts: "-Get Info Post",
                },
                description: "Get Info Post with comments",
                operationId: "getInfo",
                parameters: [],
                responses: {
                    500: {
                        description: "There was a problem finding the posts",
                    },
                },
            },
        },
        "/posts/likes/644d9468a8c90df3e92c414b": {
            put: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Posts: "-To like a post",
                },
                description: "To like a post",
                operationId: "like",
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
                    400: {
                        description: "You already liked this post",
                    },
                    500: {
                        description: "There was a problem with your like",
                    },
                },
            },
        },
        "/posts/unlike/644d9468a8c90df3e92c414b": {
            put: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Posts: "-To unlike a post",
                },
                description: "To unlike a post",
                operationId: "unlike",
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
                    400: {
                        description: "You haven't liked this post yet",
                    },
                    500: {
                        description: "There was a problem with your unlike",
                    },
                },
            },
        },
        //ENDPOINTS SPACE FOR COMMENTS
        "/comments/create/644d9468a8c90df3e92c414b": {
            post: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Comments: "-Create a comment",
                },
                description: "Create a comment",
                operationId: "create",
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
                                $ref: "#/components/schemas/CommentInput",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Comment created successfully",
                    },
                    500: {
                        description: "There was a problem creating the comment",
                    },
                },
            },
        },
        "/comments/update/644dbd82d72cc31d9b5d77c2": {
            put: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Comments: "-Update a comment",
                },
                description: "Update a comment",
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
                                $ref: "#/components/schemas/CommentInput",
                            },
                        },
                    },
                },
                responses: {
                    404: {
                        description: "Comment not found",
                    },
                    200: {
                        description: "Comment updated successfully",
                    },
                    500: {
                        description: "There was a problem updating the comment",
                    },
                },
            },
        },
        "/comments/delete/644dbd82d72cc31d9b5d77c2": {
            delete: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Comments: "-Delete Comment by Id",
                },
                description: "Delete Comment by Id",
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
                        description: "Comment deleted",
                    },
                    404: {
                        description: "Comment not found",
                    },
                    500: {
                        description: "There was a problem deleting the comment",
                    },
                },
            },
        },
        "/comments/getAll": {
            get: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Comments: "-Get All Comments",
                },
                description: "Get All comments",
                operationId: "getAll",
                parameters: [],
                responses: {
                    200: {
                        description: "We finded all this comments",
                    },
                    500: {
                        description: "There was a problem getting the comment",
                    },
                },
            },
        },
        "/comments/likes/644dc4082cb29da314bcbb40": {
            put: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Comments: "-To like a comment",
                },
                description: "To like a comment",
                operationId: "like",
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
                    400: {
                        description: "You already liked this comment",
                    },
                    500: {
                        description: "There was a problem with your like",
                    },
                },
            },
        },
        "/comments/unlike/644dc4082cb29da314bcbb40": {
            put: {
                security: [{
                    ApiKeyAuth: []
                }],
                tags: {
                    Comments: "-To unlike a comment",
                },
                description: "To unlike a comment",
                operationId: "unlike",
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
                    400: {
                        description: "You haven't liked this comment yet",
                    },
                    500: {
                        description: "There was a problem with your unlike",
                    },
                },
            },
        },
    },
};