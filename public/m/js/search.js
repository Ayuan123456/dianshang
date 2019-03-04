$(function(){
    //使用localstraong保存搜索历史
    //添加点击事件
    //获取文本
    //为空判断
    //保存
    //取值
    //遍历
    //去重
    $('.seachButton').on('tap',function(){
         var his= $('.seachBar').val().trim();
         console.log(his);
         if (his=='') {
            mui.toast('请使用合法字符',{ duration:'long', type:'div' })
             return false
         }
         //保存
         //创建空数组保存
         var hisLog=localStorage.getItem('key')
         if (hisLog) {
             hisLog=JSON.parse(hisLog)
         }else{
             hisLog=[]
         }
         for(var i=0;i<hisLog.length;i++){
             if (hisLog[i].keyword==his) {
                 hisLog.splice(i,1)
                 i--
             }
         }
         hisLog.unshift({
             keyword:his,
             time:new Date().getTime()
         })
         
         
         hisLog=JSON.stringify(hisLog)
         
         localStorage.setItem('key',hisLog)

         //清空搜索框
         $('.seachBar').val('')
         searchHis()
    })
    //搜索事件
    searchHis()
    
})
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
//删除函数
$('.ulList').on('tap','i',function(){
    var hisLog=localStorage.getItem('key')
    if (hisLog) {
        hisLog=JSON.parse(hisLog)
    }else{
        hisLog=[] 
    }
    //遍历,添加ID
    //获取id
    var idd=$(this).data('id')
    console.log($(this).data('id'));
    hisLog.splice(idd,1)
    hisLog=JSON.stringify(hisLog)
         
    localStorage.setItem('key',hisLog)
    searchHis()
})
 
  //清空函数
  $('.clearHis').on('tap',function(){
      localStorage.clear()
      $('.ulList').empty()
      $('.ulList').html(' <li class="mui-table-view-cell" >在下实在是不能显示更多了</li>')
  })
  function searchHis() {
    var hisLog=localStorage.getItem('key')
     if (hisLog) {
         hisLog=JSON.parse(hisLog)
     }else{
         hisLog=[{'keyword':'在下实在是不能显示更多了'}]
         
     }
     //调用模板

     var html=template('historyTpl',{hisLog})
     $('.ulList').html(html)
    
}