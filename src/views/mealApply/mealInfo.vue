<style lang="less">
.meal-container{
    height: 100%;
    .meal-list{
        background-color: #fff;
        li{
            background-image: -webkit-gradient(linear, left top, left bottom, from(#d9d9d9), color-stop(50%, #d9d9d9), color-stop(50%, transparent));
            background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
            background-size: 120% 1px;
            background-repeat: no-repeat;
            background-position: bottom;
            background-origin: content-box;
            webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            box-sizing: border-box;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            font-size: 16px;
            line-height: 1;
            min-height: inherit;
            overflow: hidden;
            width: 100%;
        }
        .meal-list-cont{
            width: 100%;
            box-sizing: border-box;
            padding: 20px 10px;
        }
        .leader-icon{
            width: 22%;
        }
        .meal-list-ft{
            padding-top: 10px;
            font-size: 14px;
            color: #666;
            div{
                width: 49%;
                display: inline-block;
            }
            div:last-child {
                text-align: right;
            }
        }
        .meal-title{
            font-size: 16px;
            font-weight: bold;
            color: #333;
            width: 22%;
        }
        .meal-detail{
            color: #999;
            width:50%;
        }
        .meal-time-people{
            width: 26%;
            text-align: right;
            div{
                display: inline-block;
            }

        }
        .meal-time-icon{
            height: 20px;
            width: 20px;
            border-radius: 50%;
            border: 2px solid #ff7608;
            line-height: 20px;
            text-align: center;
            font-size: 12px;
            color: #ff7608;
            margin-right: 10px;
        }
        .meal-remark{
            font-size: 12px;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width:50%;
        }
        .contact-name{
            font-size: 12px;
            width: 26%;
            text-align: right;
            a {
                color: #26a2ff;
            }
        }
    }
    
}

</style>
<template>
  <div class="meal-container">
    <ul class="meal-list">
        <li>
            <div class="meal-list-cont">
                <div class="meal-list-hd">
                     <div class="page-part">
                         <div class="meal-title">证券大厦</div>
                         <div class="meal-detail">独立式圆桌独立式圆桌</div>
                         <div class="meal-time-people">
                            <div class="meal-time-icon">早</div>
                            <div class="meal-people">8人</div>
                         </div>
                     </div>
                </div>
                <div class="meal-list-bd">
                    <div class="page-part">
                        <div class="leader-icon">
                            <span class="leader-span orange-bg white-text">领导参加</span>
                        </div>
                        <div class="meal-remark">事由：天天天天天天天天天天天天天天</div>
                        <div class="contact-name">
                            <a href="tel:15901678387">小甜甜</a>
                        </div>
                     </div>
                </div>
                <div class="meal-list-ft">
                    <div>
                        2018-02-23
                    </div>
                    <div>
                        技术开发总部
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <mt-tabbar v-model="tab_selected">
        <mt-tab-item id="我的申请">
            <img slot="icon" src="../../assets/images/myApply.png">
            <router-link to="/mealApply/index">
                我的申请
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="待我审批">
            <img slot="icon" src="../../assets/images/myApproval.png">
            待我审批
        </mt-tab-item>
        <mt-tab-item id="所有用餐">
            <img slot="icon" src="../../assets/images/mealList.png">
            <router-link to="/mealApply/mealInfo">
                用餐信息
            </router-link>
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import 'whatwg-fetch'
export default {
  data() {
    return {
        tab_selected:'用餐信息',
        
    };
  },
  methods:{
  }
};
</script>


