import React, {useRef, useState, useEffect} from 'react';
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

import {useSelector, useDispatch} from 'react-redux'

import {fetchData, writeData, deleteData} from './apis'
import CIcon from '@coreui/icons-react';

const Board = ({target}) => {
    useEffect(()=>{
      fetch();
    },[])
    const dispatch = useDispatch()
    const loading = useSelector(state=> state.isLoading);
    const boardData = useSelector(state => state.curBoardData);
    
    //functions
    const fetch = async () => {
        dispatch({type: 'set_loading', isLoading: true});
        await fetchData(target)
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

    const write = async () => {
        dispatch({type: 'set_loading', isLoading: true});
        await writeData({board: target, data: {name: nameRef.current.value, text: textRef.current.value, title: titleRef.current.value, password: passwordRef.current.value}})
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

    const deletion = async (index, password) => {
      dispatch({type: 'set_loading', isLoading: true})
      await deleteData({board: target, index, password})
        .then((result) => {
          dispatch({ type: 'set_loading', isLoading: false });
          dispatch({ type: 'set_lastAccessSucceed', isLastAccessSucceed: true });
          if(!result){
            setDeletionSucceed(false);
          }else{
            setDeletionSucceed(true);
          }
        })
        .catch((err) => {
          console.log('this is error');
          console.log(err);
          dispatch({ type: 'set_loading', isLoading: false });
          dispatch({ type: 'set_lastAccessSucceed', isLastAccessSucceed: false });
        });
      fetch();
    }
    
    const handleSubmit = () => {
      if(nameRef.current.value == "" ||passwordRef.current.value == "" ||titleRef.current.value == "" ||textRef.current.value == ""  ){
        setModal(true);
      }else{
        write();
        nameRef.current.value = "" ;
        passwordRef.current.value = "";
        titleRef.current.value = "";
        textRef.current.value = "";
        
      }
    }

    const handleDeletion = (index) => {
      
    } 
    
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const pwCheckRef = useRef(null);
    

    const fields = [
      {key: 'id', _style: {width: '10%'}},
      {key: 'name', _style: {width: '20%'}},
      {key: 'title', _style: {width: '70%'}},
      
      {
        key: 'show_details',
        label: '',
        _style: { width: '1%' },
        sorter: false,
        filter: false
      }
    ];

    //details on off function
    const [details, setDetails] = useState([])
    const toggleDetails = (index) => {
      const position = details.indexOf(index)
      let newDetails = details.slice()
      if (position !== -1){
        newDetails.splice(position, 1)
      } else {
        newDetails = [...details, index]
      }
      setDetails(newDetails)
    }

    //modal on off function
    const [modal, setModal] = useState(false);
    const toggle = () => {
      setModal(!modal);
    }

    //deletionModal on off function
    const [deletionModal, setDeletionModal] = useState(false);
    const [deletionSucceed, setDeletionSucceed] = useState(true);
    const deletionModalToggle = () => {
      setDeletionModal(!deletionModal);
    }

    return (
        <>
        {/* Validation Modal */}
        <CModal
          show={modal}
        >
          <CModalHeader closeButton>Error</CModalHeader>
          <CModalBody>
            항목을 모두 입력하십시오.
        </CModalBody>
          <CModalFooter>
            <CButton
              color="secondary"
              onClick={toggle}
            >OK</CButton>
          </CModalFooter>
        </CModal>

        {/* Deletion Modal */}
        <CModal
          show={deletionModal}
        >
          <CModalHeader closeButton>Delete</CModalHeader>
          <CModalBody>
          <CInput type={`password`} id="text-input" name="text-input" placeholder="Enter password" innerRef={pwCheckRef}/>
        </CModalBody>
          <CModalFooter>
            <CButton
              color="danger"
              onClick={deletionModalToggle}
            >Delete</CButton>
          </CModalFooter>
        </CModal>

        {/* Form */}
        <CRow>
        <CCol xs="12" lg="4">
            <CCard color="info" className="text-white text-center">
            <CCardBody>
              <CForm action="" method="" className="form-horizontal" >
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput id="text-input" name="text-input" placeholder="Enter name..." innerRef={nameRef}/>
                    {/* <CFormText className="help-block">Please enter your name</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="hf-password">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput type="password" id="hf-password" name="hf-password" placeholder="Enter Password..." innerRef={passwordRef}/>
                    {/* <CFormText className="help-block">Please enter your password</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">title</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput id="text-input" name="text-input" placeholder="Enter name..." innerRef={titleRef}/>
                    <CFormText className="help-block"></CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">Comment</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                      <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="5"
                      placeholder="Content..." 
                      innerRef={textRef}
                      required/>
                    </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" onClick={()=>{handleSubmit();}} size="sm" color="info"><CIcon name="cil-scrubber" /> Submit</CButton>
            </CCardFooter>
            </CCard>

        </CCol>
        <CCol xs="12" lg="8">
          <CCard>
            
            <CCardBody>
            <CDataTable
              items={boardData}
              fields={fields}
              columnFilter
              itemsPerPageSelect
              itemsPerPage={10}
              pagination
              hover
              scopedSlots={{
                'show_details':
                  (item, index) => {
                    return (
                      <>
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={() => {toggleDetails(index)}}
                        >
                          {details.includes(index) ? 'Hide' : 'Show'}
                        </CButton>
                      </td>
                    </>
                    )
                  },
                  'details':
                  (item, index)=>{
                    return (
                    <CCollapse show={details.includes(index)}>
                      <CCardBody>
                        <h6>
                          {boardData[index].text}
                        </h6>
                        <CButton size="sm" color="danger" className="ml-1">
                          Delete
                        </CButton>
                      </CCardBody>
                    </CCollapse>
                  )
                }
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
        </CRow>
            

        
        </>
    )
}
export default Board;