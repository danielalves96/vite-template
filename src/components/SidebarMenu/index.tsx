import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import { menuItems } from './items';

export type MenuItem = Required<MenuProps>['items'][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const SidebarMenu: React.FC = () => {
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    const path = `/${e.key}`;
    navigate(path);
  };
  return (
    <Menu
      className="mt-4"
      theme="light"
      defaultSelectedKeys={['1']}
      mode="inline"
      items={menuItems}
      onClick={onClick}
    />
  );
};

export default SidebarMenu;
