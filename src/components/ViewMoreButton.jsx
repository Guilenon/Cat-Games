import { Tooltip, Button } from 'antd';
import React from "react"

class ViewMoreButton extends React.Component {
    render() {
        const { size, title, shape, handleclick } = this.props;
        return (
            <div style={{ textAlign: 'right' }}>
                <Tooltip placement="bottom" title={title}>
                    <Button type="text" style={{ color: 'Grey' }} size={size} onClick={handleclick} shape={shape}>Voir plus ....</Button>
                </Tooltip>
            </div>
        );
    }
}

export default ViewMoreButton;