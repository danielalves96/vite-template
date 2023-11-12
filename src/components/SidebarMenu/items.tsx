import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';

import { getItem, MenuItem } from '.';

export const menuItems: MenuItem[] = [
  getItem('Processos', 'processos', <PieChartOutlined />),
  getItem('Tarefas', 'tarefas', <PieChartOutlined />),
  getItem('Assinaturas', 'assinaturas', <PieChartOutlined />),
  getItem('Consulta Geral', 'consulta-geral', <DesktopOutlined />),
  getItem('Tipos de Processos', 'tipos-de-processos', <DesktopOutlined />),
  getItem('Tipos de Tarefa', 'tipos-de-tarefas', <DesktopOutlined />),
  getItem('Solicitantes', 'solicitantes', <DesktopOutlined />),
  getItem('Grupos', 'grupos', <DesktopOutlined />),
];
