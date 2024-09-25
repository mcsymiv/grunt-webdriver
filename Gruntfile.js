module.exports = function (grunt) {
    grunt.initConfig({
        pkgFile: 'package.json',
        clean: ['tasks'],
        babel: {
            options: {
                sourceMap: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: './src',
                    src: ['*.js'],
                    dest: 'tasks',
                    ext: '.js'
                }]
            }
        },
        watch: {
            dist: {
                files: ['./src/*.js'],
                tasks: ['babel:dist']
            }
        },
        eslint: {
            parserOptions: {
                parser: 'babel-eslint'
            },
            target: ['./src/*.js']
        },
        contributors: {
            options: {
                commitMessage: 'update contributors'
            }
        },
        bump: {
            options: {
                commitMessage: 'v%VERSION%',
                pushTo: 'upstream'
            }
        },
        webdriver: {
            options: {
              maxInstances: 1,
              logLevel: 'trace',
              port: 4444,
              framework: 'mocha',
              waitforTimeout: 12345,
            },
            test: {
                configFile: './test/wdio.conf.js',
            }
        }
    })

    require('load-grunt-tasks')(grunt)
    grunt.loadTasks('tasks')
    grunt.registerTask('default', ['build'])
    grunt.registerTask('build', 'Build grunt-webdriver', function () {
        grunt.task.run([
            'eslint',
            'clean',
            'babel',
        ])
    })
    grunt.registerTask('release', 'Bump and tag version', function (type) {
        grunt.task.run([
            'build',
            'contributors',
            'bump:' + (type || 'patch')
        ])
    })
}
