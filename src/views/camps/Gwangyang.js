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

const Gwangyang = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>전라도광양예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CLink
                href="http://www.gukjenews.com/news/articleView.html?idxno=728455"
                target="_blank" style={{ width: "100%" }}
              >
                광양시, 군부대․예비군 지휘관과 방위태세 점검
              </CLink>
              <br />

              <CImg
                src="https://cdn.gukjenews.com/news/photo/201706/728455_516211_4029.jpg"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>

        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>전라도광양예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CImg
                src=""
                fluid
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
              <h1 style={{ marginBottom: 0, }}>정보</h1>

            </CCardHeader>
            <CCardBody>
              <p className="muted">
                주소 : 전라남도 광양시 조양길(봉강면) 47-20 7391부대 4대대
              </p>
              <p className="muted">
                연락처 : 061-763-9569
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`전라남도 광양시 조양길 47-20`} />

      <Rating target={'board8'} />

      <Board target={`board8`} name="전라도광양예비군훈련장게시판" />

    </>
  )



}
export default Gwangyang
