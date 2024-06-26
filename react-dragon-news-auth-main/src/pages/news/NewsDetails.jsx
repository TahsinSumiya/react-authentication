import React from 'react'
import Header from '../Shared/Header/Header'
import BreakingNews from '../Home/BreakingNews'
import Navbar from '../Shared/Navbar/Navbar'
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import { useParams } from 'react-router-dom'

const NewsDetails = () => {
    const {id} = useParams()
  return (
    <>
     <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
                <div className="md:col-span-2 border">
          <p>{id}</p>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsDetails