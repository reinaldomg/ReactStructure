import { Button, Form, Input, Popconfirm, message } from "antd";
import "../../styles/Forms.less";

const text = "Are you sure to delete this schedule?";

const confirm = () => {
  message.info("Schedule deleted");
};

const DeleteSchedules = () => {
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
      <Form.Item>
        <div className="btns">
          <Popconfirm
            title={text}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" htmlType="submit">
              Delete
            </Button>
          </Popconfirm>
          <Button htmlType="button" onClick={onReset}>
            Cancel
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default DeleteSchedules;
