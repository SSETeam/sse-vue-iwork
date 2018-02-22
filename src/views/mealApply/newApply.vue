<template>
  <div class="new-apply">
    <div class="page-part-apply">
      <div class="page-part">
          <span class="apply-data">2月13日</span>
          <span class="week">周二</span>
          <span class="apply-radio">
            <mt-radio
            v-on:change="checkFoot"
            v-model="value"
            :options="options">
            </mt-radio>
          </span>
          <span class="eat-time">{{this.eatTime}}</span>
      </div>
    </div>
    <div class="page-part-apply">
        <div class="page-part">
            <mt-field style="width: 100%;" label="用餐人数" placeholder="请填写人数" type="number" v-model="userNum"></mt-field>
        </div>
        <span class="apply-radio" style="text-align: right;">
          <mt-radio
          v-on:change="checkPlace"
          v-model="valuePlace"
          :options="optionsPlace">
          </mt-radio>
        </span>
    </div>
    <div class="page-part-apply">
        <div class="page-part">
            <mt-field style="width: 100%;" label="接待事由" placeholder="请填写事由" v-model="userNum"></mt-field>
        </div>
        <div class="page-part">
          <span class="apply-radio" style="text-align: right;">
            <mt-radio
            v-on:change="checkLeader"
            v-model="valueLeader"
            :options="optionsLeader">
            </mt-radio>
          </span>
        </div>
        <div class="page-part">
          <span class="apply-checklist">
            <mt-checklist
              class="mint-cell-apply"
              v-on:change="checkPeople"
              v-model="valuePeople"
              :options="optionsPeople">
            </mt-checklist>
          </span>
        </div>
        <div class="page-part">
          <span class="apply-radio-type">
            <mt-radio
            title="接待类型"
            v-on:change="checkType"
            v-model="valueType"
            :options="optionsType">
            </mt-radio>
          </span>
        </div>
    </div>
    <div class="page-part-apply">
        <div style="position: relative;" v-on:click="foodModel">
          <div class="page-part">
            <mt-field class="foot-model" label="用餐模式" disabled placeholder="用餐模式" v-model="footModel"></mt-field>
          </div>
          <span class="icon-arrow-down">∨</span>
        </div>
        <mt-popup
          style="width: 100%;"
          v-model="popupVisible"
          position="center">
         <div class="apply-model">
          <mt-checklist
            class="mint-cell-apply"
            v-on:change="checkModel"
            v-model="valueModel"
            :options="optionsModel">
          </mt-checklist>         
          <div class="eat-num">
            <mt-field label="早餐（9元/份）" placeholder="份数" type="number" v-model="breakfastNum"></mt-field>
            <mt-field label="午餐（30元/份）" placeholder="份数" type="number" v-model="lunchNum"></mt-field>
            <mt-field label="晚餐（23元/份）" placeholder="份数" type="number" v-model="dinnerNum"></mt-field>
          </div>
        </div>
        </mt-popup>
        
    </div>
   <div class="page-part-apply">
        <mt-field label="联系人" style="width: 100%;" placeholder="联系人" type="请填写联系人" v-model="contacts"></mt-field>
        <mt-field style="width: 100%;" label="手机号码" placeholder="请填写手机号码" v-model="phone"></mt-field>
    </div>
    <div class="page-part-apply">
      <mt-field style="width: 100%;" label="备注" placeholder="请填写备注" v-model="remark"></mt-field>
    </div>
    <mt-button type="primary" style="width: 100%;">立即发送</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popupVisible: false,
      value: '2',
      valuePlace: '1',
      valueLeader: '1',
      valueType: '1',
      footModel: '独立式圆桌(80元/100元)',
      valuePeople: [],
      valueModel: ['4'],
      eatTime: "11:30",
      userNum: 0,
      breakfastNum: 0,
      lunchNum: 0,
      dinnerNum: 0,
      remark: '',
      contacts: '',
      phone: '',
      options: [
        {
          label: "早餐",
          value: "1"
        },
        {
          label: "午餐",
          value: "2"
        },
        {
          label: "晚餐",
          value: "3"
        }
      ],
      peopleList: [
        {
          label: "张默默",
          value: "1"
        },
        {
          label: "李二",
          value: "2"
        },
        {
          label: "网三",
          value: "3"
        },
        {
          label: "李四",
          value: "4"
        },
        {
          label: "王麻子",
          value: "5"
        },
        {
          label: "小六子",
          value: "6"
        }
      ],
      optionsPlace: [
        {
          label: "证券大厦",
          value: "1"
        },
        {
          label: "迎春路A",
          value: "2"
        },
        {
          label: "迎春路B",
          value: "3"
        }
      ],
      optionsLeader: [
        {
          label: "所领导参加",
          value: "1"
        },
        {
          label: "所领导不参加",
          value: "2"
        }
      ],
      optionsPeople: [
        {
          label: "张默默",
          value: "1"
        },
        {
          label: "李二",
          value: "2"
        },
        {
          label: "网三",
          value: "3"
        },
        {
          label: "李四",
          value: "4"
        },
        {
          label: "王麻子",
          value: "5"
        },
        {
          label: "小六子",
          value: "6"
        }
      ],
      optionsType: [
        {
          label: "一般公务接待",
          value: "1"
        },
        {
          label: "重要公务接待",
          value: "2"
        },
        {
          label: "商务接待",
          value: "3"
        },
        {
          label: "外事接待",
          value: "4"
        }
      ],
      optionsModel: [
        {
          label: "开放式自助(早餐9元/午餐30元/晚餐23元)",
          value: "1"
        },
        {
          label: "半开放式自助(早餐9元/午餐30元/晚餐23元)",
          value: "2"
        },
        {
          label: "独立式自助(80元/100元)",
          value: "3"
        },
        {
          label: "独立式圆桌(80元/100元)",
          value: "4"
        },
        {
          label: "申领餐券，【复选】选择后需填写份数",
          value: "5"
        }
      ],


    };
  },
  methods: {
    checkFoot: function(event) {
      const config = {
        "1": "08:00",
        "2": "11:30",
        "3": "18:00"
      };
      this.eatTime = config[event];
    },
    checkPlace: function(event) {
      
    },
    checkLeader: function(event) {
      this.optionsPeople = event == '1' ? this.peopleList : []
    },
    checkPeople: function(event) {
      
    },
    checkType: function(event) {
      
    },
    checkModel: function(event) {
      console.log(event)
      const arry = this.optionsModel.filter((k,v) => {
         for(let i = 0; i < event.length; i++){
           if(event[i] == k.value){
             return k
           }
         }
      })
      this.footModel = arry.map((k) =>{
        return k.label
      })
      console.log(this.footModel)
    },
    foodModel: function() {
      this.popupVisible = true
    },

  }
};
</script>

<style lang="less">
.apply-data {
  font-size: 18px;
  font-weight: bold;
}
.eat-num{
  width: 60%;
  margin-left: 10%;
  margin-top: -1px;
  .mint-cell{
    min-height: 28px;
  }
}
.page-part-apply {
  background: #fff;
  padding: 20px 10px;
  margin-bottom: 10px;
  .mint-cell:last-child {
    background-image: -webkit-linear-gradient(
      bottom,
      #d9d9d9,
      #d9d9d9 50%,
      transparent 0
    );
    background-image: linear-gradient(
      0deg,
      #d9d9d9,
      #d9d9d9 50%,
      transparent 0
    );
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom;
  }
  .icon-arrow-down {
    position: absolute;
    top: 12px;
    right: -2px;
    font-size: 19px;
    font-weight: bold;
  }
}
.new-apply {
  .week {
    padding-left: 2px;
    padding-top: 3px;
    display: inline-block;
  }
  .eat-time {
    padding-top: 6px;
    padding-left: 20px;
  }
}
.apply-radio {
  .mint-radiolist-title {
    display: none;
  }
}
.apply-radio-type {
  .mint-radiolist-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
}
.apply-radio-type, .apply-radio {
  .mint-cell {
    display: inline-block;
    min-height: 28px;
  }
  .mint-radio-core {
    height: 12px;
    width: 12px;
  }
  .mint-cell-wrapper {
    background-image: none;
    padding: 0;
    font-size: 12px;
  }
  .mint-radiolist-label {
    padding: 0 0 0 10px;
  }
  .mint-radio-label {
    margin-left: 2px;
  }
  .mint-radio-core::after {
    top: 2px;
    left: 2px;
    width: 6px;
    height: 6px;
  }
  .mint-cell:last-child {
    background-image: none;
  }
}
.apply-checklist{
    .mint-cell-apply .mint-cell{
      display: inline-block;
      min-height: 28px;
    }
    .mint-checkbox-core {
      height: 12px;
      width: 12px;
    }
    .mint-cell-wrapper {
      background-image: none;
      padding: 0;
      font-size: 12px;
    }
    .mint-checkbox-title {
      display: none;
    }
    .mint-checkbox-label {
      margin-left: 2px;
    }
    .mint-checkbox-core::after {
      top: 1px;
      left: 3px;
      width: 3px;
      height: 6px;
    }
    .mint-cell:last-child {
      background-image: none;
    }
}
.apply-model{
  padding: 10px;
  .mint-cell-wrapper {
    font-size: 12px;
  }
}
.foot-model{
  width: 100%;
  .mint-cell-wrapper {
    font-size: 12px;
  }
}
.page-part-apply,{
  .mint-cell-wrapper {
    font-size: 12px;
  }
}
</style>
