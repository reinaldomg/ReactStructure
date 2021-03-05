import { Form, Input, Button, message } from "antd";
import axios from 'axios';
import "../../styles/Forms.less";

import dataDevice from "../../data/models/device.js";

/* var x = dataDevice();

    x.then((value) => {
      return value
    }) */

let y;

const AddSchedules = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);

    const devices = {
        name: values.name,
        device_name: values.device_name,
        every_seconds: values.every_seconds,
        webhook: values.webhook,
        memory_type: values.memory_type,
        value_type: values.value_type,
        offset_bytes: values.offset_bytes,
        block_number: values.block_number,
        boolean_offset_bits: values.boolean_offset_bits,
        string_length_bytes: values.string_length_bytes,
      };
  
      const sucess = () => {
        message.success("Schedule added");
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
    <div>
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
        name="device_name"
        label="Device Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="every_seconds"
        label="Every Seconds"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="webhook"
        label="Webhook"
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
    <div>
      <dataDevice/>
    </div>
    
    </div>
  );
};

export default AddSchedules;
