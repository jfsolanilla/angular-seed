import {DashboardComponent} from './dashboard.component';
import {SideMenuComponent} from '../../../common/components/side-menu/side-menu.component';
import {VideoDashboardComponent} from '../../../common/components/video-dashboard/video-dashboard.component';

export const state = {
  name: 'dashboard',
  url: '/dash',
  views: {
    menu: {
      component: VideoDashboardComponent
    },
    $default: {
      component: DashboardComponent
    }
  },
  data: {
    // requiresAuth: true
  }
};
