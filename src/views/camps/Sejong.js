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

const Sejong = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>세종시예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CLink
                href="https://www.ajunews.com/view/20150515171351039"
                target="_blank" style={{ width: "100%" }}
              >
                임상전 세종시의장, 예비군훈련장 안전점검
              </CLink>
              <br />

              <CImg
                src="https://image.ajunews.com/content/image/2015/05/15/20150515171408120411.jpg"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>

        </CCol>

        <CCol>
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>정보</h1>

            </CCardHeader>
            <CCardBody>
              <p className="muted">
                주소 : 세종특별자치시 봉산로(전동면) 345
              </p>
              <p className="muted">
                연락처 : 044-862-3213
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`세종특별자치시 봉산로 345`} />

      <Rating target={'board18'} />

      <Board target={`board18`} name="세종시예비군훈련장게시판" />

    </>
  )



}
export default Sejong
