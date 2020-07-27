window.onload = function() {
	showDate();
	setInterval(showDate, 1000);
	lunbo();
	
}


//时间显示
function showDate() {
	var curDate = new Date();
	var year = curDate.getFullYear();
	var month = curDate.getMonth() + 1;
	var date = curDate.getDate();
	var day = curDate.getDay();
	var week = ["日", "一", "二", "三", "四", "五", "六"];
	var hours = curDate.getHours();
	var minutes = curDate.getMinutes();
	var seconds = curDate.getSeconds();
	var str;
	str = year + "年" + time(month) + "月" + time(date) + "日&nbsp;&nbsp;星期" + week[day] + "&nbsp;&nbsp;" + time(hours) + "时" + time(minutes) + "分" + time(seconds) + "秒";
	document.getElementById("showtime").innerHTML = str;
}
function time(x) {
	return x > 10 ? x : "0" + x;
}


//轮播图
function lunbo(){
	var items = document.getElementsByClassName('item');
	var points = document.getElementsByClassName('point');
	var goPreBtn = document.getElementById('goPre');
	var goNextBtn = document.getElementById('goNext');
	var index = 0; //正在展示的图片
	
	var clearActive = function() {
		for(var i = 0; i < items.length; i++) {
			items[i].className = 'item';
		}
		for(var i = 0; i < points.length; i++) {
			points[i].className = 'point';
		}
	}
	
	var goIndex = function() {
		clearActive();
		items[index].className = 'item active';
		points[index].className = 'point active';
	}
	var goNext = function() {
		if(index < 4) {
			index++;
		} else {
			index = 0;
		}
		goIndex();
	}
	var goPre = function() {
		if(index == 0) {
			index = 4;
		} else {
			index--;
		}
		goIndex();
	}
	goNextBtn.addEventListener('click', function() {
		goNext();
	})
	goPreBtn.addEventListener('click', function() {
		goPre();
	})
	for(var i = 0; i < points.length; i++) {
		points[i].addEventListener('click', function() {
			var pointIndex = this.getAttribute('data-index');
			index = pointIndex;
			goIndex();
		})
	}
	
	setInterval(function() {
		goNext();
	}, 3000)
}


//下拉菜单
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}