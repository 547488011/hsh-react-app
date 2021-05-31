import *as actionTypes from "./constants";

import { getTopBanners,getHotRecommends,getNewAlbums,getTopList} from "@/services/recommend";

const changeTopBannerAction = (res)=>({
  type:actionTypes.CHANGE_TOP_BANNERS,
  topBanners:res.banners
})

const changeHotRecommends = (res)=>({
  type:actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends:res.result
})

const changenewAlbums = (res)=>({
  type:actionTypes.CHANGE_ALBUM,
  newAlbums:res.albums
})

const changeUpRankingAction = (res)=>({
  type:actionTypes.CHANGE_UP_RANKING,
  upRanking:res.playlist
})
const changeNewRankingAction = (res)=>({
  type:actionTypes.CHANGE_NEW_RANKING,
  newRanking:res.playlist 
})
const changeOriginRankingAction = (res)=>({
  type:actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking:res.playlist
})

export const getTopBannerAction = ()=>{
      return dispatch =>{
          getTopBanners().then(res=>{
            // console.log(a);
             dispatch(changeTopBannerAction(res));
          })
      }
}

export const getHotRecommendsAction =(limit)=>{
  return dispatch =>{
    getHotRecommends(limit).then(res=>{
      dispatch(changeHotRecommends(res))
    })
  }
}

export const getNewAlbumsAction = (limit)=>{
  return dispatch=>{
    getNewAlbums(limit).then(res=>{
      dispatch(changenewAlbums(res))
    })
  }
}

export const getTopListAction=(idx)=>{
  return dispatch =>{
    switch(idx){
      case 0:
       return getTopList(idx).then(res=>{
          dispatch(changeUpRankingAction(res));
        })
      case 2:
      return  getTopList(idx).then(res=>{
          dispatch(changeNewRankingAction(res));
        })
      case 3:
       return getTopList(idx).then(res=>{
          dispatch(changeOriginRankingAction(res));
        })
       
      default:
        return
    }
  }
}