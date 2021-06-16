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

const Training = () => {

    return (
        <>
            <CRow>
                <CCol xl="6">
                    <CCard>
                        <CCardHeader>
                            신병교육훈련 현장 /사/격/훈/련/
                        </CCardHeader>
                        <CCardBody>
                            <CEmbed>
                                <CEmbedItem src="https://www.youtube.com/embed/xPRPU8elll4" />
                            </CEmbed>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xl="6">
                    <CCard>
                        <CCardHeader>
                            신병교육훈련 현장 /화/생/방/훈/련/
                        </CCardHeader>
                        <CCardBody>
                            <CEmbed>
                                <CEmbedItem src="https://www.youtube.com/embed/xAKi-NunY60" />
                            </CEmbed>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CRow>
                <CCol xl="6">
                    <CCard>
                        <CCardHeader>
                            신병교육훈련 현장 /수/류/탄/투/척/훈/련/
                        </CCardHeader>
                        <CCardBody>
                            <CEmbed>
                                <CEmbedItem src="https://www.youtube.com/embed/fN55XQx7kEI" />
                            </CEmbed>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>


        </>
    )
}

export default Training
