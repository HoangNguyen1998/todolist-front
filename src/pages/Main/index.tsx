import React from "react";
import { Input, Button, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import TodoItem from "../TodoItem";
import "./index.scss";

const data = [
  {
    title: "Work",
    description: "Work on Vinfast project",
    status: "to do",
  },
  {
    title: "Play game",
    description: "Play LOL",
    status: "to do",
  },
  {
    title: "Watch TV",
    description: "Watch movie on TV",
    status: "in progress",
  },
  {
    title: "Work out",
    description: "Work out 30 minutes",
    status: "in progress",
  },
  {
    title: "Eat",
    description: "Eat something",
    status: "done",
  },
  {
    title: "Learn",
    description: "Learn TS",
    status: "done",
  },
];

const Main: React.FC = () => {
  const renderListToDo = () => {
    return data.map((item, index) => {
      if (item.status == "to do") {
        return <TodoItem item={item} />;
      }
    });
  };
  return (
    <div className="main-container">
      <div className="header">TO DO LIST</div>
      <div className="actions-container">
        <Input.Search className="input-search" placeholder="Search task" />
        <Button
          className="btn-add"
          type="primary"
          shape="round"
          icon={<PlusOutlined />}
        >
          Add task
        </Button>
      </div>
      <div className="board-container">
        <Row className="board-container__row" gutter={16}>
          <Col xs={24} lg={8} className="board-container__column1">
            <div className="header-column">To do</div>
            <div>{renderListToDo()}</div>
          </Col>
          <Col xs={24} lg={8} className="board-container__column2">
            <div className="header-column">In Progress</div>
          </Col>
          <Col xs={24} lg={8} className="board-container__column3">
            <div className="header-column">Done</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Main;
