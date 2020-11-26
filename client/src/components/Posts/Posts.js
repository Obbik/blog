import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from "@material-ui/core"
import Post from "./Post/Post"
import useStyles from "./styles"

const Posts = () => {
    const post = useSelector((state) => state.posts)
    const classes = useStyles();
    console.log(post)
    return (
        !post.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    post.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} />

                        </Grid>

                    ))
                }


            </Grid>
        )
    )
}

export default Posts
