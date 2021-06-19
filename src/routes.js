import React from 'react';
const Home = React.lazy(() => import('./views/dashboard/Dashboard'));
const Test = React.lazy(() => import('./views/info/Test'));
const Intro = React.lazy(() => import('./views/info/Intro'));
const Training = React.lazy(() => import('./views/info/Training'));
const Free = React.lazy(() => import('./views/info/Free'));

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
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/home', name: 'Home', component: Home },
  { path: '/info', exact: true, name: 'TestPage', component: Test },
  { path: '/info/Intro', name: 'Intro', component: Intro },
  { path: '/info/Training', name: 'Training', component: Training },
  { path: '/info/Free', name: 'Free', component: Free },

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
