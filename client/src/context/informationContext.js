import React, { createContext, useState } from "react";

export const InfomationContext  = createContext('data')



export function InformationUserProvider(props){
  const [data , setData]  = useState([{name:'bali',in:'27 April',out:'31 April'}])
  const  dataValue = { data, setData };
  return (
      <InfomationContext.Provider value={dataValue}>
          {props.children}
      </InfomationContext.Provider>
  )
}