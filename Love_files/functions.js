/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(startDate) {
    const now = new Date();
    const start = new Date(startDate);

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    // 如果天数为负，说明当月还没过完，借一个月
    if (days < 0) {
        months--;
        // 上个月的最后一天
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate(); // 补上上个月的天数
    }

    // 如果月数为负，说明还没满一年，借一年
    if (months < 0) {
        years--;
        months += 12;
    }

    // 计算时分秒
    const diffMs = now - new Date(start.getFullYear() + years, start.getMonth() + months, start.getDate() + days);
    const diff = new Date(diffMs);
    const hours = String(diff.getUTCHours()).padStart(2, '0');
    const minutes = String(diff.getUTCMinutes()).padStart(2, '0');
    const seconds = String(diff.getUTCSeconds()).padStart(2, '0');

    // 构造结果
    let result = "第 ";
    if (years > 0) result += `<span class="digit">${years}</span> 年 `;
    if (months > 0) result += `<span class="digit">${months}</span> 月 `;
    if (days > 0) result += `<span class="digit">${days}</span> 天 `;
    result += `<span class="digit">${hours}</span> 小时 <span class="digit">${minutes}</span> 分钟 <span class="digit">${seconds}</span> 秒`;

    $("#clock").html(result);
}
