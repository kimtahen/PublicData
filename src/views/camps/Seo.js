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

const Seo = () => {
  return (
    <>

      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>인천서구예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CLink
                href="https://www.youtube.com/watch?v=NFFnsEUa85M"
                target="_blank" style={{ width: "100%" }}
              >
                [내기소] “야생동물, 불쌍하다고 섣불리 구조하면 안 돼요”
              </CLink>
              <br />

              <CEmbed>
                <CEmbedItem iframe width="560" height="315" src="https://www.youtube.com/embed/NFFnsEUa85M" />
              </CEmbed>
            </CCardBody>
          </CCard>

        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>인천서구예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=8a1735e0-c29a-11da-939f-000001010d15&fileSn=20161227153315"
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
                주소 : 인천광역시 계양구 둑실동 252
              </p>
              <p className="muted">
                연락처 : 032-553-6113
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`인천광역시 계양구 둑실동 252`} />

      <Rating target={'board19'} />

      <Board target={`board19`} name="인천서구예비군훈련장게시판" />

    </>
  )



}
export default Seo
