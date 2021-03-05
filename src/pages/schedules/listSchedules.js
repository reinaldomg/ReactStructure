import { Table } from 'antd';

import dataDevice from "../../data/models/device.js";

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Port Name',
      dataIndex: 'port_name',
      sorter: {
        compare: (a, b) => a.port_name - b.port_name,
        multiple: 3,
      },
    },
    {
      title: 'Timeout Seconds',
      dataIndex: 'timeout_seconds',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'Cache Timeout',
      dataIndex: 'cache_timeout',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  }

function listDevices(){
    return(
    <Table columns={columns} dataSource={dataDevice.data} onChange={onChange} />
    );
};

export default listDevices;