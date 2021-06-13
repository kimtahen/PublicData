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

const Daedeok = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              대전대덕구예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CLink
                href="https://www.sptnews24.com/news/articleView.html?idxno=6960"
                target="_blank"
              >
                대전장동초등학교 육군 제1970부대 4대대 체험학습 실시
		          </CLink>
              <br />

              <CImg
                src="https://cdn.sptnews24.com/news/photo/201504/6960_5257_5612.jpg"
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
              대전대덕구예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=be75f820-ca8e-11da-bc12-000001010d15&fileSn=20150420164750"
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
                주소 : 대전광역시 대덕구 장동로(와동) 111
  	      	  </p>
              <p className="muted">
                연락처 : 042-627-1805
  	      	  </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`대전광역시 대덕구 장동로 111`} />

      <Board target={`board2`} name="대전대덕구예비군훈련장게시판" />

    </>
  )



}
export default Daedeok
