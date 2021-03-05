import { Form, Input, Button } from "antd";
import axios from 'axios';
import "../../styles/Forms.less";

const SystemParameters = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);

    const devices = {
        name: values.name,
      };

    const port = 'http://localhost:8000/' + devices.name +'/system_parameters'
      
      axios.post(port)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch((e) => {
            console.log(e);
        })

  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form className="Form" form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <div className="request-body">
        <Form.Item>
          <div className="btns">
            <Button type="primary" htmlType="submit">
              Add
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Cancel
            </Button>
          </div>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SystemParameters;