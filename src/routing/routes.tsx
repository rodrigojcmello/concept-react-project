import { RouteConfig } from 'react-router-config';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import { isAuth } from '../utils/route';

const routes: RouteConfig[] = [
  {
    component: Screen1,
    path: '/screen-1',
    key: 'screen1'
  },
  {
    component: isAuth(Screen2),
    path: '/screen-2',
    key: 'screen2'
  },
  {
    component: Screen3,
    path: '/screen-3',
    key: 'screen3'
  }
  // {
  //   component: Screen4,
  //   path: '/screen-4',
  //   key: 'screen3'
  // }
];

export default routes;
