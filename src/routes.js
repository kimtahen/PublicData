import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const Test = React.lazy(() => import('./views/test/Test'));
const Videos = React.lazy(() => import('./views/test/Videos'));

const Seocho = React.lazy(() => import('./views/camps/Seocho'));
const Haeundae = React.lazy(() => import('./views/camps/Haeundae'));
const Jin = React.lazy(() => import('./views/camps/Jin'));
const Dong = React.lazy(() => import('./views/camps/Dong'));
const Buk = React.lazy(() => import('./views/camps/Buk'));

const Michuhol = React.lazy(() => import('./views/camps/Michuhol'));
const Seo = React.lazy(() => import('./views/camps/Seo'));
const Gwangsan = React.lazy(() => import('./views/camps/Gwangsan'));
const Yuseong = React.lazy(() => import('./views/camps/Yuseong'));
const Daedeok = React.lazy(() => import('./views/camps/Daedeok'));

const Ulju = React.lazy(() => import('./views/camps/Ulju'));
const Sejong = React.lazy(() => import('./views/camps/Sejong'));
const Ilsan = React.lazy(() => import('./views/camps/Ilsan'));
const Gimpo = React.lazy(() => import('./views/camps/Gimpo'));
const Hogae = React.lazy(() => import('./views/camps/Hogae'));

const Manjong = React.lazy(() => import('./views/camps/Manjong'));
const Gangneung = React.lazy(() => import('./views/camps/Gangneung'));
const Yangsuri = React.lazy(() => import('./views/camps/Yangsuri'));
const Nonsan = React.lazy(() => import('./views/camps/Nonsan'));
const Gunsan = React.lazy(() => import('./views/camps/Gunsan'));

const Gwangyang = React.lazy(() => import('./views/camps/Gwangyang'));
const Gyeongsan = React.lazy(() => import('./views/camps/Gyeongsan'));
const Pohang = React.lazy(() => import('./views/camps/Pohang'));
const Jeju = React.lazy(() => import('./views/camps/Jeju'));
const Seogwipo = React.lazy(() => import('./views/camps/Seogwipo'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },

  { path: '/test', exact: true, name: 'TestPage', component: Test },
  { path: '/test/', name: 'Videos', component: Videos },

  { path: '/camps/Seocho', name: 'Seocho', component: Seocho },
  { path: '/camps/Haeundae', name: 'Haeundae', component: Haeundae },
  { path: '/camps/Jin', name: 'Jin', component: Jin },
  { path: '/camps/Dong', name: 'Dong', component: Dong },
  { path: '/camps/Buk', name: 'Buk', component: Buk },

  { path: '/camps/Michuhol', name: 'Michuhol', component: Michuhol },
  { path: '/camps/Seo', name: 'Seo', component: Seo },
  { path: '/camps/Gwangsan', name: 'Gwangsan', component: Gwangsan },
  { path: '/camps/Yuseong', name: 'Yuseong', component: Yuseong },
  { path: '/camps/Daedeok', name: 'Daedeok', component: Daedeok },

  { path: '/camps/Ulju', name: 'Ulju', component: Ulju },
  { path: '/camps/Sejong', name: 'Sejong', component: Sejong },
  { path: '/camps/Ilsan', name: 'Ilsan', component: Ilsan },
  { path: '/camps/Gimpo', name: 'Gimpo', component: Gimpo },
  { path: '/camps/Hogae', name: 'Hogae', component: Hogae },

  { path: '/camps/Manjong', name: 'Manjong', component: Manjong },
  { path: '/camps/Gangneung', name: 'Gangneung', component: Gangneung },
  { path: '/camps/Yangsuri', name: 'Yangsuri', component: Yangsuri },
  { path: '/camps/Nonsan', name: 'Nonsan', component: Nonsan },
  { path: '/camps/Gunsan', name: 'Gunsan', component: Gunsan },

  { path: '/camps/Gwangyang', name: 'Gwangyang', component: Gwangyang },
  { path: '/camps/Gyeongsan', name: 'Gyeongsan', component: Gyeongsan },
  { path: '/camps/Pohang', name: 'Pohang', component: Pohang },
  { path: '/camps/Jeju', name: 'Jeju', component: Jeju },
  { path: '/camps/Seogwipo', name: 'Seogwipo', component: Seogwipo }


];

export default routes;
