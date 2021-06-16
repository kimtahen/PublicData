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

const Gunsan = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              전라도군산예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CLink
                href="http://m.dailyjeonbuk.com/news/articleView.html?idxno=149048"
                target="_blank" style={{ width: "100%" }}
              >
                군산, 제44주년 예비군의 날 맞이 국방부장관상 수상
              </CLink>
              <br />

              <CImg
                src="http://www.dailyjeonbuk.com/news/photo/201204/149048_99108_3456.jpg"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>

        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              전라도군산예비군훈련장
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
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              정보

            </CCardHeader>
            <CCardBody>
              <p className="muted">
                주소 : 전라북도 군산시 광월길(옥구읍) 89
              </p>
              <p className="muted">
                연락처 : 063-464-9117
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`전라북도 군산시 광월길 89`} />

      <Board target={`board6`} name="전라도군산예비군훈련장게시판" />

    </>
  )



}
export default Gunsan
