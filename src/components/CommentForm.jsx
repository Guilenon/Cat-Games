import React, { Component } from 'react'
import { Comment, Avatar, Form, Button, Input } from 'antd';

const { TextArea } = Input;

export default class CommentForm extends Component {

    render() {
        const { author, content, handleChange, handleClick,date } = this.props;
        //console.log(this.props)
        return (
            <Comment id="anchor"
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <>
                        <Form.Item >
                            <label htmlFor={"author"}>Auteur : </label>
                            <Input type="text" name="author" id="author" value={author} onChange={handleChange} />
                            <label htmlFor={"content"}>Contenue : </label>
                            <TextArea rows={4} type="text" name="content" id="content" value={content} onChange={handleChange} />
                        </Form.Item>
                        <Form.Item >
                            <Button htmlType="submit" type="primary" onClick={handleClick}>
                                Ajouter
                            </Button>
                        </Form.Item>
                    </>
                }
            />
        )
    }
}
