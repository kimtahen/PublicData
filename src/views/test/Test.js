import React, {useEffect} from 'react';
import Board from '../../api/Board';
import {useSelector, useDispatch} from 'react-redux'
import {CRow, CCol, CCard, CCardBody } from '@coreui/react'

const Test = () => {
    return(
        <>
		<CRow>
			<CCol>
				<CCard>
					<CCardBody>
						Card1
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
            <Board target={`board1`}/>
        </>
    )
}
export default React.memo(Test)
