import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CImg,
  CEmbed,
  CEmbedItem,
  CLink

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import Board from '../../api/Board'
import Map from '../../api/Map';
import Rating from '../../api/Rating';

const Manjong = () => {
  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>강원도만종예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CEmbed>
                <CEmbedItem iframe width="560" height="315" src="https://www.youtube.com/embed/eqZKfwRSX0g" />
              </CEmbed>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>강원도만종예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CLink
                href="http://chosunnews.co.kr/news/view.php?no=7279"
                target="_blank" style={{ width: "100%" }}
              >
                만종예비군훈련장 영상모의사격장 시민체험행사 참가자 모집
              </CLink>
              <br />

              <CImg
                src="http://chosunnews.co.kr/data/tmp/1909/20190904160943_qcyduvrl.jpg"
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
              강원도만종예비군훈련장
              <h1 style={{ marginBottom: 0, }}>대구북구예비군훈련장</h1>
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
                주소 : 강원도 원주시 상만종길(호저면) 81-6
              </p>
              <p className="muted">
                연락처 : 033-762-7113
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`강원도 원주시 상만종길 81-6`} />

      <Rating target={'board14'} />

      <Board target={`board14`} name="강원도만종예비군훈련장게시판" />

    </>
  )



}
export default Manjong
