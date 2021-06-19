import React from 'react'
import CIcon from '@coreui/icons-react'
import { freeSet, brandSet } from '@coreui/icons'
import Seoul from '../customicon/Seoul.svg'
import Busan from '../customicon/Busan.svg'
import Daejeon from '../customicon/Daejeon.svg'
import Gangwon from '../customicon/Gangwon.svg'
import Gwangju from '../customicon/Gwangju.svg'
import Gyeonggi from '../customicon/Gyeonggi.svg'
import Incheon from '../customicon/Incheon.svg'
import Jeju from '../customicon/Jeju.svg'
import Sejong from '../customicon/Sejong.svg'
import Ulsan from '../customicon/Ulsan.svg'
import Daegu from '../customicon/Daegu.svg'
import ChungcheongNorth from '../customicon/ChungcheongNorth.svg'
import ChungcheongSouth from '../customicon/ChungcheongSouth.svg'
import GyeongsangNorth from '../customicon/GyeongsangNorth.svg'
import GyeongsangSouth from '../customicon/GyeongsangSouth.svg'
import JeollaNorth from '../customicon/JeollaNorth.svg'
import JeollaSouth from '../customicon/JeollaSouth.svg'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Test',
    to: '/info',
    icon: <img src={Seoul} width="20" height="20" style={{ marginRight: "20px" }} />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/',
    icon: <CIcon name="cilHome" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['정보 게시판 ']
  },
  {
    _tag: 'CSidebarNavItem',
    name: '소개',
    to: '/info/Intro',
    icon: <CIcon content={freeSet.cilInfo} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: '교육훈련',
    to: '/info/Training',
    icon: <CIcon content={freeSet.cilCompress} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: '자유게시판',
    to: '/info/Free',
    icon: <CIcon content={freeSet.cilGroup} customClasses="c-sidebar-nav-icon" />,
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['훈련장 게시판']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '서울특별시',
    route: '/Seoul',
    //route names should be different, as to avoid leaving multiple dropdowns open at the same time
    icon: <img src={Seoul} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '서초과학화예비군훈련장',
        to: '/camps/Seocho',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '부산광역시',
    route: '/Busan',
    icon: <img src={Busan} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '부산 해운대구 예비군훈련장',
        to: '/camps/Haeundae',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '부산 부산진구 예비군훈련장',
        to: '/camps/Jin',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '대구광역시',
    route: '/Daeugu',
    icon: <img src={Daegu} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '대구 동구 예비군훈련장',
        to: '/camps/Dong',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '대구 북구 예비군훈련장',
        to: '/camps/Buk',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '인천광역시',
    route: '/Incheon',
    icon: <img src={Incheon} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '인천 미추홀구 예비군훈련장',
        to: '/camps/Michuhol',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '인천 서구 예비군훈련장',
        to: '/camps/Seo',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '광주광역시',
    route: '/Gwangju',
    icon: <img src={Gwangju} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '광주 광산구 예비군훈련장',
        to: '/camps/Gwangsan',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '대전광역시',
    route: '/Daejeon',
    icon: <img src={Daejeon} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '대전 유성구 예비군훈련장',
        to: '/camps/Yuseong',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '대전 대덕구 예비군훈련장',
        to: '/camps/Daedeok',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '울산광역시',
    route: '/Ulsan',
    icon: <img src={Ulsan} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '울산 울주군 예비군훈련장',
        to: '/camps/Ulju',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '세종특별자치시',
    route: '/Sejong',
    icon: <img src={Sejong} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '세종시 예비군훈련장',
        to: '/camps/Sejong',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '경기도',
    route: '/Gyeonggi',
    icon: <img src={Gyeonggi} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '일산 예비군훈련장',
        to: '/camps/Ilsan',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '김포 예비군훈련장',
        to: '/camps/Gimpo',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '강원도',
    route: '/Gangwon',
    icon: <img src={Gangwon} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '만종 예비군훈련장',
        to: '/camps/Manjong',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '강릉시 예비군훈련장',
        to: '/camps/Gangneung',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '충청북도',
    route: '/ChungcheongNorth',
    icon: <img src={ChungcheongNorth} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '양수리 예비군훈련장',
        to: '/camps/Yangsuri',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '충청남도',
    route: '/ChungcheongSouth',
    icon: <img src={ChungcheongSouth} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '논산/계룡 예비군훈련장',
        to: '/camps/Nonsan',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '전라북도',
    route: '/JeollaNorth',
    icon: <img src={JeollaNorth} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '군산 예비군훈련장',
        to: '/camps/Gunsan',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '전라남도',
    route: '/JeollaSouth',
    icon: <img src={JeollaSouth} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '광양 예비군훈련장',
        to: '/camps/Gwangyang',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '경상북도',
    route: '/GyeongsangNorth',
    icon: <img src={GyeongsangNorth} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '경산 예비군훈련장',
        to: '/camps/Gyeongsan',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '포항 예비군훈련장',
        to: '/camps/Pohang',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '경상남도',
    route: '/GyeongsangSouth',
    icon: <img src={GyeongsangSouth} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '김해 예비군훈련장',
        to: '/camps/Gimhae',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '제주도',
    route: '/Jeju',
    icon: <img src={Jeju} width="20" height="20" style={{ marginRight: "20px" }} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '제주시 예비군훈련장',
        to: '/camps/Jeju',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '서귀포 예비군훈련장',
        to: '/camps/Seogwipo',
      }
    ],
  },
]

export default _nav
