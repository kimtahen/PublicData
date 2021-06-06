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

const Dong = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              대구동구예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CLink
                href="https://www.yeongnam.com/web/view.php?key=20200622010003255"
                target="_blank"
              >
                대구 동구여성예비군 "내 고장은 내가 지킨다"
		          </CLink>
              <br />

              <CImg
                src="https://www.yeongnam.com/mnt/file/202006/2020062201000801500032551.jpg"
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
              대구동구예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CImg
                src="http://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=f9a06d00-db09-11da-a738-000001010d15&fileSn=20110310152551"
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
                주소 : 대구광역시 동구 대구광역시 동구 팔공로(능성동) 1421
  	      	  </p>
              <p className="muted">
                연락처 :
  	      	  </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Map loc={`서울특별시 서초구 신흥말길 79-39`} />

      <Board target={`board4`} />

    </>
  )



}
export default Dong
