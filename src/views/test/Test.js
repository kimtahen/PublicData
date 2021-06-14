import React, { useEffect, useRef } from 'react';
import Board from '../../api/Board';
import Map from '../../api/Map';
import Rating from '../../api/Rating';
import {useSelector, useDispatch} from 'react-redux'
import {CRow, CCol, CCard, CCardBody } from '@coreui/react'
import CIcons, {freeSet} from '@coreui/icons'

const Test = () => {
	const isLoading = useSelector(state => state.isLoading);
    return(
        <>
		<Board target={`board20`} />
		<Rating target={'board1'}/>
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
							Card3
					</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		</>
	)
}
export default React.memo(Test);
