import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { fetchPost } from "./api/index"

import { getPost } from './actions/posts'
import { useDispatch } from "react-redux"
import memories from "./images/memories.jpg"
import Form from "./components/Form/form"
import Posts from "./components/Posts/Posts"

import useStyles from "./styles"

const App = () => {

    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost)
    }, [])
    return (
        <Container maxwidth="lg">
            <AppBar position="static" className={classes.appBar}>
                <Typography variant="h2" align="center" className={classes.heading}>
                    Somethin
               </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60px" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch">
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>


        </Container>
    )
}

export default App
