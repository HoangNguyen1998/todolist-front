import React from "react";
import { Dropdown, Menu } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import "./index.scss";

interface Props {
  item: {
    title: string;
    description: string;
    status: string;
  };
}

const TodoItem: React.FC<Props> = ({ item }) => {
  const renderMenu = () => {
    return (
      <Menu>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Delete</Menu.Item>
      </Menu>
    );
  };
  return (
    <div draggable className="item-container">
      <div className="item-container__title">{item.title}</div>
      <div>{item.description}</div>
      <div className="item-container__menu">
        <Dropdown overlay={renderMenu} placement="bottomCenter" arrow>
          <EllipsisOutlined />
        </Dropdown>
      </div>
    </div>
  );
};

export default TodoItem;
