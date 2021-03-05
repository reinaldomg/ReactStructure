import { Form, Input, Button } from "antd";
import "../../styles/Forms.less";

const Read = () => {
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
          name="memory_type"
          label="Memory Type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="value_type"
          label="Value Type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="offset_bytes"
          label="Offset Bytes"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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
        <Form.Item
          name="boolean_offset_bits"
          label="Boolean Offset (Bits)"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="string_length_bytes"
          label="String Length (Bytes)"
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

export default Read;
