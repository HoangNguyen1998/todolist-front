import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

import "./index.scss";

const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        margin: "30px"
    }}>
      <Form
        name="basic"

        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
