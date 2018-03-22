
function extractLinks(text) {

    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;
    let test;
    let result = [];

    while (test = regex.exec(text)){
        result.push(test[0]);
    }

    console.log(result.join('\n'));
}


extractLinksShort(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:', 'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko ']);


function extractLinksShort(text) {

    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;
    let test ;

    while (test = regex.exec(text)) {
        console.log(test[0]);
    }
}
