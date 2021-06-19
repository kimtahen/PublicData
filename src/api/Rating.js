import React, { useRef, useState, useEffect } from 'react';

import {
	CRow,
	CCol,
	CCard,
	CCardHeader,
	CCardBody,
	CCardFooter,
	CWidgetProgress,
	CProgress,
	CSpinner,
	CButton,
	CButtonGroup,
	CModal,
	CModalHeader,
	CModalBody,
	CModalFooter,
} from '@coreui/react';

import { useSelector, useDispatch } from 'react-redux'
import { fetchRating, writeRating } from './apis'

const Rating = ({ target }) => {
	useEffect(() => {
		/*await fetch()
		.then(()=>{console.log('rating', rating)*/
		// rating points to the initial useSelector rating variable
		fetch();
	}, [])
	const isRatingLoading = useSelector(state => state.isRatingLoading);
	const isInitialMount = useRef(true);
	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			visRef.current.style.visibility = isRatingLoading ? 'hidden' : 'visible';
		}
	}, [isRatingLoading])
	const dispatch = useDispatch();
	const ratingData = useSelector(state => state.ratingData);
	const visRef = useRef()
	const fetch = async () => {
		dispatch({ type: 'set_loading', isRatingLoading: true });
		await fetchRating(target)
			.then((data) => {
				dispatch({ type: 'set_rating', ratingData: data });
				dispatch({ type: 'set_loading', isRatingLoading: false });
				dispatch({ type: 'set_lastAccessSucceed', isLastAccessSucceed: true });
			})
			.catch((err) => {
				console.log(err);
				dispatch({ type: 'set_loading', isRatingLoading: false });
				dispatch({ type: 'set_lastAccessSucceed', isLastAccessSueed: false });
			})
	}
	const write = async (rating) => {
		dispatch({ type: 'set_loading', isRatingLoading: true });
		await writeRating({ board: target, rating })
			.then(() => {
				dispatch({ type: 'set_loading', isRatingLoading: false });
				dispatch({ type: 'set_lastAccessSucceed', isLastAccessSucceed: true });
			})
			.catch((err) => {
				console.log(err);
				dispatch({ type: 'set_loading', isRatingLoading: false });
				dispatch({ type: 'set_lastAccessSucceed', isLastAccessSueed: false });
			})
		fetch();
		setModal(!modal)
	}
	const colorPicker = (rating) => {
		
		if (rating >= 4)
			return 'info';
		if (rating >= 3)
			return 'success';
		if (rating >= 2)
			return 'warning';
		if (rating >= 1)
			return 'danger';
		if (rating === undefined)
			return 'secondary';

		return 'secondary'
	}

	//modal 
	const [modal, setModal] = useState(false);
	const submitRating = async (point) => {
		console.log(point)
		write(point);
	}

	return (
		<>
			<CModal show={modal} color={colorPicker(ratingData.rating/ratingData.vote)} onClose={() => { setModal(!modal) }}>
				<CModalHeader closeButton>
					Rate!
				</CModalHeader>
				<CModalBody className='text-center'>
					<CButtonGroup>
						<CButton color="secondary" size="lg" onClick={() => { submitRating(1) }}>1</CButton>
						<CButton color="secondary" size="lg" onClick={() => { submitRating(2) }}>2</CButton>
						<CButton color="secondary" size="lg" onClick={() => { submitRating(3) }}>3</CButton>
						<CButton color="secondary" size="lg" onClick={() => { submitRating(4) }}>4</CButton>
						<CButton color="secondary" size="lg" onClick={() => { submitRating(5) }}>5</CButton>
					</CButtonGroup>
				</CModalBody>
				<CModalFooter>
				</CModalFooter>
			</CModal>
			<CRow>
				<CCol>
					<CCard color="white">
						<CCardHeader>
							<h1 style={{ marginBottom: 0, }}>평점</h1>
						</CCardHeader>
						<CCardBody>
							<div style={{ visibility: 'hidden', transition: '3s' }} ref={visRef}>
								<CWidgetProgress color={colorPicker(ratingData.rating/ratingData.vote)} inverse value={(ratingData.rating/ratingData.vote)*20} header={`${(ratingData.rating / ratingData.vote).toFixed(2)} points`} footer={`${ratingData.vote} people voted`} style={{ margin: 0, height: '100%' }} />
							</div>
						</CCardBody>
						<CCardFooter className="text-center">
							<CButton color="secondary" size="sm" onClick={() => { setModal(true) }}>rate!</CButton>
						</CCardFooter>
					</CCard>
				</CCol>
			</CRow>
		</>
	)
}
export default Rating;
