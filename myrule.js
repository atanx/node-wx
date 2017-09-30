var db = require('./db.js');

/*
now = Date.now();
db.insert('http://www.baidu.com', 'test', 'ssssx', now)

now = Date.now();
db.insert('http://www.baidu.com', 'test', 'ssssx', now)
*/
 


module.exports = {
    summary: '微信',
    *beforeSendResponse(requestDetail, responseDetail) { 
      if (requestDetail.url.indexOf('mp.weixin.qq.com')>0) {
        const newResponse = responseDetail.response;
        var url = requestDetail.url;
        url = url.slice(0, Math.min(90,url.length));
        var body = responseDetail.response.body;
        var title = body.slice(0, Math.min(10,body.length));
        var brief = body.slice(0, Math.min(90,body.length));
        var now = Date.now(); 
        //db.insert(url, title, brief, now);

        if(/mp\/profile_ext\?action=home/i.test(requestDetail.url)){ 
              var historyHomePage = /var msgList = \'(.*?)\';/;
              var historyHomePageList = historyHomePage.exec('' + responseDetail.response.body);
              if(!historyHomePageList){ 
                  console.log("抓捕到空包！！"); 
              }
              else{ 
                historyHomePageList[1] = historyHomePageList[1].replace(/&quot;/g, "'");
                var historyHomePageObj = eval("("+historyHomePageList[1]+")"); 
                console.log('===================================================');
                console.log(historyHomePageObj);
              }
            }
        return {response: newResponse};
      }
    },
  };
