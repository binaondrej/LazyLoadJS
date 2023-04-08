/**
 * @author Ondrej Bina
 * @version 1.1
 * @description JavaScript LazyLoad library
 * @source https://github.com/binaondrej/LazyLoadJS
 */
class Lazyload {
    css = {
        translate: window.innerHeight/3,
        transition: 1.5,
    }
    lazyloads = [];
    constructor() {
        const llThis = this;

        window.addEventListener('scroll', function () {
            llThis.__onscroll();
        });

        setTimeout(function () {
            // when page loads
            const els = [];
            llThis.lazyloads.forEach(function(opt) {
                document.querySelectorAll(opt.selector).forEach(function (el) {
                    if (llThis.__isInTargetView(el.getBoundingClientRect().top + window.scrollY, opt.distance, opt.direction)) {
                        els.push(el);
                    }
                });
            });
            llThis.__onload(els);
        }, 500);
    }

    __isInTargetView(elPos, triggerDistance, direction) {
        return (window.scrollY + window.innerHeight) > (elPos - (direction === 'bottom' ? this.css.translate : 0) + triggerDistance);
    }

    /**
     * Add elements to be lazy-loaded
     * @param selector query selector of lazy-loaded elements
     * @param distance distance (in px, from bottom), where selected element(s) should start loading
     * @param direction direction from where element(s) appear: bottom/left/right
     */
    add(
        selector,
        distance = window.innerHeight/2,
        direction = 'bottom',
    ) {
        this.lazyloads.push({
            selector: selector,
            distance: distance,
            direction: direction,
        });
        document.querySelectorAll(selector).forEach(function (el) {
            el.classList.add('lazyload');
            el.classList.add('lazyload-' + direction);
        });
    }

    __onscroll() {
        const llThis = this;
        this.lazyloads.forEach(function(opt) {
            document.querySelectorAll(opt.selector).forEach(function (el) {
                if (!el.classList.contains('lazyload-done')) {
                    if (llThis.__isInTargetView(el.getBoundingClientRect().top + window.scrollY, opt.distance, opt.direction)) {
                        el.classList.add('lazyload-done');
                    }
                }
            });
        });
    }
    __onload(elsArr) {
        if (elsArr.length) {
            elsArr.shift().classList.add('lazyload-done');
            const llOnLoad = this.__onload;
            setTimeout(function () {
                llOnLoad(elsArr);
            }, 500);
        }
    }
}
const lazyload = new Lazyload();
//export default lazyload;
