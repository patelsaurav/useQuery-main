import { useQuery } from "react-query"
import axios from "axios"
export const RQSuperHeroesPage = () => {

 const onSuccess=(data)=>{
  console.log("success",data)
 }

 const onError=(err)=>{
 console.log("error",err)
 }

  const {isLoading,data,isError,error,isFetching,refetch}=useQuery('super-hero',()=>{
   return axios.get('http://localhost:4000/superheroes')
  },{
    // cacheTime:5000
    // staleTime:30000
    // enabled:false // now we have power to call api  usequery not call api
    // onSuccess,
    // onError
    select:(data) =>{
        return data.data
    }
  })
//staleTime meaning that stop network call for 30c second and fetch data from cache
//refetchInterval:2000 refetch at 2000

//query for selecting product ,if product 1 selected(queryById)
// let heroId=1;
// const {data:dataOfQueryById}=useQuery(['super-hero',heroId],({queryKey})=>{
//   return axios.get(`http://localhost:4000/superheroes/${queryKey[1]}`)
//  })

  //1 st unique id
  //2 nd return promise

  if(isLoading){
    return <h2>Loading....</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }
  return(<>

  <h2>React Query Super Heroes Page</h2>
  <button onClick={()=>{
refetch()
  }}>
Fetch Heros
  </button>
  {
    data.map((data1,index)=>{
        return <div key={index}>{data1?.name}</div>
    })
  }
  </> 
  )
}
