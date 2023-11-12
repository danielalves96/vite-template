import { Tabs } from 'antd';

import { TableDemo } from '@/components/TableDemo';
import { Table2 } from '@/components/TableDemo2';

const onChange = (key: string) => {
  console.log(key);
};

interface TableProps {
  title: string;
  component: JSX.Element;
}

const tableContent = [
  {
    title: 'Tabela 1',
    component: <TableDemo />,
  },
  {
    title: 'Tabela 2',
    component: <Table2 />,
  },
];

const TabsDemo: React.FC = () => (
  <Tabs
    type="card"
    size="large"
    items={tableContent.map((item: TableProps) => {
      return {
        label: item.title,
        key: item.title,
        children: item.component,
      };
    })}
    onChange={onChange}
  />
);

export default TabsDemo;
