exports.config = {
    path: '/',
    port: 4445,
    host: '127.0.0.1',
    logLevel: 'debug',
    runner: 'local',
    specs: ['./webdriver.js'],
    outputDir: `./logs.txt`,
    capabilities: [{
        browserName: 'chrome',
        browserVersion: 'latest',
        acceptInsecureCerts: true,
    }],
    baseUrl: 'http://webdriver.io',
    waitforTimeout: 10000,
    framework: 'cucumber', // gets overwritten in gruntfile
    mochaOpts: {
        timeout: 30000
    },
    reporters: ['dot']
}
