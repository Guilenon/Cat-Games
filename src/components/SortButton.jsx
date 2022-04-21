import React, { Component } from 'react'
import { Dropdown, Menu, Tooltip, Button } from 'antd';
import { LineHeightOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';

export default class SortButton extends Component {
    render() {
        const { size, shape, content, title, handleSortAsc, handleSortDesc } = this.props
        const menu = (
            <Menu
                theme="dark">
                <Menu.Item>
                    <Button type="text" style={{ color: 'white' }} icon={<SortAscendingOutlined />} size="large" onClick={handleSortAsc} >
                        Date Croissante
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button type="text" style={{ color: 'white' }} icon={<SortDescendingOutlined />} size="large" onClick={handleSortDesc}>
                        Date Décroissant
                    </Button>
                </Menu.Item>
            </Menu>
        );
        return (
            <Tooltip placement="right" title={title} >
                <Dropdown overlay={menu} placement="bottomRight" arrow>
                    <Button disabled={true} type="text" style={{ color: 'white' }} size={size} icon={<LineHeightOutlined />}>{content}</Button>
                </Dropdown>
            </Tooltip>
        )
    }
}
