import React, {useEffect} from 'react';
import Board from '../../api/Board';
import {useSelector, useDispatch} from 'react-redux'

const Test = () => {
    return(
        <div>
            <Board target={`board1`}/>
        </div>
    )
}
export default React.memo(Test)