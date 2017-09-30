


  const AnyProxy = require('anyproxy');
  const options = {
    port: 8001,
    rule: require('./myrule.js'),
    webInterface: {
      enable: true,
      webPort: 8002,
      wsPort: 8003,
    },
    throttle: 10000,
    forceProxyHttps: true,
    silent: false
  };
  const proxyServer = new AnyProxy.ProxyServer(options);
  
  proxyServer.on('ready', () => { /* */ });
  proxyServer.on('error', (e) => { /* */ });
  proxyServer.start();
  
  //when finished
  //proxyServer.close();