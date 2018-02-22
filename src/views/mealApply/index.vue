<template>
  <div class="meal-container">
    <div class="page-part wx-bg white-text header">
        <div class="flex-1">
            <div class="white-bg logo-div">
                <img class="logo-img" src="../../assets/images/newApply.png">
            </div>
            <div class="logo-title">
                新建申请
            </div>
        </div>
        <div class="flex-1">
            <div class="white-bg logo-div">
                <img class="logo-img" src="../../assets/images/draft.png">
            </div>
            <div class="logo-title">
                草稿 (0)
            </div>
        </div>     
    </div>
    <div class="page-part apply-div" @click="handlePopup">
        <div class="flex-1">迎春路B栋</div>
        <div class="flex-1 pt-2">
            <span class="">2月13日</span>
            <span class="gray-text font-size-10">午餐</span>
        </div>    
        <div class="flex-1 leader-div"></div>
        <div class="gray-text pt-2">03-01<img slot="icon" src="../../assets/images/more_if.png"></div>
    </div>
    <div class="page-part apply-div" @click="handlePopup">
        <div class="flex-1">迎春路B栋</div>
        <div class="flex-1 pt-2">
            <span class="">2月13日</span>
            <span class="gray-text font-size-10">午餐</span>
        </div>    
        <div class="flex-1 leader-div"></div>
        <div class="gray-text pt-2">03-01<img slot="icon" src="../../assets/images/more_if.png"></div>
    </div>
    <div class="page-part apply-div" @click="handlePopup">
        <div class="flex-1">迎春路B栋</div>
        <div class="flex-1 pt-2">
            <span class="">2月13日</span>
            <span class="gray-text font-size-10">午餐</span>
        </div>    
        <div class="flex-1 leader-div">
            <span class="leader-span orange-bg white-text">领导参加</span> 
        </div>
        <div class="gray-text pt-2">03-01<img slot="icon" src="../../assets/images/more_if.png"></div>
    </div>
    <mt-tabbar v-model="tab_selected">
        <mt-tab-item id="我的申请">
            <img slot="icon" src="../../assets/images/myApply.png">
            我的申请
        </mt-tab-item>
        <mt-tab-item id="待我审批">
            <img slot="icon" src="../../assets/images/myApproval.png">        
            <router-link to="/mealApply/approval">
                待我审批
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="所有用餐">
            <img slot="icon" src="../../assets/images/mealList.png">
            <router-link to="/mealApply/mealInfo">
                用餐信息
            </router-link>
        </mt-tab-item>
    </mt-tabbar>
    <mt-actionsheet
        :actions="actionsList"
        v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
        tab_selected:'我的申请',
        sheetVisible:false,
        actionsList:[{name:'重新编辑'},{name:'关闭'}]
    };
  },
  methods:{
      handlePopup(){
          this.sheetVisible=true;
      }
  }
};
</script>

<style lang="less">
.meal-container{
    height: 100%;
    .header{
        height: 150px;
        .logo-div{
            height: 70px;
            width: 70px;
            border-radius: 50%;
            margin-left: 60px;
            margin-top: 35px;
        }
        .logo-img{
            margin-left: 20px;
            margin-top: 20px;
        }
        .logo-title{
            text-align: center;
            margin-top: 10px;
        }
    }
    .apply-div{
        height: 25px;
        padding: 15px;
        margin-bottom: 10px;
        .leader-div{
            font-size: 10px;
            width: 40px;
            padding: 2px;
        }
        .leader-span{
            padding: 2px;
            border-radius: 2px;
        }
    }
    .mint-popup{
        width: 100%;
        text-align: center;
        bottom: 0;
        top: auto;
        .opt-div{
            border-bottom: 1px solid #fafafa;
            height: 30px;
            padding-top: 16px;
        }
    }
}
</style>
