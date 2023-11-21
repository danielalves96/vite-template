import { Layout } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import packageJson from '../../../package.json';

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Footer className="text-center">
      {t('components.footer.ENTERPRISE_NAME')}
      {new Date().getFullYear()} - v{packageJson.version}
    </Footer>
  );
};

export default AppFooter;
