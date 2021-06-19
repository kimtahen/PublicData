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

const Nonsan = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>충청도논산예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=8d12e7a0-c856-11da-89d4-000001010d15&fileSn=20081027092935"
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
                주소 : 충청남도 논산시 연무로(연무읍) 53-16 논산예비군훈련장
              </p>
              <p className="muted">
                연락처 : 041-742-9852
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`충청남도 논산시 연무로 53-16`} />

      <Rating target={'board16'} />

      <Board target={`board16`} name="충청도논산예비군훈련장게시판" />

    </>
  )



}
export default Nonsan
