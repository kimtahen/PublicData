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

const Nonsan = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              충청도논산예비군훈련장
            </CCardHeader>
            <CCardBody>
              {/* <CLink
                href="https://www.idaegu.co.kr/news/articleView.html?idxno=244017"
                target="_blank"
              >
                육군 50사단, 예비군훈련 돌입
		          </CLink>
              <br />

              <CImg
                src="https://www.idaegu.co.kr/news/photo/first/201803/img_244017_1.jpg"
                fluid
                className="mb-2"
              /> */}
            </CCardBody>
          </CCard>

        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              충청도논산예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=8d12e7a0-c856-11da-89d4-000001010d15&fileSn=20081027092935"
                fluid
                className="mb-2"
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              정보
    		      <DocsLink name="CCard" />
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

      <Board target={`board19`} />

    </>
  )



}
export default Nonsan
