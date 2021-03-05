import { Form, Input, Button, message, Card } from "antd";
import axios from "axios";
import "../../styles/Forms.less";

//import Dev from '../../data/models/device.js';

const UpdateDevices = () => {
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
      message.success("Device updated");
    };

    const error = () => {
      message.error("An error ocurred");
    };

    var path = `http://localhost:8000/devices/` + devices.name;

    try {
      axios
        .put(
          path,
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

    axios.get('http://localhost:8000/devices')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  };

  return (
    <div className="Box">
      <div className='Box_1'>
      <Form
        className="Form"
        form={form}
        name="control-hooks"
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
          on
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
              Update
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Cancel
            </Button>
          </div>
        </Form.Item>
      </Form>
      </div>
      <div className='Box_2'>
      <Card
        className='Card'
        title="{Dev.devices.name}"
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      </div>
    </div>
  );
};

export default UpdateDevices;
