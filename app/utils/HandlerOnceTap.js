let isCalled = false, timer;

/**
 * @param functionTobeCalled method 对调函数体
 * @param interval  定时器
 */
export default HandlerOnceTap = (functionTobeCalled, interval = 600) => {
    if (!isCalled) {
        isCalled = true;
        clearTimeout(timer);
        timer = setTimeout(() => {
            isCalled = false;
        }, interval);
        return functionTobeCalled();
    }
};
