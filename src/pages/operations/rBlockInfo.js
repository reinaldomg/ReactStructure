import { Form, Input, Button, Select } from "antd";
import "../../styles/Forms.less";

const {Option} = Select;

const BlockInfo = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
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
      <Form.Item
        name="block_type"
        label="Block Type"
        hasFeedback
        rules={[{ required: true, message: 'Please select your type' }]}
      >
        <Select placeholder="Please select a block type">
          <Option value="db">DB</Option>
          <Option value="sb">SB</Option>
          <Option value="pb">PB</Option>
          <Option value="fb">FB</Option>
          <Option value="sb">OB</Option>
          <Option value="sb">DX</Option>
          <Option value="sb">FX</Option>
        </Select>
      </Form.Item>
        <Form.Item
          name="block_number"
          label="Block Number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
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

export default BlockInfo;