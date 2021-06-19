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

const Buk = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>대구북구예비군훈련장</h1>
            </CCardHeader>
            <CCardBody className="text-center">
              <CLink
                href="https://www.idaegu.co.kr/news/articleView.html?idxno=244017"
                target="_blank"
              >
                육군 50사단, 예비군훈련 돌입
              </CLink>
              <br />

              <CImg
                src="https://www.idaegu.co.kr/news/photo/first/201803/img_244017_1.jpg"
                fluid
                className="mb-2" style={{ width: "100%" }}
                style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>

        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>대구북구예비군훈련장</h1>
            </CCardHeader>
            <CCardBody className="text-center">
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=f9a06d00-db09-11da-a738-000001010d15&fileSn=20110310152551"
                fluid
                className="mb-2" style={{ width: "100%" }}
                style={{ width: "100%" }}
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
                주소 : 대구광역시 북구 구리로(국우동) 183-35
              </p>
              <p className="muted">
                연락처 : 053-322-5981
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`대구광역시 북구 구리로 183-35`} />

      <Rating target={'board1'} />

      <Board target={`board1`} name="대구북구예비군훈련장게시판" />

    </>
  )



}
export default Buk
