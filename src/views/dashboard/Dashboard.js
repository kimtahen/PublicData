import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  //Jumbotron
  CJumbotron,
  //Carousel
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
} from '@coreui/react'
import {CChartLine} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'

const Dashboard = () => {
	let slides = []
  return (
    <>
      <CRow>
	  	<CCol>
              <CJumbotron className="border">
                <h1 className="display-3">예브리타임에 <br/> 오신 걸 환영합니다!</h1>
	  			
                <p className="lead">예브리타임은 여러분이 예비군에 관한 정보를 얻고, 자유롭게 의견을 나눌 수 있는 공간입니다.</p>
                <hr className="my-2" />
                <p>지금 바로 예비군 훈련장을 둘러보세요!</p>
                <p className="lead">
                  <CButton color="primary" size="lg">Learn More</CButton>
                </p>
              </CJumbotron>
	  	</CCol>
      </CRow>
	  <CRow>
	  	<CCol lg="6">
      <CCard>
        <CCardHeader>
	  		동원훈련
        </CCardHeader>
        <CCardBody>
          <CChartLine
            datasets={[
              {
                label: '응소인원',
                backgroundColor: 'rgb(0,216,255,0.9)',
				data: [434612,427225, 424648, 438790, 421172, 411242, 384254, 427960, 402962, 402791, 380623]
              },
              {
                label: '대상인원',
                backgroundColor: 'rgb(228,102,81,1)',
				data: [584844, 595310, 579876, 541495, 476053, 487213, 452015, 466741, 436324, 406906, 403206]
              },
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels={[2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,2018, 2019]}
          />
        </CCardBody>
      </CCard>
	  	</CCol>
	  	<CCol lg="6">
      <CCard>
        <CCardHeader>
	  		동미참훈련
        </CCardHeader>
        <CCardBody>
          <CChartLine
            datasets={[
              {
                label: '응소인원',
                backgroundColor: 'rgb(0,216,255,0.9)',
				data: [337000, 306225, 255824, 252420, 311753, 336158, 376287, 348455, 360613, 378185, 353630]
              },
              {
                label: '대상인원',
                backgroundColor: 'rgb(228,102,81,1)',
				data: [406606,346068, 310895, 299428, 286733, 289439, 345593, 395093, 371441, 389881, 406420]
              },
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels={[2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,2018, 2019]}
          />
        </CCardBody>
      </CCard>
	  	</CCol>
	  </CRow>
	  <CRow>
	  	<CCol lg="6">
      <CCard>
        <CCardHeader>
	  		기본훈련
        </CCardHeader>
        <CCardBody>
          <CChartLine
            datasets={[
              {
                label: '응소인원',
                backgroundColor: 'rgb(0,216,255,0.9)',
				data: [1111753, 1145633, 1127800, 1080512, 1076477, 1027636, 1024337, 1002462, 1019687, 1005907, 925997]
              },
              {
                label: '대상인원',
                backgroundColor: 'rgb(228,102,81,1)',
				data: [1153163, 1172487, 1134121, 1063257, 1094985, 1083502, 1099402, 1025904, 1055437, 1037017, 969209]
              },
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels={[2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,2018, 2019]}
          />
        </CCardBody>
      </CCard>
	  	</CCol>
	  	<CCol lg="6">
      <CCard>
        <CCardHeader>
	   		작계훈련
        </CCardHeader>
        <CCardBody>
          <CChartLine
            datasets={[
              {
                label: '응소인원',
                backgroundColor: 'rgb(0,216,255,0.9)',
				data: [1815563, 1764919, 1676364, 1543518, 1538239, 1580617, 1624650, 1537208, 1711959, 1169147, 1038810]
              },
              {
                label: '대상인원',
                backgroundColor: 'rgb(228,102,81,1)',
				data: [1995240, 1864921, 1679546, 1619576, 1569316, 1566928, 1725680, 1599534, 1717298, 1193007, 1105357]
              },
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels={[2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,2018, 2019]}
          />
        </CCardBody>
      </CCard>
	  	</CCol>
	  </CRow>
    </>
  )
}

export default Dashboard
