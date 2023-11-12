import { createBrowserRouter } from 'react-router-dom';

import Applicants from '@/pages/Applicants';
import GeneralConsultation from '@/pages/GeneralConsultation';
import Groups from '@/pages/Groups';
import Login from '@/pages/Login';
import Processes from '@/pages/Processes';
import ProcessesTypes from '@/pages/ProcessesTypes';
import Signatures from '@/pages/Signatures';
import Tasks from '@/pages/Tasks';
import TaskTypes from '@/pages/TaskTypes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/processos',
    element: <Processes />,
  },
  {
    path: '/tarefas',
    element: <Tasks />,
  },
  {
    path: '/assinaturas',
    element: <Signatures />,
  },
  {
    path: '/consulta-geral',
    element: <GeneralConsultation />,
  },
  {
    path: '/tipos-de-processos',
    element: <ProcessesTypes />,
  },
  {
    path: '/tipos-de-tarefas',
    element: <TaskTypes />,
  },
  {
    path: '/solicitantes',
    element: <Applicants />,
  },
  {
    path: '/grupos',
    element: <Groups />,
  },
]);
