import React from 'react';
import { Table } from "antd";
import axios from 'axios';

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
    },
    {
      title: "Cache Timeout",
      dataIndex: "cache_timeout",
    },
  ];


export default class DeviceList extends React.Component {
  state = {
    devices: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/devices`)
      .then(res => {
        const devices = res.data;
        this.setState({ devices });
      })
  }

  render() {
    return (
      <Table columns={columns} 
      dataSource={this.state.devices}/>
    )
  }
}
