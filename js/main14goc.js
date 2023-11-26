//set renpy
$(document).ready(function () {
    $("#download .ios a").click(function () {
		layer.open({
        	type: 1,
        	title: false,
        	closeBtn: false,
        	shadeClose: true,
        	btn: false,
        	content: `
        		<div style="padding: 15px; box-sizing: border-box">
        			<p style="font-size: 20px; font-weight: bold; text-align: center">Cài Đặt Renpy Viewer</p>
        			<p style="font-size: 13px; text-align: center; margin: 15px auto; color: rgb(199, 152, 56)">Lưu ý: Hướng dẫn cài đặt và sử dụng app ở mục Help.</p>
        			<p style="font-size: 13px; text-align: center; margin: 15px auto">Phiên bản iOS đã được cập nhật...<br>Tên chứng chỉ: Gac Trumpchi Car Co.,LTD
                <br>Trạng thái: Đã ký 🟢
								<br>Thời gian tải lên: 25-11-2023 00:45:06</p>
        			<p style="font-size: 13px; text-align: center; margin: 15px auto; color: red">👇👇Hãy chọn phiên bản phù hợp với bạn👇👇</p>
        			<div class="backup-download" style="height: 35px; line-height: 35px; border-radius: 20px; background-color: rgb(230, 95, 26); text-align: center; color: #fff; user-select: none; cursor: pointer; margin: 15px auto;">Download</div>        			
        			<div class="primary-download" style="height: 35px; line-height: 35px; border-radius: 20px; background-color: rgb(100, 113, 233); text-align: center; color: #fff; user-select: none; cursor: pointer; margin: 15px auto;">AppStore</div>
        		</div>
        	`,
        	success: function(obj, index) {
				layer.style(index, {borderRadius: '15px'});
				
        		//  appstore renpy
        		$(obj.find(".primary-download")[0]).click(function() {
        		    //alert("1、app store")
        			window.location.href = "https://apps.apple.com/vn/app/renpyviewer/id1547796767?l=vi"
        		})
        		
        		// cài trực tiếp renpy
        		$(obj.find(".backup-download")[0]).click(function() {
        		   	//window.open("/tangyuyu.png")
        			window.location.href = "itms-services://?action=download-manifest&url=https://pub-e8d927fc02f74c30bca97cda5ab7df0d.r2.dev/1368051817/8ff029bd-cce1-4446-b43b-745550374d75.plist"
        		})
        		
        	}
        })
        // window.location.href = "iosdownload"
        return false;
    })
// set xp3player
$("#download .ios2 a").click(function() {
		layer.open({
			type: 1,
			title: false,
			closeBtn: false,
			shadeClose: true,
			btn: false,
			content: `
				<div style="padding: 15px; box-sizing: border-box">
					<p style="font-size: 20px; font-weight: bold; text-align: center">Cài Đặt ONSPlayer</p>
					<p style="font-size: 13px; text-align: center; margin: 15px auto; color: rgb(199, 152, 56)"> Lưu ý: Hướng dẫn cài đặt và sử dụng app ở mục Help.</p>
					<p style="font-size: 13px; text-align: center; margin: 15px auto "> Phiên bản iOS đã được cập nhật...<br>Tên chứng chỉ: Gac Trumpchi Car Co.,LTD
                <br>Trạng thái: Đã ký 🟢
								<br>Thời gian tải lên: 25-11-2023 00:45:06</p>
					<p style="font-size: 13px; text-align: center; margin: 15px auto; color: red">👇👇Hãy chọn phiên bản phù hợp với bạn👇👇</p>
					<div class="primary-download" style="height: 35px; line-height: 35px; border-radius: 20px; background-color: rgb(230, 95, 26); text-align: center; color: #fff; user-select: none; cursor: pointer; margin: 15px auto;">Download</div>
					<div class="backup-download" style="height: 35px; line-height: 35px; border-radius: 20px; background-color: rgb(100, 113, 233); text-align: center; color: #fff; user-select: none; cursor: pointer; margin: 15px auto;">AppStore</div>
				</div>
			`,
			success: function(obj, index) {
				layer.style(index, {borderRadius: '15px'});
				
				//  tải trực tiếp onsplayer
				$(obj.find(".primary-download")[0]).click(function() {
					window.open("https://tinyurl.com/w59eb2aw")
				})
				
				// appstore xp3play
				$(obj.find(".backup-download")[0]).click(function() {
					window.open("https://apps.apple.com/vn/app/onsplayer/id1388250129?l=vi")
				})
				
			}
		})
		// window.location.href = "iosdownload"
		return false;
	})

// set onsplayer
$("#download .ios3 a").click(function() {
		layer.open({
			type: 1,
			title: false,
			closeBtn: false,
			shadeClose: true,
			btn: false,
			content: `
				<div style="padding: 15px; box-sizing: border-box">
					<p style="font-size: 20px; font-weight: bold; text-align: center">Cài Đặt XP3Player</p>
					<p style="font-size: 13px; text-align: center; margin: 15px auto; color: rgb(199, 152, 56)"> Lưu ý: Hướng dẫn cài đặt và sử dụng app ở mục Help.</p>
					<p style="font-size: 13px; text-align: center; margin: 15px auto "> Phiên bản iOS đã được cập nhật...<br>Tên chứng chỉ: Gac Trumpchi Car Co.,LTD
                <br>Trạng thái: Đã ký 🟢
								<br>Thời gian tải lên: 25-11-2023 00:45:06</p>
					<p style="font-size: 13px; text-align: center; margin: 15px auto; color: red">👇👇Hãy chọn phiên bản phù hợp với bạn👇👇</p>
					<div class="primary-download" style="height: 35px; line-height: 35px; border-radius: 20px; background-color: rgb(230, 95, 26); text-align: center; color: #fff; user-select: none; cursor: pointer; margin: 15px auto;">Download</div>
					<div class="backup-download" style="height: 35px; line-height: 35px; border-radius: 20px; background-color: rgb(100, 113, 233); text-align: center; color: #fff; user-select: none; cursor: pointer; margin: 15px auto;">AppStore</div>
				</div>
			`,
			success: function(obj, index) {
				layer.style(index, {borderRadius: '15px'});
				
				//  tải trực tiếp xp3player
				$(obj.find(".primary-download")[0]).click(function() {
					window.open("itms-services://?action=download-manifest&url=https://pub-e8d927fc02f74c30bca97cda5ab7df0d.r2.dev/1368051817/18862eb8-f223-456b-b318-ad693891579f.plist")
				})
				
				// appstore xp3play
				$(obj.find(".backup-download")[0]).click(function() {
					window.open("https://apps.apple.com/vn/app/xp3player/id1064060287?l=vi")
				})
				
			}
		})
		// window.location.href = "iosdownload"
		return false;
	})
// set help
	    $("#download .help a").click(function () {
		layer.open({
        	type: 1,
        	title: false,
        	closeBtn: false,
        	shadeClose: true,
        	btn: false,
        	content: `
        		<div style="padding: 15px; box-sizing: border-box">
        			<p style="font-size: 20px; font-weight: bold; text-align: center">Hướng dẫn Cài đặt</p>
        			<p style="font-size: 13px; text-align: center; margin: 15px auto; color: rgb(199, 152, 56)">Lưu ý: Làm theo các hướng dẫn</p>
        			<p style="font-size: 13px; line-height: normal">Chứng chỉ sẽ bị thu hồi ~ 7 đến 14 ngày...<br/> Liên hệ <a href="https://t.me/twilight_62" style="color: #ff0000;">Admin</a> để thay đổi.</p>
        			<div class="backup-download" style="height: 35px; line-height: 35px; border-radius: 20px; background-color: rgb(100, 113, 233); text-align: center; color: #fff; user-select: none; cursor: pointer; margin: 15px auto;">Tin cậy chứng chỉ</div>
        			<div class="primary-download" style="height: 35px; line-height: 35px; border-radius: 20px; background-color: rgb(100, 113, 233); text-align: center; color: #fff; user-select: none; cursor: pointer; margin: 15px auto;">Giới thiệu ứng dụng</div>
							<hr>
							<p style="font-size: 13px; line-height: normal">
                Cách cài đặt Profile (<a href="URL_cua_ban" style="color: #ff0000;">tại đây</a>)
              </p>
							<div class="profile" style="height: 35px; line-height: 35px; border-radius: 20px; background-color: rgb(100, 113, 233); text-align: center; color: #fff; user-select: none; cursor: pointer; margin: 15px auto;">Configuration Profile</div>
        		</div>
        	`,
        	success: function(obj, index) {
				layer.style(index, {borderRadius: '15px'});
				
        		//  giới thiệu ứng dụng
        		$(obj.find(".primary-download")[0]).click(function() {
        		    //alert("1、app store")
        			window.location.href = "https://github.com/xyzbanana/test2"
        		})
        		$(obj.find(".profile")[0]).click(function() {
        		   	//window.open("/tin cậy ứng dụng")
        			window.location.href = "https://www.wikihow.vn/Tin-cậy-ứng-dụng-trên-iPhone"
        		})
        		// profile
        		$(obj.find(".backup-download")[0]).click(function() {
        		   	//window.open("/tangyuyu.png")
        			window.location.href = "https://www.wikihow.vn/Tin-cậy-ứng-dụng-trên-iPhone"
        		})
        		
        	}
        })
        // window.location.href = "iosdownload"
        return false;
			})
		})