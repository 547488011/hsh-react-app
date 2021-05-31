import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import HYThemeHeaderRCM from "@/components/theme-header-rcm"
import HYTopRanking from "@/components/top-ranking"
import {getTopListAction} from "../../store/actionCreators"

import { RankingWrapper } from "./style"


export default memo(function HYRecommendRanking() {

    const {upRanking,newRanking,originRanking} = useSelector(state=>({
     upRanking:state.getIn(["recommend","upRanking"]),
     newRanking:state.getIn(["recommend","newRanking"]),
     originRanking:state.getIn(["recommend","originRanking"]),
    }),shallowEqual);

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTopListAction(0))
        dispatch(getTopListAction(2))
        dispatch(getTopListAction(3))
    },[dispatch])
  return (
    <RankingWrapper>
        <HYThemeHeaderRCM title="榜单" />
        <div className="tops">
        <HYTopRanking info={upRanking}/>
        <HYTopRanking info={newRanking}/>
        <HYTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
