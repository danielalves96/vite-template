import { Layout } from 'antd';
import React from 'react';

import logo from '@/assets/logoGray.png';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header className="flex items-center bg-amber-400 p-6">
      <div className=" flex text-white text-xl">
        <img src={logo} alt="logo" width={200} />
      </div>
    </Header>
  );
};

export default AppHeader;
