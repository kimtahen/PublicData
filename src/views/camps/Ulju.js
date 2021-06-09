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

const Ulju = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              울산울주군예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CLink
                href="https://m.news1.kr/articles/?953640"
                target="_blank"
              >
                [단신] 울주군, 예비군 육성지원 우수지자체 감사패 받아
		          </CLink>
              <br />

              <CImg
                src="https://image.news1.kr/system/photos/2012/12/31/336564/article.jpg/dims/optimize?1356931896"
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
              울산울주군예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=96f91cd0-e098-11da-9a0d-000001010d15&fileSn=20170425085459"
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
                주소 : 울산 울주군 언양읍 반천리 곰재길 229길(반천리923번지) 중구예비군훈련장
  	      	  </p>
              <p className="muted">
                연락처 : 052-263-4397
  	      	  </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`울산 울주군 언양읍 반천리 곰재길 229길`} />

      <Board target={`board11`} />

    </>
  )



}
export default Ulju
