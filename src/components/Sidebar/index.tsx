import { Layout } from 'antd';
import { useState } from 'react';

import SidebarMenu from '@/components/SidebarMenu';

const { Sider } = Layout;
const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      theme="light"
      onCollapse={(value) => setCollapsed(value)}
    >
      <SidebarMenu />
    </Sider>
  );
};

export default Sidebar;
