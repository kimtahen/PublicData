import React, { useEffect, useRef } from 'react';
import Board from '../../api/Board';
import Map from '../../api/Map';
import { useSelector, useDispatch } from 'react-redux'
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
import CIcons, { freeSet } from '@coreui/icons'
const Intro = () => {
    return (
        <>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardBody>
                            <CEmbed>
                                <CEmbedItem src="https://www.youtube.com/embed/zChVMZUi4XM" />
                            </CEmbed>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardBody>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}
export default React.memo(Intro);
