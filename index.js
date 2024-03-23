// 获取当前时间戳
function time() {
    return Math.floor(Date.now() / 1000);
}

// 休眠指定秒数
function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

// 返回当前时间的时间元组
function localtime() {
    const now = new Date();
    return [now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getDay(), now.getTimezoneOffset() / -60, -1];
}

// 时间戳转为时间元组
function localtime(timestamp) {
    const date = new Date(timestamp * 1000);
    return [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getDay(), date.getTimezoneOffset() / -60, -1];
}

// 将时间元组转为时间戳
function mktime(year, month, day, hour, minute, second) {
    const date = new Date(year, month - 1, day, hour, minute, second);
    return Math.floor(date.getTime() / 1000);
}

// 返回CPU的时间，包含了系统睡眠的时间。
function clock() {
    return process.hrtime()[0];
}

// 返回以微秒为单位的当前CPU时间
function clock_gettime() {
    const hrtime = process.hrtime();
    return hrtime[0] * 1e6 + Math.floor(hrtime[1] / 1e3);
}

module.exports = {
    time,
    sleep,
    localtime,
    mktime,
    clock,
    clock_gettime
};
