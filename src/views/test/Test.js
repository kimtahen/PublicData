import React, {useEffect, useRef} from 'react';
import Board from '../../api/Board';
import Map from '../../api/Map';
import {useSelector, useDispatch} from 'react-redux'
import {CRow, CCol, CCard, CCardBody } from '@coreui/react'
import CIcons, {freeSet} from '@coreui/icons'
const Test = () => {
    return(
        <>
		<Map loc={`서울특별시 서초구 신흥말길 79-39`}/>
		<CRow>
			<CCol>
				<CCard>
					<CCardBody>
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
		<CRow>
			<CCol>
				<CCard>
					<CCardBody>
						Card2
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>		
		<CRow>
			<CCol>
				<CCard>
					<CCardBody>
						Card3
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>		
            <Board target={`board20`}/>
        </>
    )
}
export default React.memo(Test);
