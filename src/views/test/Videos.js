import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CRow,
  CEmbed,
  CEmbedItem
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Videos = () => {

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Embed
            </CCardHeader>
            <CCardBody>
              <CEmbed>
                <CEmbedItem src="https://www.youtube.com/embed/zChVMZUi4XM"/>
              </CEmbed>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Videos
