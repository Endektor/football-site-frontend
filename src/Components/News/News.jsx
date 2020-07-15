import React, { Component } from 'react';
import PostsService from '../Services/PostsService';

const postsService = new PostsService();

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            nextPageURL: '',
            prevPageURL: ''
        };
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }

    componentDidMount() {
        const self = this;
        postsService.getPosts().then(function (result) {
            self.setState({ posts: result.data, nextPageURL: result.nextlink, prevPageURL: result.prevlink})
        });
    }


    nextPage(){
        const self = this;
        postsService.getPostsByURL(this.state.nextPageURL).then((result) => {
            self.setState({ posts: result.data, nextPageURL: result.nextlink, prevPageURL: result.prevlink})
        });
    }

    prevPage(){
        const self = this;
        postsService.getPostsByURL(this.state.prevPageURL).then((result) => {
            self.setState({ posts: result.data, nextPageURL: result.nextlink, prevPageURL: result.prevlink})
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
                <button onClick={ this.prevPage }>Previous</button>
                <button onClick={ this.nextPage }>Next</button>
            </div>
        );
    }
}
export default News;