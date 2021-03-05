import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

function Backup(){
    return(
        <div>
        <h1>Download JSON database backup</h1>
        <Button theme="primary" icon={<DownloadOutlined/>}>Download</Button>
        </div>
    );
};

export default Backup;