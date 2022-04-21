import { Modal, Button } from 'antd';
import React, { Component } from 'react';
import Fire from '../Fire';
import ArticleForm from './ArticleForm';

export default class ArticleModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      created_at:props.article.id === undefined ? "" : props.article.created_at,
      title: props.article.id === undefined ? "" : props.article.title,
      content: props.article.id === undefined ? "" : props.article.content,
      img: props.article.id === undefined ? "" : props.article.img
    }
  }

  handleArticleAdd = () => {
    const NewArticle = {
      created_at: new Date(),
      comments: [],
      title: this.state.title,
      content: this.state.content,
      img: this.state.img
    };
    //console.log(NewArticle);
    const firebase = new Fire(error => {
      if (error) {
        this.setState({ error: error });
      } else {
        firebase.addArticle(NewArticle)
      }
    })
    this.props.handleCancel()
  };

  handleArticleUpdate = () => {
    //console.log(this.state)
    const NewArticle = this.props.article
    NewArticle.created_at = this.state.created_at
    NewArticle.title = this.state.title
    NewArticle.content = this.state.content
    NewArticle.img = this.state.img
    const firebase = new Fire(error => {
      if (error) {
        this.setState({ error: error });
      } else {
        firebase.updateArticle(NewArticle)
      }
    })
    this.props.handleCancel()
  };

  handleChange = (e) => {
    //console.log(e)
    if (e.target.name === 'title') {
      this.setState({ title: e.target.value })
    } else if (e.target.name === 'content') {
      this.setState({ content: e.target.value })
    } else if (e.target.name === 'img') {
      this.setState({ img: e.target.value })
    }
  }
  render() {
    const { visible, handleCancel, titre } = this.props;
    return (
      <Modal
        title={titre}
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="Valider" type="primary" onClick={this.props.article.id === undefined ? this.handleArticleAdd : this.handleArticleUpdate}>
            Valider
          </Button>
        ]}>
        <ArticleForm title={this.state.title} content={this.state.content} img={this.state.img} handleChange={this.handleChange} />
      </Modal>
    );
  }
}
