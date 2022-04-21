import { Tooltip, Button } from 'antd';
import React from "react"

class CommentButton extends React.Component {
    render() {
        const { size, shape, content, handleclick } = this.props;
        return (
            <div>
                <Tooltip title="Ce Boutton permet de voir et ajouter un commentaire">
                    <Button type="text" size={size} onClick={handleclick} shape={shape}>{content}</Button>
                </Tooltip>
            </div>
        );
    }
}

export default CommentButton;