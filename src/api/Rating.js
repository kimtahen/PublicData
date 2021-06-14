import React, {useRef, useStat, useEffect} from 'react';

import {
	CRow,
	CCol,
	CCard,
	CCardHeader,
	CCardBody,
	CWidgetProgress,
	CProgress,
} from '@coreui/react';

import {useSelector, useDispatch} from 'react-redux'
import {fetchRating} from './apis'

const Rating = ({target}) =>{
	useEffect(async ()=>{
		/*await fetch()
		.then(()=>{console.log('rating', rating)*/
	// rating points to the initial useSelector rating variable
		await fetch();
	
	},[])
	const dispatch = useDispatch();
	const ratingData = useSelector(state => state.ratingData);
	const fetch = async () => {
		dispatch({type: 'set_loading', isLoading: true});
		await fetchRating(target)
		.then((data)=>{
			dispatch({type: 'set_rating', ratingData: data});
			dispatch({type: 'set_loading', isLoading: false});
			dispatch({type: 'set_lastAccessSucceed', isLastAccessSucceed: true});
		})
		.catch((err)=>{
			console.log(err);
			dispatch({type: 'set_loading', isLoading: false});
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
				<CWidgetProgress color={colorPicker(ratingData.rating)} inverse  value={ratingData.rating*20} header={`${ratingData.rating} points`} footer={`${ratingData.vote} people voted`} style={{transition: '0.5s',margin: 0,height: '100%'}}/>
				</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	)
}
export default Rating;
