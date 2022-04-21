import React, { Component } from 'react'
import { Modal} from 'antd';
import CommentButton from './CommentButton';
import CommentDrawer from './CommentDrawer';

export default class ArticleViewMoreModal extends Component {
  constructor() {
    super();
    this.state = {
      isCommentDrawerVisible: false,
    }
  }
  render() {
    const { visible, handleReturn, titre, article } = this.props;
    //(article);
    return (
      <Modal
        title={titre}
        visible={visible}
        onCancel={handleReturn}
        footer={[
              <CommentButton
                key = {"Comment"+this.props.article.id}
                content={this.props.article.comments.length + " Commentaire"} 
                size="large"
                shape="round"
                title="Ce Bouton permet d'ajouter un article"
                handleclick={() => this.setState({ isCommentDrawerVisible: true})}
              />
        ]}>
        <p>{this.props.article.content}</p> 
        {this.state.isCommentDrawerVisible &&
              <CommentDrawer 
                visible={this.state.isCommentDrawerVisible}
                article={this.props.article}
                handleReturn={() => this.setState({ isCommentDrawerVisible: false })}
              />
        }
      </Modal>
    );
  }
}

