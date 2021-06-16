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

const Gimpo = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              경기도김포예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CLink
                href="http://m.igimpo.com/news/articleView.html?idxno=25786"
                target="_blank" style={{ width: "100%" }}
              >
                지역 지키는 첨병, 우리는 특전 예비군!
              </CLink>
              <br />

              <CImg
                src="http://www.igimpo.com/news/photo/201110/25786_12382_35.jpg"
                fluid
                className="mb-2" style={{ width: "100%" }}
              />
            </CCardBody>
          </CCard>

        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              경기도김포예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=dcbf8750-fe4d-11de-bc66-000001010d0c&fileSn=20160926143039"
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
              정보

            </CCardHeader>
            <CCardBody>
              <p className="muted">
                주소 : 경기도 김포시 군하로(월곶면) 123
              </p>
              <p className="muted">
                연락처 : 032-454-6951
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`경기도 김포시 군하로 123`} />

      <Board target={`board5`} name="경기도김포예비군훈련장게시판" />

    </>
  )



}
export default Gimpo
