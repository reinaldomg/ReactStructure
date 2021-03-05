import { Table } from "antd";

import dataDevice from "../../data/deviceList.js";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Port Name",
    dataIndex: "port_name",
  },
  {
    title: "Timeout Seconds",
    dataIndex: "timeout_seconds",
    sorter: {
      compare: (a, b) => a.timeout_seconds - b.timeout_seconds,
      multiple: 2,
    },
  },
  {
    title: "Cache Timeout",
    dataIndex: "cache_timeout",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

function listDevices() {
  return (
    <div>
    <Table columns={columns} dataSource={dataDevice} onChange={onChange} />
    <b>{dataDevice.data[0]} ASD</b>
    </div>
  );
}

export default listDevices;
