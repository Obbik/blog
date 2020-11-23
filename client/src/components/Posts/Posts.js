import React from 'react'
import { useSelector } from 'react-redux'
import useStyles from "./styles"

const Post = () => {
    const post = useSelector((state) => state.posts)
    const classes = useStyles();
    console.log(post)
    return (
        <div>
            Post
        </div>
    )
}

export default Post
