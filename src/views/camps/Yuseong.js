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

const Yuseong = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              대전유성구예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CLink
                href="https://news.mt.co.kr/mtview.php?no=2015051517198232085"
                target="_blank"
              >
                [사진]예비군 훈련 '총구는 안전고리에'
		          </CLink>
              <br />

              <CImg
                src="https://thumb.mt.co.kr/06/2015/05/2015051517198232085_1.jpg/dims/optimize/"
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
              대전유성구예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=88642250-a7f9-11da-bf7c-000001010d15&fileSn=20150420134548"
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
                주소 : 대전광역시 유성구 하기로143번길(자운동) 84
  	      	  </p>
              <p className="muted">
                연락처 : 042-824-0259
  	      	  </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`대전광역시 유성구 하기로143번길 84`} />

      <Board target={`board24`} name="대전유성구예비군훈련장게시판" />

    </>
  )



}
export default Yuseong
