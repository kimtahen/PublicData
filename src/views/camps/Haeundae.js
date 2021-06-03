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

const Haeundae = () => {

  return (
    <>
			<CRow>
				<CCol>
					<CCard>
        	  <CCardHeader>
           		 부산해운대예비군훈련장
            </CCardHeader>
						<CCardBody>
	            <CImg
	              // src="https://council.busanjin.go.kr/UPDIR/photo/middle/photo_00001370.jpg"
      					// fluid
      					// className="mb-2"
							/>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>

			<CRow>
				<CCol>
					<CCard>
        	  <CCardHeader>
              부산해운대예비군훈련장
            </CCardHeader>
						<CCardBody>
	            <CImg
	              // src="https://www.yebigun1.mil.kr/cmm/fms/getImage.do?atchFileId=b385be40-cabc-11da-bc12-000001010d15&fileSn=20120615085939"
      					// fluid
      					// className="mb-2"
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
    		      <DocsLink name="CCard"/>
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

			<Board target={`board3`}/>

    </>
  )
}

export default Haeundae;
