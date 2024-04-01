import React, { FC } from "react";
import Box from "./Box";
import { useState, useEffect } from "react";
interface Wrapper {}

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let board: string[][] = [
  new Array("p", "J", "p"),
  new Array("p", "J", "p"),
  new Array("J", "p", "J"),
];



const Wrapper: FC<Wrapper> = () => {
  const [currentUser, setCurrentUser] = useState("User1");
  let boxnumber = 0;
   useEffect(() => {
      // let vl=5;
      // console.log(vl/3);
      // for (let i = 0; i < Math.floor(vl/3); i++) {
      //    for (let j = 0; j < 3; j++) {
      //      console.log(" before i:" + i + "j:" + j + " " + board[i][j]);
      //      if(j%3==2){
      //       board[i][j]="J";
      //      }
      //      console.log("after i:" + i + "j:" + j + " " + board[i][j]);
      //    }

      //  }
       
    },);
  
  const updateBoard = (boxnum: number) => {
    boxnumber = boxnum;
    console.log("this is the box number", boxnum);
    if (!board[Math.floor(boxnum / 3)]) {
      board[Math.floor(boxnum / 3)] = [];
    }
    if (currentUser == "User1") {
      let row = board[Math.floor(boxnum / 3)];
      for (let i = 0; i < 3; i++) {

        console.log(" before i:" + i + " " + row[i]);
    if(i==boxnum % 3){
        row[i] = "X";
    }  
        console.log("after i:" + i + " " + row[i]);
      }
      board[Math.floor(boxnum / 3)][Math.floor(boxnum % 3)] = "X";
      console.log(board[Math.floor(boxnum / 3)][Math.floor(boxnum % 3)]);
    } else {
      board[Math.floor(boxnum / 3)][Math.floor(boxnum % 3)] = "O";
      console.log(board[Math.floor(boxnum / 3)][boxnum % 3]);
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        console.log("i:" + i + "j:" + j + " " + board[i][j]);
      }
    }

    
  };
  const checkForWin = (boxnum:number) => {
    let row = Math.floor(boxnum/3);
    let col = Math.floor(boxnum%3);
    let symbol = board[row][col];
    let j=0,i=0 ;
    //check for entire horizontal line 
    for( j=0;j<3;j++ ){
     if(board[row][j]!== symbol) break;
    }
    if(j===3) alert(currentUser+"wins!!");
    //check for entire column
    for(i=0;i<3;i++){
    if(board[i][col]!==symbol) break;
    }
    if(i===3) alert(currentUser+"wins!!");
    //check for diagonal
    if(row===col){
    for(i=0;i<3;i++){
      if(board[i][i]!==symbol) break;
    }
     for(j=2;j>=0;j--){
      if(board[2-j][j]!==symbol) break;
     }
     if(i===3 || j===-1) alert(currentUser+"wins!!");
    }
    if((row===0 && col===2)||(row===2 && col===0)){
      for(i=2;i>=0;i--){
        if(board[2-i][i]!==symbol) break;
       }
       if(i===-1) alert(currentUser+"wins!!");
    }
    

  };

  const changeCurrentUser = (user: string) => {
    if (user === "User1") {
      setCurrentUser("User2");
    } else {
      setCurrentUser("User1");
    }
  };
  // const prop: Box={
  //  user:currentUser,
  //  changeUser:changeCurrentUser,
  //  updateBoard:updateBoard,
  //  key:
  // }
  return (
    <div className="BoxContainer">
      {nums.map((num) => {
        return (
          <Box 
            key={num}
            user={currentUser}
            changeUser={changeCurrentUser}
            updateBoard={updateBoard}
            checkForWin={checkForWin}
            boxnum={num}
          ></Box>
        );
      })}
    </div>
  );
};

export default Wrapper;
