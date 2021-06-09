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

const Michuhol = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              인천미추홀구예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CLink
                href="https://www.yna.co.kr/view/MYH20160728016100038"
                target="_blank"
              >
                편의점보다 맛있는 '예비군표 도시락'
		          </CLink>
              <br />
              <CEmbed>
                <CEmbedItem iframe width="560" height="315" src="https://cdnvod.yonhapnews.co.kr/yonhapnewsvod/201607/MYH20160728016100038_700M1.mp4" />
              </CEmbed>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              인천미추홀구예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=e9d55050-c544-11da-889b-000001010d15&fileSn=20120620133107"
	  			style={{width: '100%'}}
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
                주소 : 인천광역시 미추홀구 주승로(관교동) 152
  	      	  </p>
              <p className="muted">
                연락처 : 032-423-1113
  	      	  </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`인천광역시 미추홀구 주승로 152`} />

      <Board target={`board6`} />

    </>
  )



}
export default Michuhol
