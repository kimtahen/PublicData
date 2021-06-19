import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CImg,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import Board from '../../api/Board'
import Map from '../../api/Map';
import Rating from '../../api/Rating';

const Ilsan = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>경기도일산예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CLink
                href="https://news.joins.com/article/17257601"
                target="_blank" style={{ width: "100%" }}
              >
                적을 결박하라
              </CLink>
              <br />

              <CImg
                src="https://pds.joins.com/news/component/newsis/201503/02/NISI20150302_0010677041_web.jpg"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>

        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>경기도일산예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=c45357d0-ca7d-11da-b44f-000001010d15&fileSn=20170818185157"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>정보</h1>

            </CCardHeader>
            <CCardBody>
              <p className="muted">
                주소 : 경기도 고양시 일산서구 덕이로(덕이동) 104-36
              </p>
              <p className="muted">
                연락처 : 031-864-9742
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`경기도 고양시 일산서구 덕이로 104-36`} />

      <Rating target={'board11'} />

      <Board target={`board11`} name="경기도일산예비군훈련장게시판" />

    </>
  )



}
export default Ilsan
