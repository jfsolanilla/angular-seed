import {DashboardComponent} from './dashboard.component';
import {SideMenuComponent} from '../../../common/components/side-menu/side-menu.component';

export const state = {
  name: 'dashboard',
  url: '/dash',
  views: {
    menu: {
      component: SideMenuComponent
    },
    $default: {
      component: DashboardComponent
    }
  },
  data: {
    // requiresAuth: true
  }
};
