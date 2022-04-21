import React, { Component } from 'react'
import { Comment, Avatar } from 'antd';
import DeleteCommentButton from './DeleteCommentButton';
import UpdateCommentButton from './UpdateCommentButton';

export default class CommentCard extends Component {
  render() {
    const { author, content, article, commentaire, dateCreation } = this.props;
    const date = dateCreation.seconds ? dateCreation.toDate().toLocaleString() :  dateCreation.toLocaleString();  
    return (

      <Comment
        key={author}
        author={author}
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt={author} />}
        content={content}
        datetime={"Le " + date}
        actions={[
          <DeleteCommentButton
            size="large"
            shape="round"
            title="Ce Bouton permet de supprimer un Commentaire"
            article={article}
            comment={commentaire}
          />,
          <UpdateCommentButton
            size="large"
            shape="round"
            title="Ce Bouton permet de modifier un commentaire"
            article={article}
            comment={commentaire}
            handleClick={this.props.handleClickModif}
          />,
        ]}
      />
    )
  }
}
