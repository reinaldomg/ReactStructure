import { Form, Input, Button, message } from "antd";
import axios from "axios";
import "../../styles/Forms.less";

const AddDevices = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);

    const devices = {
      name: values.name,
      port_name: values.port_name,
      timeout_seconds: values.timeout_seconds,
      cache_timeout: values.cache_timeout,
    };

    const sucess = () => {
      message.success("Device added");
    };

    const error = () => {
      message.error("An error ocurred");
    };

    try {
      axios
        .post(
          `http://localhost:8000/devices`,
          {
            name: devices.name,
            port_name: devices.port_name,
            timeout_seconds: devices.timeout_seconds,
            cache_timeout: devices.cache_timeout,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          sucess();
          form.resetFields();
        });
    } catch (e) {
      //console.log(e.message);
      error();
    }
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
      <Form.Item
        name="port_name"
        label="Port"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="timeout_seconds"
        label="Timeout Seconds"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="cache_timeout"
        label="Cache Timeout"
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
    </Form>
  );
};

export default AddDevices;
