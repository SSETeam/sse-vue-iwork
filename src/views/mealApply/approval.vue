<template>
  <div class="meal-container">
    <div class="page-part search-div">  
        <img class="search-img" src="../../assets/images/search.png">
        <mt-field label="" placeholder="搜索" v-model="search"></mt-field>
    </div>
    <div class="page-part apply-div">
        <div class="flex-1">迎春路B栋</div>
        <div class="flex-1 pt-2">
            <span class="">2月13日</span>
            <span class="gray-text font-size-10">午餐</span>
        </div>    
        <div class="flex-1 leader-div"></div>
        <div class="gray-text pt-2">18人</div>
    </div>
    <div class="page-part apply-div">
        <div class="flex-1">迎春路B栋</div>
        <div class="flex-1 pt-2">
            <span class="">2月13日</span>
            <span class="gray-text font-size-10">午餐</span>
        </div>    
        <div class="flex-1 leader-div"></div>
        <div class="gray-text pt-2">18人</div>
    </div>
    <div class="page-part apply-div">
        <div class="flex-1">迎春路B栋</div>
        <div class="flex-1 pt-2">
            <span class="">2月13日</span>
            <span class="gray-text font-size-10">午餐</span>
        </div>    
        <div class="flex-1 leader-div">
            <span class="leader-span orange-bg white-text">领导参加</span> 
        </div>
        <div class="gray-text pt-2">18人</div>
    </div>
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
            所有用餐
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
        tab_selected:'待我审批',
        search:'',
    };
  },
  methods:{
  }
};
</script>

<style lang="less">
.meal-container{
    height: 100%;
    .search-div{
        margin: 10px;
        border-radius: 2px;
    }
    .search-img{
        width: 20px;
        height: 20px;
        margin: 15px;
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
}
</style>
