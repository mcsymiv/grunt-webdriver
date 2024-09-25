exports.config = {
    path: '/',
    port: 4445,
    host: '127.0.0.1',
    logLevel: 'trace',
    runner: 'local',
    specs: ['./webdriver.js'],
    outputDir: `./logs`,
    capabilities: [{
        browserName: 'chrome',
        browserVersion: 'latest',
        acceptInsecureCerts: true,
    }],
    baseUrl: 'http://webdriver.io',
    waitforTimeout: 10000,
    framework: 'mocha', // gets overwritten in gruntfile
    mochaOpts: {
        timeout: 30000
    },
    reporters: ['dot']
}
