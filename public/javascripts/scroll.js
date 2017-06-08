/**
 * Created by Joker on 15/01/2017.
 */
function scrollIt(scrollY, duration, callback) {
    // Returns document.documentElement for Chrome and Safari
    // document.body for rest of the world
    function checkBody() {
        document.documentElement.scrollTop += 1;
        const body = (document.documentElement.scrollTop !== 0) ? document.documentElement : document.body;
        document.documentElement.scrollTop -= 1;
        return body;
    }

    const body = checkBody();
    const start = body.scrollTop;
    const startTime = Date.now();

    // Height checks to prevent requestAnimationFrame from infinitely looping
    // If the function tries to scroll below the visible document area
    // it should only scroll to the bottom of the document
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destination = documentHeight - scrollY < windowHeight ? documentHeight - windowHeight : scrollY;

    function scroll() {
        const now = Date.now();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = (time);
        body.scrollTop = (timeFunction * (destination - start)) + start;

        if (body.scrollTop === destination) {
            callback();
            return;
        }
        requestAnimationFrame(scroll);
    }

    scroll();
}