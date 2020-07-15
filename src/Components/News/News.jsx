import React, { Component } from 'react';
import PostsService from '../Services/PostsService';

const postsService = new PostsService();

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            nextPageURL: '',
            previousPageURL: ''
        };
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    componentDidMount() {
        const self = this;
        postsService.getPosts().then(function (result) {
            self.setState({ posts: result.data, nextPageURL: result.nextlink})
        });
    }


    nextPage(){
        const self = this;
        postsService.getPostsByURL(this.state.nextPageURL).then((result) => {
            self.setState({ posts: result.data, nextPageURL: result.nextlink})
        });
    }

    previousPage(){
        const self = this;
        postsService.getPostsByURL(this.state.previousPageURL).then((result) => {
            self.setState({ posts: result.data, previousPageURL: result.previouslink})
        });
    }

    render() {

        return (
            <div>
                {this.state.posts.map( post =>
                    <div key={post.id}>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.text}</p>
                        <p>{post.createdAt}</p>
                    </div>
                )}
                <button onClick={ this.previousPage }>Previous</button>
                <button onClick={ this.nextPage }>Next</button>
            </div>
        );
    }
}
export default News;