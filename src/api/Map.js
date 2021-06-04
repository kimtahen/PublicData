import React,{useEffect} from 'react';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CTextarea,
    CFormGroup,
    CLabel,
    CInput,
    CButton,
    CCollapse,
    CForm,
    CFormText,
    CCardFooter,
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter
  } from '@coreui/react'
const kakao = window.kakao;
const Map  = ({loc}) => {
	useEffect(()=>{
		let places = new kakao.maps.services.Places();
		let callback = function(result, status){
			console.log('this is callback', status);
			if(status === kakao.maps.services.Status.OK){
				console.log('result:',result);
			}
		}
		places.keywordSearch('서울특별시 서초구 신흥말길 79-39 ',callback);
	},[])
	
	useEffect(()=>{
		let container = document.getElementById('map');
		let options  = {
			center: new kakao.maps.LatLng(37,127),
			level: 3
		};
		let map = new kakao.maps.Map(container, options);
		
		let places = new kakao.maps.services.Places();
		let callback = function(result, status){
			console.log('this is callback', status);
			if(status === kakao.maps.services.Status.OK){
				let bounds = new kakao.maps.LatLngBounds();
				for (let i=0; i<result.length; i++){
					displayMarker(result[i]);
					bounds.extend(new kakao.maps.LatLng(result[i].y, result[i].x));
					map.setBounds(bounds);
				}
			}
		}
		function displayMarker(place){
			let marker = new kakao.maps.Marker({
				position: new kakao.maps.LatLng(place.y, place.x)
			});
			marker.setMap(map);
		}

		places.keywordSearch('서울특별시 서초구 신흥말길 79-39 ',callback);
		
	},[]);
    return(
        <>
		<CRow>
			<CCol>
				<CCard>
					<CCardBody>
						<div id={`map`} style={{width: "100%", height: "500px"}}></div>

					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
		</>
	)
}
export default Map
