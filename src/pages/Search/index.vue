<template>
  <div>
    <TapyNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="searchParams.categoryName">
                {{ searchParams.categoryName }}
                <i @click="removeCategoryName">×</i>
            </li>
            <!-- 关键字的分类 -->
            <li class="with-x" v-if="searchParams.keyWord">
                {{ searchParams.keyWord }}
                <i @click="removekeyword">×</i>
            </li>
            <!-- 品牌的分类 -->
            <li class="with-x" v-if="searchParams.trademark">
                {{ searchParams.trademark.split(':')[1] }}
                <i @click="removetrademark">×</i>
            </li>
            <!-- 平台售卖的属性值 -->
            <li class="with-x" v-for="(attrValue,index) in searchParams.props" :key="index">
                {{ attrValue.split(':')[1] }}
                <i @click="removeprops(index)">×</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector @trademarkInfo="trademarkInfo" @attrInfo="attrInfo"/>

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{active: isOne}" @click="changeOrder('1',searchParams.order)">
                  <a href="#">综合 <span v-if="isOne" class="iconfont"  :class="{'icon-shangxiazuoyouTriangle13':isAsc,'icon-shangxiazuoyouTriangle11':isDesc}"></span></a>
                </li>
                <li :class="{active: isTwo}" @click="changeOrder('2',searchParams.order)">
                  <a href="#">价格 <span v-if="isTwo" class="iconfont" :class="{'icon-shangxiazuoyouTriangle13':isAsc,'icon-shangxiazuoyouTriangle11':isDesc}"></span></a>
                </li>
                <!-- <li>
                  <a href="#">新品</a>
                </li> -->
              </ul>
            </div>
          </div>
          <!-- 销售产品列表 -->
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="(good) in goodsList" :key="good.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link :to="`/detail/${good.id}`">
                      <img v-lazy="good.defaultImg" />
                    </router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ good.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" :title="good.title">{{ good.title }}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>{{ good.hotScore }}</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 分页器 -->
          <Pagination :pageNo='searchParams.pageNo' :pageSize='searchParams.pageSize' :total='total' :continues='5' @getPageNo='getPageNo'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchSelector from './SearchSelector/SearchSelector'
  import { mapGetters,mapState } from 'vuex'
  export default {
    name: 'Search',

    data(){
      return{
        // 带给服务器的参数
        searchParams:{
          // 一级ID、
          category1Id:"",
          // 二级ID、
          category2Id:"",
          // 三级ID、
          category3Id: "",
          // 分类名字
          categoryName: "",
          // 关键字
          keyWord: "",
          // 排序
          order: "1:desc",
          // 当前页
          pageNo: 1,
          // 一页共多少条数据
          pageSize: 10,
          // 平台售卖属性带的参数
          props:[],
          // 品牌
          trademark: ""
        }
      }
    },
    beforeMount(){ //当组件挂载完毕之前执行一次 {比mounted更早执行}
        // 复杂的写法
        // this.searchParams.category1Id = this.$route.query.category1Id 
        // 简单语法 es6 语法  Object.assign   合并对象
        Object.assign(this.searchParams,this.$route.query,this.$route.params)
    },
    components: {
      SearchSelector
    },
    mounted(){
      this.getDate()
      // console.log("searchParams",this.searchParams.props)
    },
    methods:{
      // 自定义事件回调函数获取当前第几页
      getPageNo(pageNo){
        // 整理带给服务器的参数
        // console.log("pageNo",pageNos)
        // this.searchParams.pageNo =  2
        this.searchParams.pageNo = pageNo
        console.log("this.searchParams.pageNo",this.searchParams.pageNo)
        // 再次发请求
        this.getDate()
      },
      // 自定义事件回调子组件专递的数据
      trademarkInfo(trademark){
        // trademark
        // Object.assign(this.searchParams,this.trademark='ID' + ':' +  )
        this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`
        this.getDate()
      },
      // 自定义回调组件（平台售卖属性值）
      attrInfo(attr,attrValue){
        // 参数的格式为数组
        let props =  `${attr.attrId}:${attrValue}:${attr.attrName}`
        // 数组去重
        if(this.searchParams.props.indexOf(props) == -1){
           this.searchParams.props.push(props)
        }
        this.getDate()
        // console.log(
        //   "attr",attr,"attrvalue",attrValue
        // )

      },
      // 向服务器发请求获取search模块的数据
      getDate(){
        /*
            {
              "category3Id": "61",
              "categoryName": "手机",
              "keyword": "小米",
              "order": "1:desc",
              "pageNo": 1,
              "pageSize": 10,
              "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
              "trademark": "4:小米"
            }
        */
        this.$store.dispatch("getSearchList",this.searchParams)
        
      },
      // 删除分类名字
      removeCategoryName(){
        this.searchParams.categoryName = undefined
        this.searchParams.category1Id = undefined;
        this.searchParams.category2Id = undefined;
        this.searchParams.category3Id = undefined;
        this.getDate()
        // 
        if(this.$route.params){
           this.$router.push({name:'Search',params:this.$route.params})
        }
      },
      // 删除关键字名字
      removekeyword(){
        this.searchParams.keyWord = undefined
        this.getDate()
        // 通知兄弟组件Header清除关键字
        this.$bus.$emit('clear');
        // 进行路由跳转
        if(this.$route.query){
           this.$router.push({name:'Search',query:this.$route.query})
        }
      },
      // 删除品牌名字
      removetrademark(){
        this.searchParams.trademark = undefined
        // 品牌信息清空之后再次发请求
         this.getDate()
      },
      // 删除平台售卖的属性值
      removeprops(index){
        this.searchParams.props.splice(index,1)
        this.getDate()
      },
      changeOrder(flag,value){
        // flag形参，1代表综合，2代表价格
        // console.log("flag",flag)
        // console.log("value",value)
        let originOrder = this.searchParams.order
        let originFlag = this.searchParams.order.split(":")[0]
        let orginSort = this.searchParams.order.split(":")[1]
        let newOrder = ''
        // 点击的综合
        if(flag == originFlag){
            newOrder = `${originFlag}:${orginSort == "desc" ? "asc" : "desc"}`
        }else{
          // 点击的是价格
            newOrder = `${flag}:${'desc'}`
        }
        
        this.searchParams.order = newOrder

        // 再次发请求
        this.getDate() 

      }
    },
    computed:{
      // mapGetters里面的写法 
      ...mapGetters(["goodsList"]),
      // mapState获取state数据
      ...mapState({
        total:state => state.search.searchList.total
      }),
      isOne(){
        return this.searchParams.order.indexOf('1') != -1
      },
      isTwo(){
        return this.searchParams.order.indexOf('2') != -1
      },
      isAsc(){
        return this.searchParams.order.indexOf('asc') != -1
      },
      isDesc(){
        return this.searchParams.order.indexOf('desc') != -1
      }
    },
    // 数据监听：监听组件实例身上的属性的属性值变化
    watch:{
      // 监听路由的信息是否发生过变化，如果发生变化，再次发送请求
      $route(newValue,oldValue){
        // 再次发送请求之前整理给服务器参数
        Object.assign(this.searchParams,this.$route.query,this.$route.params)
        console.log("this.searchParams",this.searchParams)
        this.getDate()
        this.searchParams.category1Id = '';
        this.searchParams.category2Id = '';
        this.searchParams.category3Id = '';
      }
    }
  }
</script>

<style lang="less" scoped>
  .main {
    margin: 10px 0;

    .py-container {
      width: 1200px;
      margin: 0 auto;

      .bread {
        margin-bottom: 5px;
        overflow: hidden;

        .sui-breadcrumb {
          padding: 3px 15px;
          margin: 0;
          font-weight: 400;
          border-radius: 3px;
          float: left;

          li {
            display: inline-block;
            line-height: 18px;

            a {
              color: #666;
              text-decoration: none;

              &:hover {
                color: #4cb9fc;
              }
            }
          }
        }

        .sui-tag {
          margin-top: -5px;
          list-style: none;
          font-size: 0;
          line-height: 0;
          padding: 5px 0 0;
          margin-bottom: 18px;
          float: left;

          .with-x {
            font-size: 12px;
            margin: 0 5px 5px 0;
            display: inline-block;
            overflow: hidden;
            color: #000;
            background: #f7f7f7;
            padding: 0 7px;
            height: 20px;
            line-height: 20px;
            border: 1px solid #dedede;
            white-space: nowrap;
            transition: color 400ms;
            cursor: pointer;

            i {
              margin-left: 10px;
              cursor: pointer;
              font: 400 14px tahoma;
              display: inline-block;
              height: 100%;
              vertical-align: middle;
            }

            &:hover {
              color: #28a3ef;
            }
          }
        }
      }

      .details {
        margin-bottom: 5px;

        .sui-navbar {
          overflow: visible;
          margin-bottom: 0;

          .filter {
            min-height: 40px;
            padding-right: 20px;
            background: #fbfbfb;
            border: 1px solid #e2e2e2;
            padding-left: 0;
            border-radius: 0;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

            .sui-nav {
              position: relative;
              left: 0;
              display: block;
              float: left;
              margin: 0 10px 0 0;

              li {
                float: left;
                line-height: 18px;

                a {
                  display: block;
                  cursor: pointer;
                  padding: 11px 15px;
                  color: #777;
                  text-decoration: none;
                }

                &.active {
                  a {
                    background: #e1251b;
                    color: #fff;
                  }
                }
              }
            }
          }
        }

        .goods-list {
          margin: 20px 0;

          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              height: 100%;
              width: 20%;
              margin-top: 10px;
              line-height: 28px;

              .list-wrap {
                .p-img {
                  padding-left: 15px;
                  width: 215px;
                  height: 255px;

                  a {
                    color: #666;
                    img {
                      max-width: 100%;
                      height: auto;
                      vertical-align: middle;
                    }
                  }
                }

                .price {
                  padding-left: 15px;
                  font-size: 18px;
                  color: #c81623;

                  strong {
                    font-weight: 700;

                    i {
                      // margin-left: -5px;
                    }
                  }
                }

                .attr {
                  padding-left: 15px;
                  width: 85%;
                  overflow: hidden;
                  margin-bottom: 8px;
                  min-height: 38px;
                  cursor: pointer;
                  line-height: 1.8;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;

                  a {
                    color: #333;
                    text-decoration: none;
                  }
                }

                .commit {
                  padding-left: 15px;
                  height: 22px;
                  font-size: 13px;
                  color: #a7a7a7;

                  span {
                    font-weight: 700;
                    color: #646fb0;
                  }
                }

                .operate {
                  padding: 12px 15px;

                  .sui-btn {
                    display: inline-block;
                    padding: 2px 14px;
                    box-sizing: border-box;
                    margin-bottom: 0;
                    font-size: 12px;
                    line-height: 18px;
                    text-align: center;
                    vertical-align: middle;
                    cursor: pointer;
                    border-radius: 0;
                    background-color: transparent;
                    margin-right: 15px;
                  }

                  .btn-bordered {
                    min-width: 85px;
                    background-color: transparent;
                    border: 1px solid #8c8c8c;
                    color: #8c8c8c;

                    &:hover {
                      border: 1px solid #666;
                      color: #fff !important;
                      background-color: #666;
                      text-decoration: none;
                    }
                  }

                  .btn-danger {
                    border: 1px solid #e1251b;
                    color: #e1251b;

                    &:hover {
                      border: 1px solid #e1251b;
                      background-color: #e1251b;
                      color: white !important;
                      text-decoration: none;
                    }
                  }
                }
              }
            }
          }
        }

        .page {
          width: 733px;
          height: 66px;
          overflow: hidden;
          float: right;

          .sui-pagination {
            margin: 18px 0;

            ul {
              margin-left: 0;
              margin-bottom: 0;
              vertical-align: middle;
              width: 490px;
              float: left;

              li {
                line-height: 18px;
                display: inline-block;

                a {
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  border: 1px solid #e0e9ee;
                  margin-left: -1px;
                  font-size: 14px;
                  padding: 9px 18px;
                  color: #333;
                }

                &.active {
                  a {
                    background-color: #fff;
                    color: #e1251b;
                    border-color: #fff;
                    cursor: default;
                  }
                }

                &.prev {
                  a {
                    background-color: #fafafa;
                  }
                }

                &.disabled {
                  a {
                    color: #999;
                    cursor: default;
                  }
                }

                &.dotted {
                  span {
                    margin-left: -1px;
                    position: relative;
                    float: left;
                    line-height: 18px;
                    text-decoration: none;
                    background-color: #fff;
                    font-size: 14px;
                    border: 0;
                    padding: 9px 18px;
                    color: #333;
                  }
                }

                &.next {
                  a {
                    background-color: #fafafa;
                  }
                }
              }
            }

            div {
              color: #333;
              font-size: 14px;
              float: right;
              width: 241px;
            }
          }
        }
      }
    }
  }
</style>