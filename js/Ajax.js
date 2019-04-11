 $(function(){
 		$.ajax({
        type:'get',
        url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
        data:{uid:1153},
        dataType:'json',
        success:function(data){
            //console.log(data.data);
            var str="";
            data.data.map(function(item,i){
            	for(var i= 0;i<3;i++){
            		str+= `
               <a href="detail.html?id=${item.pid}">
                  <div class="c-left-list" id="c-left-list">
						<img src="images/10.jpg"/>
						<p class="title">儿童休闲鞋网面运动鞋</p>
						<div class="price-info">
							<p class="cur-price">
								<span class="currency">￥</span>
							    <span class="price-num">49</span>
							  <span class="price-little">.00</span>
							</p>							
							<span class="old-price">￥138</span>
						<span class="discount-desc">3.6折</span>
						</div>	
					</div>        
                       `          
            	}
                          
            })
            $("#c-left").html(str);
        }
   })
 })
 
