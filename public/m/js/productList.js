$(function(){
    // 截取传送过来的参数
    
    //
    // 发送请求给服务器
    //创建对象
    var pName= geturlName('search')
    console.log(pName);
    
    var obj ={
        page:1,
        pageSize:4,
        proName: pName,
    }
     $.ajax({
         url:"/product/queryProduct",
         data:obj,
         dataType:"json",
         success:function(rows ){
             var html =template('proTpl', rows);
             $('.porList').html(html)
         }
     })
    //使用localstraong保存搜索历史  
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
        //  $('.seachBar').val('')
        //  searchHis()
         location ='productList.html?'+his+'&time='+new Date().getTime()
    })

    //调用排序点击事件
    paixu()
    // 排序点击事件
    function paixu (){
        $('.paixuList a').on("tap",function(){
            $(this).addClass('active').siblings().removeClass('active');
            var sort=$(this).data('sort');
            if (sort==2) {
                sort=1
               
                $(this).find('i').removeClass('fa fa-angle-down').addClass('fa fa-angle-up')
            }else{
                sort=2
               
                $(this).find('i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down')
            }
            $(this).data('sort' ,sort)
            //发请求传值
            var type =$(this).data('type');
            console.log(type);
            
            var obj ={
                page:1,
                pageSize:4,
                proName: pName,
                
            }
            //动态给对象添加值
            obj[type]=sort
            $.ajax({
                url:"/product/queryProduct",
                data:obj,
                dataType:"json",
                success:function(rows ){
                    var html =template('proTpl', rows);
                    $('.porList').html(html)
                }
            })
        })
    } 
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // 封装一个函数获取传送过来的参数名
    
    function geturlName ( name){

        var urlName= location.search.substr(1).split("&");
        console.log(urlName);
        
        //循环变历
        for(var i=0;i<urlName.length;i++){
           if (urlName[i].split('=')[0] == name   ) {
               console.log(urlName[i].split('=')[1]);
               
               return decodeURI(urlName[i].split('=')[1])
           }
             
        }
    }





    
})
