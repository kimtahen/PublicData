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

const Jeju = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              제주시예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CLink
                href="http://www.headlinejeju.co.kr/news/articleView.html?idxno=360467"
                target="_blank" style={{ width: "100%" }}
              >
                정제원 제주병무청장, 예비군 동원훈련장 방문
              </CLink>
              <br />

              <CImg
                src="http://www.headlinejeju.co.kr/news/photo/201904/360467_257005_1245.jpg"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>

        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              제주시예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=bcadbb20-b29d-11e5-ae7d-00000b022570&fileSn=20160104134832"
                fluid
                style={{ width: '100%' }}
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
              정보

            </CCardHeader>
            <CCardBody>
              <p className="muted">
                주소 : 제주특별자치도 제주시 종천길 60
              </p>
              <p className="muted">
                연락처 : 064-905-3754
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`제주특별자치도 제주시 종천길 60`} />

      <Board target={`board12`} name="제주시예비군훈련장게시판" />

    </>
  )



}
export default Jeju
