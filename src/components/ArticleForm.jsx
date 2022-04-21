import React, { Component } from 'react'
import { Form, Input } from 'antd'

export default class ArticleForm extends Component {
  render() {
    const { title, content, handleChange, img } = this.props;
    const { TextArea } = Input;
    return (
      <Form >
        <label htmlFor={"title"}>Titre : </label>
        <Input type="text" name="title" id="title" value={title} onChange={handleChange} />
        <label htmlFor={"content"}>Contenue : </label>
        <TextArea rows={4} type="text" name="content" id="content" value={content} onChange={handleChange} />
        <label htmlFor={"img"}>Image : </label>
        <Input type="text" name="img" id="img" value={img} onChange={handleChange} />
      </Form>
    )
  }
}
