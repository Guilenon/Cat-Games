import React, { Component } from 'react'
import Fire from '../Fire';
import { Tooltip, Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default class DeleteButton extends Component {
    //Suppression de l'article
    handleDelete = () => {
        //console.log(this.props.article)
        const firebase = new Fire(error => {
            if (error) {
                this.setState({ error: error });
            } else {
                firebase.deleteArticle(this.props.article);
            }
        })
    };
    render() {
        const { size, shape } = this.props;
        return (
            <div>
                <Tooltip placement="bottom" title="Ce Bouton permet d'ajouter un article">
                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={this.handleDelete}
                    >
                        <Button type="text" style={{ color: 'red' }} size={size} icon={<DeleteOutlined />} shape={shape}></Button>
                    </Popconfirm>
                </Tooltip>
            </div>
        )
    }
}
