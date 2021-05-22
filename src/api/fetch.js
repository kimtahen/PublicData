import React from 'react';
import db from './firebase';
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'
import {useSelector, useDispatch} from 'react-redux'

export const fetchData = async (board)=>{
    const boardRef = db.collection(board);
    const doc = await boardRef.orderBy('id').get()
    .then((querySnapshot) => {
        let boardData = [];
        querySnapshot.forEach((doc)=>{
            boardData.push(doc.data());
        })
        return boardData;
    });
    return doc;
}
export const Board = (target) => {
    const dispatch = useDispatch()
    const loading = useSelector(state=> state.isLoading);
    const boardData = useSelector(state => state.curBoardData);
    const fetch = () => {
        dispatch({type: 'set_loading', isLoading: true});
        fetchData('board1').then((data)=>{
            console.log(data);
            dispatch({type: 'set_boardData', curBoardData: data});
            dispatch({type: 'set_loading', isLoading: false});
            console.log(boardData);
        });
        
    }
    const fields = ['id', 'text'];
    return (
        <div>
            <h6>{loading ? 'loading' : 'idle'}</h6>
            <button onClick={()=>{fetch()}}>load</button>
        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              board
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={boardData}
              fields={fields}
              itemsPerPage={5}
              pagination
            />
            </CCardBody>
          </CCard>
        </CCol>
        </div>
    )
}