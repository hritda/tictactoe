import React, { FC, useLayoutEffect } from 'react';
import { useState, useEffect } from 'react';


interface Box{
 user: string,
 changeUser(user:string):any,
 updateBoard(boxnumber:number):any,
 checkForWin(boxnum:number):any,
 boxnum:number,
};

const Box : FC<Box> = (prop: Box)=>{
   const [symbol,setSymbol] = useState("");
   const [isCLicked, setIsClicked] = useState(false);
   const changeSymbol = (e:React.MouseEvent<HTMLDivElement, MouseEvent>,symbol:string,user:string)=>{
      if(isCLicked==true){
       return ;
      }
     if(symbol==""){
      if(user==="User1"){
         setSymbol("X");
      }
      else{
         setSymbol("O");
      }
      prop.changeUser(prop.user);
     }
    e.currentTarget.style.pointerEvents = "none";
    setIsClicked(true);
   }
 return(
    
    <div onClick={ (e)=>{
      changeSymbol(e,symbol,prop.user);
      prop.updateBoard(prop.boxnum);prop.checkForWin(prop.boxnum)}}   className="Boxelem">{symbol}</div>
    
 )
};

export default Box