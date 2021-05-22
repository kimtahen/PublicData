import React, {useEffect} from 'react';
import {fetchData, Board} from '../../api/fetch'
import {useSelector, useDispatch} from 'react-redux'

const Test = () => {
    return(
        <div>
            <Board/>
        </div>
    )
}
export default React.memo(Test)