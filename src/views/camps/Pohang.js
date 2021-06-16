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

const Pohang = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              경상도포항예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CLink
                href="https://www.donga.com/news/Society/article/all/20200105/99084761/1"
                target="_blank" style={{ width: "100%" }}
              >
                예비군 동원훈련 ‘1년 단축’ 앞둔 軍, 동원 필요 규모 파악중
              </CLink>
              <br />

              <CImg
                src="https://dimg.donga.com/wps/NEWS/IMAGE/2020/01/05/99084737.2.jpg"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>

        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              경상도포항예비군훈련장
            </CCardHeader>
            <CCardBody>
              {/* <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=f9a06d00-db09-11da-a738-000001010d15&fileSn=20110310152551"
                fluid
               className="mb-2" style={{width : "100%"}}
              /> */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              정보

            </CCardHeader>
            <CCardBody>
              <p className="muted">
                주소 : 경상북도 포항시 남구 도구길(동해면) 33
              </p>
              <p className="muted">
                연락처 :
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`경상북도 포항시 남구 도구길 33`} />

      <Board target={`board17`} name="경상도포항예비군훈련장게시판" />

    </>
  )



}
export default Pohang
