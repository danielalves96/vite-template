import { Layout } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Footer className="text-center">
      {t('components.footer.ENTERPRISE_NAME')}
      {new Date().getFullYear()}
    </Footer>
  );
};

export default AppFooter;
