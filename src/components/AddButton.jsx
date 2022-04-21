import { Tooltip, Button } from 'antd';
import React from "react"
import { FormOutlined } from '@ant-design/icons';

class AddButton extends React.Component {
    render() {
        const { size, shape, content, handleclick } = this.props;
        return (
            <div>
                <Tooltip placement="bottom"  title="Ce Bouton permet d'ajouter un article">
                    <Button type="text" style={{color: 'white'}} size={size} onClick={handleclick} icon={<FormOutlined />}>{content}</Button>
                </Tooltip>
            </div>
        );
    }
}

export default AddButton;