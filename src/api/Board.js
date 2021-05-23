import React, {useRef, useEffect} from 'react';
import db from './firebase';
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
    CFormText
  } from '@coreui/react'

import {useSelector, useDispatch} from 'react-redux'

import {fetchData, writeData} from './apis'

const Board = ({target}) => {
    useEffect(()=>{
      fetch();
    },[])
    const dispatch = useDispatch()
    const loading = useSelector(state=> state.isLoading);
    const boardData = useSelector(state => state.curBoardData);
    
    const fetch = () => {
        console.log('fetch')
        dispatch({type: 'set_loading', isLoading: true});
        fetchData(target)
        .then((data)=>{ 
            dispatch({type: 'set_boardData', curBoardData: data});
            dispatch({type: 'set_loading', isLoading: false});
            dispatch({type: 'set_lastAccessSucceed', isLastAccessSucceed: true});
        })
        .catch((err)=>{
            console.log(err);
            dispatch({type: 'set_loading', isLoading: false});
            dispatch({type: 'set_lastAccessSucceed', isLastAccessSucceed: false});
        });
    }

    const write = () => {
        dispatch({type: 'set_loading', isLoading: true});
        writeData({board: target, data: {name: nameRef.current.value, text: textRef.current.value}})
        .then(()=>{
            dispatch({type: 'set_loading', isLoading: false});
            dispatch({type: 'set_lastAccessSucceed', isLastAccessSucceed: true});
            
        })
        .catch((err)=>{
            console.log('this is error');
            console.log(err);
            dispatch({type: 'set_loading', isLoading: false});
            dispatch({type: 'set_lastAccessSucceed', isLastAccessSucceed: false});
        });
        fetch();
    }
    
    const nameRef = useRef(null);
    const textRef = useRef(null);

    const fields = ['id','name', 'text', 'time'];
    return (
        <>
        <CRow>
        <CCol xs="12" lg="9">
            <CCard color="danger" className="text-white text-center">
                <CCardBody>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="text-input" name="text-input" placeholder="Text" innerRef={nameRef} />
                    </CCol>
                    <CCol md="3">
                      <CLabel htmlFor="textarea-input">Comment</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="9"
                      placeholder="Content..." 
                      innerRef={textRef}
                      />
                    </CCol>
                  </CFormGroup>
                  <h6>{loading ? 'loading' : 'idle'}</h6>
                  <button onClick={()=>{fetch()}}>load</button>
                  <button onClick={()=>{write()}}>submit</button>
                </CCardBody>
            </CCard>

        </CCol>
        <CCol xs="12" lg="9">
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
        </CRow>
            

        
        </>
    )
}
export default Board;