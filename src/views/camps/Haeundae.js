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
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import Board from '../../api/Board'

const Haeundae = () => {
  const placements = [
    'top-start', 'top', 'top-end',
    'bottom-start', 'bottom', 'bottom-end',
    'right-start', 'right', 'right-end',
    'left-start', 'left', 'left-end'
  ]

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              부산해운대예비군훈련장
            </CCardHeader>
            <CCardBody>
              <CEmbed>
                {/* <CEmbedItem iframe width="560" height="315" src="https://www.youtube.com/embed/B9a3iUhsxJM"/> */}
              </CEmbed>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

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
	<Board target={`board3`}/>

    </>
  )
}

export default Haeundae;
