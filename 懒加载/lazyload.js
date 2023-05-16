console.log('lazyload');

imgs = Array.from(document.querySelectorAll('img'));

const loadPic1 = () => {
    imgs.forEach((item) => {
        console.log('emit');
        // console.log(document.documentElement.scrollTop, window.innerHeight, item.offsetTop);
        if(item.src) return; // 如果item有src属性说明图片已经被加载，之所以上面说到src=""也不允许，这是因为src=""的时候，item.src也是有值的，值为当前的html的地址，当然如果使用loading图片的话，设置为item.src !== 'loading的url'即可
        if(document.documentElement.scrollTop + window.innerHeight - item.offsetTop > 0) {
            item.src = item.dataset.src;
        }
    });
}

const loadPic2 = () => {
    imgs.forEach((item) => {
        console.log('emit2');
        // console.log(item.getBoundingClientRect().top, window.innerHeight);
        if(item.src) return;
        if(item.getBoundingClientRect().top <= window.innerHeight) {
            item.src = item.dataset.src;
        }
    });
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > 0) { // >0说明有视窗交叉
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img); // 加载完毕即取消监听
        }
    })
})

const loadPic3 = () => {
    imgs.forEach((item) => {
        observer.observe(item);
    })
}
