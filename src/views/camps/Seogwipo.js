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

const Seogwipo = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              제주도서귀포예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CLink
                href="http://www.headlinejeju.co.kr/news/articleView.html?idxno=360467"
                target="_blank"
              >
                정제원 제주병무청장, 예비군 동원훈련장 방문
		          </CLink>
              <br />

              <CImg
                src="http://www.headlinejeju.co.kr/news/photo/201904/360467_257005_1245.jpg"
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
              제주도서귀포예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=cfc92740-a2f2-11e5-ab6c-00000b02256f&fileSn=20170829093430"
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
                주소 : 제주특별자치도 서귀포시 인정오름로(토평동) 144
  	      	  </p>
              <p className="muted">
                연락처 : 064-905-3803
  	      	  </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`제주특별자치도 서귀포시 인정오름로 144`} />

      <Board target={`board25`} />

    </>
  )



}
export default Seogwipo
