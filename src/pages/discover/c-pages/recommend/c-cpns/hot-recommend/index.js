import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import HYSongsCover from "@/components/songs-cover";

import {
  HotRecommendWrapper
}from './style'

import {getHotRecommendsAction} from "../../store/actionCreators"


export default memo(function HYHotRecommend() {

  //redux hooks
    const { hotRecommends } = useSelector(state=>({
      hotRecommends:state.getIn(["recommend","hotRecommends"])
    }),shallowEqual);
    const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getHotRecommendsAction(8))
  },[dispatch])
  return (
    < HotRecommendWrapper >
      <HYThemeHeaderRCM title="热门推荐" keywords={["华语","流行","民谣","摇滚","电子"]}/>
      <div className="recommend-list">
        {
             hotRecommends.map((item,index)=>{
            return <HYSongsCover info={item} key={item.id} />
          })
        }
      </div>
    </ HotRecommendWrapper>
  )
})
