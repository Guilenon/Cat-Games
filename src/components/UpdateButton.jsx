import React, { Component } from 'react'
import { Tooltip, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
export default class UpdateButton extends Component {
  render() {
    const { size, shape, handleclick } = this.props;
    return (
      <div>
        <Tooltip title="Ce Bouton permet d'ajouter un article"  placement="bottom">
          <Button type="text" style={{ color: 'Black' }} size={size} onClick={handleclick} icon={<EditOutlined />} shape={shape}></Button>
        </Tooltip>
      </div>
    )
  }
}
