import React, { Component } from 'react';
import PostsService from '../Services/PostsService';
import Slides from './../Slides/Slides.jsx';
import './News.css';

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

    makeItEasy(arr){
        let temp_posts = arr.map
        return temp_posts;
    }

    render() {
        let temp_posts = this.makeItEasy(this.state.posts)
        console.log(temp_posts)
        return (
            <div>
                {console.log(temp_posts)}
                {/*<Slides/>*/}
                <div className="mainBg">
                    <div className="container">
                        <div className="newsBackground">
                            Новости
                        </div>
                {this.state.posts.map( post =>
                    <div key={post.id}>
                        {console.log(post)}

                                <div className="post">
                                    <div className="postImage">
                                        <img src={post.logo} alt="postImage"/>
                                    </div>
                                    <div className="postContent">
                                        <div className="postHeader">
                                            <div className="postTitle">
                                                {post.title}
                                            </div>
                                            <div className="postDate">
                                                {post.createdAt}
                                            </div>
                                        </div>
                                        <div className="postText">
                                            {post.text}
                                        </div>
                                    </div>
                                    <a href={post.url} className="modalBtn">
                                        Узнать больше →
                                    </a>
                                    {/*<div id="openModal" className="modalDialog">*/}
                                    {/*    <div className="modalPost">*/}
                                    {/*        <a href="#close" title="Закрыть" className="close">X</a>*/}
                                    {/*        <h2 className="modalTitle">{post.title}</h2>*/}
                                    {/*        <div className="modalContent">{post.text}</div>*/}
                                    {/*        <div className="modalImage"><img src={post.img} alt="newsImage"/></div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                    </div>

                )}
                        <div className="navButtons" onClick={ this.prevPage }>
                            <button className="newsBtn">
                                Предыдущая страница
                            </button>
                            <button className="newsBtn" onClick={ this.nextPage }>
                                Следующая страница
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default News;