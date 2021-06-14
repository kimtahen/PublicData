import React, {useRef, useStat, useEffect} from 'react';

import {
	CRow,
	CCol,
	CCard,
	CCardHeader,
	CCardBody,
	CWidgetProgress,
	CProgress,
	CSpinner,
} from '@coreui/react';

import {useSelector, useDispatch} from 'react-redux'
import {fetchRating} from './apis'

const Rating = ({target}) =>{
	useEffect(()=>{
		/*await fetch()
		.then(()=>{console.log('rating', rating)*/
	// rating points to the initial useSelector rating variable
		fetch();	
	},[])
	const isRatingLoading = useSelector(state => state.isRatingLoading);
	const isInitialMount = useRef(true);
	useEffect(()=>{
		if (isInitialMount.current){
			isInitialMount.current = false;
		}else{
			visRef.current.style.visibility = isRatingLoading ? 'hidden' : 'visible';
		}
	},[isRatingLoading])
	const dispatch = useDispatch();
	const ratingData = useSelector(state => state.ratingData);
	const visRef = useRef()
	const fetch = async () => {
		dispatch({type: 'set_loading', isRatingLoading: true});
		await fetchRating(target)
		.then((data)=>{
			dispatch({type: 'set_rating', ratingData: data});
			dispatch({type: 'set_loading', isRatingLoading: false});
			dispatch({type: 'set_lastAccessSucceed', isLastAccessSucceed: true});
		})
		.catch((err)=>{
			console.log(err);
			dispatch({type: 'set_loading', isRatingLoading: false});
			dispatch({type: 'set_lastAccessSucceed', isLastAccessSueed:false});
		})
	}
	const colorPicker = (rating) => {
		if(rating >4)
			return 'primary';
		if(rating >3)
			return 'info';
		if(rating >2)
			return 'success';
		if(rating >1)
			return 'warning';
		if(rating === undefined)
			return 'secondary';

		return 'danger'
	}
	//using 

	return(
		<CRow>
			<CCol>
				<CCard color="white">
					<CCardHeader><h1 style={{marginBottom: 0}}>Rating</h1></CCardHeader>
					<CCardBody> 
					<div style={{visibility: 'hidden', transition: '3s'}} ref={visRef}>
					<CWidgetProgress color={colorPicker(ratingData.rating)} inverse  value={ratingData.rating*20} header={`${ratingData.rating} points`} footer={`${ratingData.vote} people voted`} style={{margin: 0,height: '100%'}}/>
					</div>
					</CCardBody>
					
				</CCard>
			</CCol>
		</CRow>
	)
}
export default Rating;
