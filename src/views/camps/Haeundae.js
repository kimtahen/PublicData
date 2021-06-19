import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CEmbed,
  CEmbedItem,
  CImg
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import Board from '../../api/Board'
import Map from '../../api/Map';
import Rating from '../../api/Rating';

const Haeundae = () => {

  return (
    <>
      <CRow>
        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>부산해운대예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CImg
              // src="https://council.busanjin.go.kr/UPDIR/photo/middle/photo_00001370.jpg"
              // fluid
              //className="mb-2" style={{width : "100%"}}
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xl="6">
          <CCard>
            <CCardHeader>
              <h1 style={{ marginBottom: 0, }}>부산해운대예비군훈련장</h1>
            </CCardHeader>
            <CCardBody>
              <CImg
              // src="https://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=b385be40-cabc-11da-bc12-000001010d15&fileSn=20120615085939"
              // fluid
              //className="mb-2" style={{width : "100%"}}
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
                주소 : 부산광역시 해운대구 백동길(송정동) 43
              </p>
              <p className="muted">
                연락처 : 051-704-1113
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`부산광역시 해운대구 백동길 43`} />

      <Rating target={'board10'} />

      <Board target={`board10`} name="부산해운대예비군훈련장게시판" />

    </>
  )
}

export default Haeundae;
