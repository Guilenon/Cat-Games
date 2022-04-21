import React, { Component } from 'react'
import Fire from '../Fire';
import { Tooltip, Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default class DeleteCommentButton extends Component {


    handleCommentDelete = () => {
        const NewComment = this.props.article
        for (var i = 0; i < NewComment.comments.length; i++) {
            if (NewComment.comments[i] === this.props.comment) {
                //console.log(NewComment.comments[i])
                NewComment.comments.splice(i, 1);
            }
        }
        //console.log(NewComment.comments)
        const firebase = new Fire(error => {
            if (error) {
                this.setState({ error: error });
            } else {
                firebase.updateArticle(NewComment)
                this.setState({ author: "", content: "" })
            }
        })
    };
    render() {
        const { size, shape, title } = this.props;
        return (
            <div>
                <Tooltip title={title} placement="bottom">
                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={this.handleCommentDelete}
                    >
                        <Button type="text" style={{ color: 'red' }} size={size} icon={<DeleteOutlined />} shape={shape}></Button>
                    </Popconfirm>
                </Tooltip>
            </div>
        )
    }
}
