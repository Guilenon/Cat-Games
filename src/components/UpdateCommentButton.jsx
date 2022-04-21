import React, { Component } from 'react'
import Fire from '../Fire';
import { Tooltip, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
export default class UpdateCommentButton extends Component {

  handleCommentDelete = () => {
    const NewComment = this.props.article
    for (var i = 0; i < NewComment.comments.length; i++) {
      if (NewComment.comments[i] === this.props.comment) {
        //console.log(NewComment.comments[i])
        NewComment.comments.splice(i, 1);
      }
    }
    // console.log(NewComment.comments)
    const firebase = new Fire(error => {
      if (error) {
        this.setState({ error: error });
      } else {
        firebase.updateArticle(NewComment)
        this.setState({ author: "", content: "" })
      }
    })
  };

  onClickUpdate = () => {
    this.props.handleClick();
    this.handleCommentDelete();
  };

  render() {
    const { size, shape,title } = this.props;
    return (
      <div>
        <a href="#anchor">
          <Tooltip title={title} placement="bottom">
            <Button type="text" style={{ color: 'Black' }} size={size} onClick={this.onClickUpdate} icon={<EditOutlined />} shape={shape}></Button>
          </Tooltip>
        </a>
      </div>
    )
  }
}
