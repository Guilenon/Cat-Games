import React, { Component } from 'react'
import { Drawer } from 'antd';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import Fire from '../Fire';
import create from '@ant-design/icons/lib/components/IconFont';

export default class CommentDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            content: "",
            created_at: ""
        }
    }
    //Trie des articles par date
    sortArticle = () => {
        this.props.article.comments.sort(function (article1, article2) {
            if (article1.created_at < article2.created_at) return -1;
            if (article1.created_at > article2.created_at) return 1;
            return 0;
        })
    }
    //Trie au lancement du drawer
    componentDidMount() {
        this.sortArticle();
    }
    //Trie a chaque changement
    componentWillUpdate() {
        this.sortArticle();
    }
    //Ajout de commmentaire
    handleCommentAdd = () => {
        const dateCrea = this.state.created_at === "" ? new Date() : this.state.created_at
        const NewComment = this.props.article
        NewComment.comments.lengt === 0 && (NewComment.comments = {})
        NewComment.comments.push({ author: this.state.author, content: this.state.content, created_at: dateCrea })
        //console.log(NewComment.comments)
        const firebase = new Fire(error => {
            if (error) {
                this.setState({ error: error });
            } else {
                firebase.updateArticle(NewComment)
                this.setState({ author: "", content: "", created_at: "" })
            }
        })
    };
    //Changement des states pour le comment avec le form
    handleChange = (e) => {
        if (e.target.name === 'author') {
            this.setState({ author: e.target.value })
        } else if (e.target.name === 'content') {
            this.setState({ content: e.target.value })
        }
    }

    render() {
        const { article, handleReturn, visible } = this.props;
        return (
            <Drawer title="Espace Commentaire" placement="right" onClose={handleReturn} visible={visible}>
                {article.comments.map((comment, i) => (<CommentCard key={i} author={comment.author} content={comment.content} dateCreation={comment.created_at} article={article} commentaire={comment} handleClickModif={() => this.setState({ author: comment.author, content: comment.content, created_at: comment.created_at })} />))}
                <CommentForm handleChange={this.handleChange} handleClick={this.handleCommentAdd} author={this.state.author} content={this.state.content} date={this.state.created_at} />
            </Drawer>
        )
    }
}
