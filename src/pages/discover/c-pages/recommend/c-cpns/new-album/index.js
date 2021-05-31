import React, { memo, useEffect, useRef } from 'react'

import {getNewAlbumsAction}from "../../store/actionCreators"

import { Carousel }from "antd"
import HYAlbumCover from "@/components/album-cover"
import HYThemeHeaderRCM from "@/components/theme-header-rcm"
import { useDispatch, useSelector } from 'react-redux'

import {AlbumWrapper}from "./style"

export default memo(function HYNewAlbum() {

  const pageRef = useRef()

  const dispatch = useDispatch()
  
  const {newAlbums} = useSelector(state =>({
    newAlbums:state.getIn(["recommend","newAlbums"])
  }))

  useEffect(()=>{
    console.log('1');
    
    dispatch(getNewAlbumsAction(10))
  },[dispatch])

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" />
      <div className="content">
         <button className="arrow arrow-left sprite_02" onClick={e=>pageRef.current.prev()} ></button>
         <div className="album">
            <Carousel dots={false} ref={pageRef}>
              {
                [0,1].map(item=>{
                  return (
                    <div key={item} className="page">
                       {
                         newAlbums.slice(item*5,(item+1)*5).map((iten,index)=>{
                            return <HYAlbumCover
                                        key={iten.id} 
                                        info={iten} 
                                        size={100}
                                        width={118}
                                        bgp="-570px"
                                        />
                         })
                       }
                    </div>
                  )
                })
              }
            </Carousel>
         </div>
         <button className="arrow arrow-right sprite_02" onClick={e=>pageRef.current.next()}></button>
      </div>
         
    </AlbumWrapper>
  )
})
