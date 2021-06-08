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

const Yangsuri = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              충청도양수리예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CLink
                href="https://www.youtube.com/watch?v=HvnhU_IqBtc"
                target="_blank"
              >
                [제53주년 예비군의 날] 육군 37사단, 예비군의 날 대통령 부대표창 수상
		          </CLink>
              <br />

              <CEmbed>
                <CEmbedItem iframe width="560" height="315" src="https://www.youtube.com/embed/HvnhU_IqBtc" />
              </CEmbed>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              충청도양수리예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=f9a06d00-db09-11da-a738-000001010d15&fileSn=20110310152551"
                fluid
                className="mb-2"
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              정보
    		      <DocsLink name="CCard" />
            </CCardHeader>
            <CCardBody>
              <p className="muted">
                주소 : 충청북도 옥천군 마암로 125-12
  	      	  </p>
              <p className="muted">
                연락처 : 031-773-6113
  	      	  </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`충청북도 옥천군 마암로 125-12`} />

      <Board target={`board18`} />

    </>
  )



}
export default Yangsuri
