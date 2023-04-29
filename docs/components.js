module.exports = {
    components: {
        securitySchemes: {
            ApiKeyAuth: {
                type: "apiKey",
                name: "Authorization",
                in: "header"
            }
        },
        schemas: {
            user: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        format: 'objectId',
                        description: "user identification number",
                        example: "644b9a7b1e898dfd556954df"
                    },
                    username: {
                        type: 'string',
                        description: "user's name",
                        example: "Francisco"
                    },
                    email: {
                        type: 'string',
                        description: "user's email",
                        example: "francisco@gmail.com"
                    },
                    password: {
                        type: 'string',
                        description: "security password",
                        example: "asdf123456"
                    },
                    role: {
                        type: 'string',
                        description: "roles user",
                        example: "user"
                    },
                    confirmed: {
                        type: 'boolean',
                        description: "Confirmed confirmation email",
                        example: "false"
                    },
                    tokens: {
                        type: 'array',
                        description: "array of tokens"
                    },
                    postIds: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'objectId',
                            description: "Posts that the user has made",
                            example: "644b9cf2eb4c52a141f51488"
                        },
                        description: "Array containing the IDs of the posts on that user"
                    },
                    likes: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'objectId',
                            description: "IDs of the posts that the user has liked",
                            example: "644b9b731fc464716e8401cb"
                        },
                        description: "Array containing the IDs of the posts that the user has liked"
                    },
                    wishList: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'objectId',
                            description: "IDs of the posts that the user has liked",
                            example: "644b9b731fc464716e8401cb"
                        },
                        description: "Array containing the IDs of the posts that the user has liked"
                    },
                    likesCom: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'objectId',
                            description: "IDs of the comments that the user has liked",
                            example: "644b9b731fc464716e8401cb"
                        },
                        description: "Array containing the IDs of the comments that the user has liked"
                    },
                    wishListCom: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'objectId',
                            description: "IDs of the comments that the user has liked",
                            example: "644b9b731fc464716e8401cb"
                        },
                        description: "Array containing the IDs of the comments that the user has liked"
                    },
                    followers: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'objectId',
                            description: "IDs of the users who have liked the user",
                            example: "644a586f6f275263d089c15c"
                        },
                        description: "Array containing the IDs of the users who have liked the user"
                    },
                    followings: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'objectId',
                            description: "IDs of the users that the user has liked",
                            example: "644b9b731fc464716e8401cb"
                        },
                        description: "Array containing the IDs of the users that the user has liked"
                    },
                    img: {
                        type: 'string',
                        description: "Image associated with the user",
                        example: "uploads\descarga.png"
                    },
                }
            },
            post: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        format: 'objectId',
                        description: "post identification number",
                        example: "644b9b731fc464716e8401cb"
                    },
                    title: {
                        type: 'string',
                        description: "post's title",
                        example: "Adios"
                    },
                    body: {
                        type: 'string',
                        description: "body of the post",
                        example: "adios"
                    },
                    userId: {
                        type: 'string',
                        format: 'objectId',
                        description: "User ID of the user who made the post",
                        example: "644a5ef8201302e2a702f0e7"
                    },
                    commentIds: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'objectId',
                            description: "ID of a comment belonging to the post",
                            example: "644b9cf2eb4c52a141f51488"
                        },
                        description: "Array containing the IDs of the comments on that post"
                    },
                    likes: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'objectId',
                            description: "ID of a user who liked the post",
                            example: "644bb67326712e8c5f6ae376"
                        },
                        description: "Array containing the IDs of the users who have liked that post"
                    },
                    img: {
                        type: 'string',
                        description: "Image associated with the post",
                        example: "uploads\descarga.png"
                    },
                }
            },
            comment: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        format: 'objectId',
                        description: "comment identification number",
                        example: "644b9cf2eb4c52a141f51488"
                    },
                    body: {
                        type: 'string',
                        description: "body of the comment",
                        example: "cambio de cuerpo guiller"
                    },
                    userId: {
                        type: 'string',
                        format: 'objectId',
                        description: "User ID of the user who made the comment",
                        example: "644a5ef8201302e2a702f0e7"
                    },
                    postId: {
                        type: 'string',
                        format: 'objectId',
                        description: "ID of the post to which the comment belongs",
                        example: "644b9b731fc464716e8401cb"
                    },
                    likes: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'objectId',
                            description: "ID of a user who liked the comment",
                            example: "644bb67326712e8c5f6ae376"
                        },
                        description: "Array containing the IDs of the users who have liked that comment"
                    },
                    img: {
                        type: 'string',
                        description: "Image associated with the comment",
                        example: "uploads\descarga.png"
                    },
                }
            },
            _id: {
                type: 'objectId',
                description: "An id param",
                example: "6201064b0028de7866e2b2c4"
            },
            UserLogin: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                        description: "user's email",
                        example: "guillermosoler.gsf@gmail.com"
                    },
                    password: {
                        type: 'string',
                        description: "security password",
                        example: "1234asdf"
                    }

                }
            },
            PostInput: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                        description: "title's post",
                        example: "Example 1 title's post 01"
                    },
                    body: {
                        type: 'string',
                        description: "body's post",
                        example: "Example 1 body's post 01"
                    },
                    img: {
                        type: 'string',
                        format: 'binary',
                        description: "Image of the post",
                        example: "image/jpeg"
                    }
                }
            }
        }
    }
}
