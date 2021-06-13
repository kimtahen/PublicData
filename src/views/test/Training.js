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
                <CCol>
                    <CCard>
                        <CCardHeader>
                            Embed
            </CCardHeader>
                        <CCardBody>
                            <CEmbed>
                                <CEmbedItem src="https://m.blog.naver.com/PostList.naver?blogId=mnd9090" />
                            </CEmbed>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Training
