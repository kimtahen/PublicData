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

const Gangneung = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              강원도강릉예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CImg
                // src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=f9a06d00-db09-11da-a738-000001010d15&fileSn=20110310152551"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol>
          <CCard>
            <CCardHeader>
              정보

            </CCardHeader>
            <CCardBody>
              <p className="muted">
                주소 : 강원도 강릉시 금평로(구정면) 314-38
              </p>
              <p className="muted">
                연락처 :
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`강원도 강릉시 금평로(구정면) 314-38`} />

      <Board target={`board4`} name="강원도강릉예비군훈련장게시판" />

    </>
  )



}
export default Gangneung
