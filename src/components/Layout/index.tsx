import { Layout } from 'antd';

import AppFooter from '@/components/Footer';
import AppHeader from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const { Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />
      <Layout>
        <Sidebar />
        <Layout>
          <Content className="bg-slate-200 p-6">
            <div className="p-6 bg-white rounded-lg">{children}</div>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
