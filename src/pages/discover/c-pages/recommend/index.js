import React, { memo} from 'react'

import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
}from "./style"

import HYTopBanner from "./c-cpns/top-banner"
import HYHotRecommend from "./c-cpns/hot-recommend"
import HYNewAlbum from "./c-cpns/new-album";
import HYRecommendRanking from "./c-cpns/recommend-ranking"


function HYRecommend(props) {
  
return (
  <RecommendWrapper>
    <HYTopBanner/>
    <Content className="wrap-v2">
      <RecommendLeft>
        <HYHotRecommend/>
        <HYNewAlbum/>
        <HYRecommendRanking/>
      </RecommendLeft>
      <RecommendRight></RecommendRight>
    </Content>
  </RecommendWrapper>
)
}



export default memo(HYRecommend);

 
// function HYRecommend(props) {
//     const {getBanners} = props;
//     useEffect(() => {
//       getBanners();
//     }, [getBanners])
//   return (
//     <div>
//         <h2>HYRecommend</h2>
//     </div>
//   )
// }

// const mapStateToProps = state=>{
//   return {
//     topBanners:state.recommend.topBanners
//   }
 
// }

// const mapDispatchToProps = dispatch=>{
//     return{
//       getBanners:()=>{
       
//         dispatch(getTopBannerAction()) 
//       }
//     } 
// }

// export default connect(mapStateToProps,mapDispatchToProps)(memo(HYRecommend))
