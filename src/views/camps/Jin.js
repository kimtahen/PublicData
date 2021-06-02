import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CTooltip,
    CRow,
    CCol,
    CLink,
    CEmbed,
    CEmbedItem
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import Board from '../../api/Board'
import imgfile from 'src/assets/pictures/Jingu.jpg';


const Jin = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)
  return (
    <>
          <CCard>
            <CCardHeader>
              부산진구예비군훈련장
            </CCardHeader>
            <CCardBody>
	            <img src={imgfile} />
            </CCardBody>
          </CCard>

          <CCard>
	        <CCardHeader>
    	      정보
    	      <DocsLink name="CCard"/>
    	    </CCardHeader>
    	    <CCardBody>
    	      <p className="muted">
        	    02-576-6637
        	  </p>
	        </CCardBody>
	      </CCard>

	<Board target={`board4`}/>

    </>
  )



}
export default Jin
