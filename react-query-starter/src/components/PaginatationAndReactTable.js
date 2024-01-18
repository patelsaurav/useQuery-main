import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'


export const PaginatationAndReactTable = () => {

    const [page,setPage]= useState(1);
 let fetchData =async()=>{
 return await axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`)
 }

     const {data,isLoading,isFetching}=useQuery(["colurs",page],fetchData,{keepPreviousData:true})

    return (<>

    <div>PaginatationAndReactTable</div>

    {
        data?.data?.map((curr,index)=>{
          return <div key={index}>{curr.id} {curr.label}</div>
        })
    }
    <button onClick={()=>{
        setPage((page)=>page-1)
    }} disabled={page==1}>dec</button>
    {page}
    <button onClick={()=>{
        setPage((page)=>page+1)
    }} disabled={page==4}>inc</button>
    <div>
{isFetching?<div>Loading..</div>:""}
    </div>
    </>
  )
}
