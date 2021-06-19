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
    CEmbedItem,
    CLink
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Intro = () => {

    return (
        <>
            <CRow>
                <CCol xl="6">
                    <CCard>
                        <CCardHeader>
                            예비군 복무는 이렇게합니다.
                        </CCardHeader>
                        <CCardBody>
                            <CEmbed>
                                <CEmbedItem src="https://www.youtube.com/embed/zChVMZUi4XM" />
                            </CEmbed>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xl="6">
                    <CCard>
                        <CCardHeader>
                            [예비군 창설 50주년 특집 다큐] 어제의 용사 미래의 전사가 되다
                        </CCardHeader>
                        <CCardBody>
                            <CEmbed>
                                <CEmbedItem src="https://www.youtube.com/embed/_fB6nvy8h34" />
                            </CEmbed>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>



            <CRow>
                <CCol xl="6">
                    <CCard>
                        <CCardHeader>
                            예비군법
                        </CCardHeader>
                        <CCardBody>
                            <CLink
                                href="https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%98%88%EB%B9%84%EA%B5%B0%EB%B2%95"
                                target="_blank" style={{ width: "100%" }}
                            >
                                국가법령정보센터 예비군법
                            </CLink>
                            <br />
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xl="6">
                    <CCard>
                        <CCardHeader>
                            예비군이 꼭 알아야 할 사항
                        </CCardHeader>
                        <CCardBody>
                            <CLink
                                href="https://www.mma.go.kr/contents.do?mc=usr0000194"
                                target="_blank" style={{ width: "100%" }}
                            >
                                예비군이 꼭 알아야 할 사항
                            </CLink>
                            <br />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CRow>
                <CCol xl="6">
                    <CCard>
                        <CCardHeader>
                            예비군 교육훈련시간
                        </CCardHeader>
                        <CCardBody>
                            <CLink
                                href="https://www.mma.go.kr/contents.do?mc=usr0000197"
                                target="_blank" style={{ width: "100%" }}
                            >
                                예비군 교육훈련시간
                            </CLink>
                            <br />
                        </CCardBody>
                    </CCard>
                </CCol>

            </CRow>




        </>
    )
}

export default Intro
