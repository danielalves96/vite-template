import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer className="text-center">
      Printer do Brasil ©{new Date().getFullYear()}
    </Footer>
  );
};

export default AppFooter;
