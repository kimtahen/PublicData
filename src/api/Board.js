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

const Board = ({target, name}) => {
    useEffect(()=>{
      fetch();
    },[])
    const dispatch = useDispatch()
    const loading = useSelector(state=> state.isLoading);
    const boardData = useSelector(state => state.curBoardData);
    
	//visibility set
	const visRef = useRef()	
	const isInitialMount = useRef(true);
	useEffect(()=>{
		if(isInitialMount.current){
			isInitialMount.current = false;
		}else{
			visRef.current.style.visibility = loading ? 'hidden' : 'visible';
		}
	},[loading])

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
			deletionModalToggle();
			setPassErrModal(true);
          }else{
            setDeletionSucceed(true);
            deletionModalToggle();
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
    
    const handleSubmit = async () => {
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
      deletionModalToggle();
      setSelIndex(index);
    }
    const deleteSequence = async ()=>{
      await deletion(selIndex,pwCheckRef.current.value);
	  pwCheckRef.current.value = ""
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

//deletionModal
const [deletionModal, setDeletionModal] = useState(false);
const [deletionSucceed, setDeletionSucceed] = useState(true);
const [selIndex, setSelIndex] = useState(-1);
const deletionModalToggle = () => {
  setDeletionModal(!deletionModal);
}

//passErrModal
const [passErrModal, setPassErrModal] = useState(false);

return (
	<>
	{/* Validation Modal */}
	<CModal color="danger"
	  show={modal}
	  onClose={()=>{setModal(!modal)}}
	>
	  <CModalHeader closeButton>오류</CModalHeader>
	  <CModalBody>
		항목을 모두 입력하십시오.
	  </CModalBody>
	  <CModalFooter>
		<CButton
		  size="sm"
		  color="danger"
		  onClick={toggle}
		>확인</CButton>
	  </CModalFooter>
	</CModal>

	{/* deletionModal */}
	<CModal
	  show={deletionModal}
	  onClose={()=>{setDeletionModal(false)}}
	>
	  <CModalHeader closeButton> 비밀번호 확인</CModalHeader>
	  <CModalBody>
		<CInput id="text-input" name="text-input" placeholder="비밀번호" innerRef={pwCheckRef} />
	  </CModalBody>
	  <CModalFooter>
		<CButton
	      size="sm"
		  color="danger"
		  onClick={() => { deleteSequence();}}
		>삭제</CButton>
	  </CModalFooter>
	</CModal>
	{/*passErrModal*/}
	<CModal
	  color="danger"
	  show={passErrModal}
	  onClose={()=>{passErrModal(false)}}
	>
	  <CModalHeader closeButton>오류</CModalHeader>
	  <CModalBody>
		비밀번호가 틀립니다.
	  </CModalBody>
	  <CModalFooter>
		<CButton
		  size="sm"
		  color="danger"
		  onClick={()=>{setPassErrModal(false)}}
		>확인</CButton>
	  </CModalFooter>
	</CModal>


	<CRow>
	<CCol>
	<CCard color="white">
	<CCardHeader>
	<h1 style={{marginBottom: 0}}>{name}</h1>
	</CCardHeader>
	<CCardBody>
	<div style={{visibility: 'hidden', transition: '0.5s'}} ref={visRef}>
	<CRow>
	<CCol xs="12" lg="4">
	{/* Form */}
		<CCard color={`white`} className="text-white text-center" style={{marginBottom: 0, }}>
		<CCardBody>
		  <CForm action="" method="" className="form-horizontal" >
			<CFormGroup row>
			  <CCol xs="12">
				<CInput id="text-input" name="text-input" placeholder="이름" innerRef={nameRef}/>
				{/* <CFormText className="help-block">Please enter your name</CFormText> */}
			  </CCol>
			</CFormGroup>
			<CFormGroup row>
			  <CCol xs="12">
				<CInput type="password" id="hf-password" name="hf-password" placeholder="비밀번호" innerRef={passwordRef}/>
				{/* <CFormText className="help-block">Please enter your password</CFormText> */}
			  </CCol>
			</CFormGroup>
			<CFormGroup row>
			  <CCol xs="12">
				<CInput id="text-input" name="text-input" placeholder="제목" innerRef={titleRef}/>
				<CFormText className="help-block"></CFormText>
			  </CCol>
			</CFormGroup>
			<CFormGroup row>
			  <CCol xs="12">
				  <CTextarea 
				  name="textarea-input" 
				  id="textarea-input" 
				  rows="5"
				  placeholder="내용" 
				  innerRef={textRef}
				  required/>
				</CCol>
			</CFormGroup>
		  </CForm>
		</CCardBody>
		<CCardFooter style={{padding: '5px 0'}}>
		  <CButton type="submit" onClick={()=>{handleSubmit();}} size="sm" color="dark">등록</CButton>
		</CCardFooter>
		</CCard>

	</CCol>
	<CCol xs="12" lg="8">
	  <CCard style={{marginBottom: 0, height: "100%"}}>
		<CCardBody>
		<CDataTable
              items={boardData}
              fields={fields}
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
							{boardData[index]? boardData[index].text : ""}
                        </h6>

                        <CButton size="sm" color="danger" className="ml-1" onClick={()=>{handleDeletion(item.id); console.log(item.id, 'buttonclicked')}}>
                          삭제
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
		</div>
		</CCardBody>
		</CCard>
		</CCol>
		</CRow>

        
        </>
    )
}
Board.defaultProps = {
	target: 'board20',
	name: '게시판',
}
export default Board;
