import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  CalendarOutlined,
  FileOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import './styles/Landing.less'

import Logo from "./images/logo.png";

import addDevice from "./pages/devices/addDevices.js";
import UpdateDevice from "./pages/devices/updateDevices.js";
import listDevice from "./pages/devices/listDevices.js";
import read from "./pages/operations/read.js";
import blockInfo from "./pages/operations/rBlockInfo.js";
import blockRead from "./pages/operations/rBlockRead.js";
import listDirectory from "./pages/operations/rListDirectory.js";
import systemParameters from "./pages/operations/rSystemParameters.js";
import addSchedule from "./pages/schedules/addSchedules.js";
import deleteSchedule from "./pages/schedules/deleteSchedule.js";
import listSchedule from "./pages/schedules/listSchedules.js";
import backup from './pages/backup/backupDownload.js';
import testDevices from './pages/devices/testDevices.js';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function App() {
  const [collapsed, setCollapsed] = useState(false); 

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed);
  };

  return (
    <Router>
    <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="light" collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo-menu"> 
                  <a href="/">
                    <img src={Logo} alt="Papudê"/>
                  </a>
                </div>
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
              <SubMenu key="sub1" icon={<DesktopOutlined />} title="Devices">
                <Menu.Item key="5">
                List
                <Link to="/devices"/>
                </Menu.Item>
                <Menu.Item key="3">
                  Add
                  <Link to="/devices/add"/>
                </Menu.Item>
                <Menu.Item key="4">
                  Update
                  <Link to="/devices/update"/>
                  </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<SettingOutlined />} title="Operations">
              <Menu.Item key="6">
                Block Info
                <Link to="/operations/block_info"/>
                </Menu.Item>
              <Menu.Item key="7">
                Block Read
                <Link to="/operations/block_read"/>
                </Menu.Item>
              <Menu.Item key="8">
                System Parameters
                <Link to="/operations/system_parameters"/>
              </Menu.Item>
              <Menu.Item key="9">
                List Directory
                <Link to="/operations/list_directory"/>
              </Menu.Item>
              <Menu.Item key="10">
                Read
                <Link to="/operations/read"/>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<CalendarOutlined />} title="Schedules">
              <Menu.Item key="11">
                List
                <Link to="/schedules"/>
                </Menu.Item>
              <Menu.Item key="12">
                Add
                <Link to="/schedules/add"/>
              </Menu.Item>
              <Menu.Item key="13">
                Delete
                <Link to="/schedules/delete"/>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="14" icon={<FileOutlined />}>
              Database Backup
              <Link to="/backup"/>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Route exact path="/devices/add" component={addDevice} />
                <Route exact path="/devices/update" component={UpdateDevice} />
                <Route exact path="/devices" component={testDevices} />
                <Route exact path="/operations/read" component={read} />
                <Route exact path="/operations/block_info" component={blockInfo} />
                <Route exact path="/operations/block_read" component={blockRead} />
                <Route exact path="/operations/system_parameters" component={systemParameters} />
                <Route exact path="/operations/list_directory" component={listDirectory} />
                <Route exact path="/schedules/add" component={addSchedule} />
                <Route exact path="/schedules/delete" component={deleteSchedule} />
                <Route exact path="/schedules" component={listSchedule} />
                <Route exact path="/backup" component={backup} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      </Layout> 
      </Router>  
  );
}

export default App;