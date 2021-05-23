import firebase from 'firebase'
import db from './firebase';

function getToday(date) {
  date = new Date(date*1000);
  var day = ('0' + date.getDate()).slice(-2);
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var year = date.getFullYear();

  return year + '-' + month + '-' + day;
}

export const fetchData = async (board)=>{
    let boardRef
    let querySnapshot
      boardRef = db.collection(board);
      querySnapshot = await boardRef.orderBy('id').get()
      let boardData = [];
      querySnapshot.forEach((doc)=>{
        let rlData = doc.data();
        boardData.push({...rlData, time : getToday(rlData.time.seconds)});
      })
      boardData = boardData.reverse();
      return boardData;
}

export const writeData = async ({board,data})=>{

    let nextId;
    await db.collection(board).get().then((snap)=>{
      nextId = snap.size;
    })

    await db.collection(board).doc(`${nextId}`)
    .set({
      ...data,
      id: nextId,
      time: firebase.firestore.Timestamp.fromDate(new Date()),
    })
}