(function () {
    'use strict';

    module.exports = function (grunt) {

        // Project configuration.
        grunt.initConfig({
            // Metadata
            pkg: grunt.file.readJSON('package.json'),
            banner: '/*!\n' +
                '*** <%= pkg.title || pkg.name %> - v.<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '*** <%= pkg.homepage ? pkg.homepage : "" %>\n' +
                '*** Copyright <c> <%= pkg.copyright %> - <%= grunt.template.today("yyyy") <%= pkg.authors[0].name %>\n' +
                '*** License: <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
                '*/\n\n',
            clean: {
                css: ['<%= pkg.app.styles.dest %>', '<%= pkg.app.styles.temp %>'],
                images: ['<%= pkg.app.images.dest %>'],
                js: ['<%= pkg.app.scripts.dest %>', '<%= pkg.app.scripts.temp %>'],
                fonts: ['<%= pkg.app.fonts.dest %>', '<%= pkg.fontawesome.webfonts.dest %>']
            },
            // concatinate .JS files
            concat: {
                options: {
                    separator: '\n\n'
                },
                //
                // DEVNOTE: do not put concatinated files in source directory. Subsequent concats will append to the files - not overwrite them.
                //
                // DEVNOTE: uglify will minify and concat JavaScript files, 
                //          but https://gruntjs.com/sample-gruntfile is running concat on .JS files
                //          AND then running uglify on the concatinated file.
                //          THEREFORE, I am following that procedure.
                //
                appJs: {
                    files: [
                        { src: '<%= pkg.app.scripts.src %>**/*.js', dest: '<%= pkg.app.scripts.temp %><%= pkg.name %>.js' }
                    ]
                }
            },
            // copy static files
            copy: {
                main: {
                    files: [
                        { src: '<%= pkg.app.favIcon.src %>favicon.ico', dest: '<%= pkg.app.favIcon.dest %>favicon.ico' }
                    ]
                },
                appStyles: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.app.styles.src %>', // DEVNOTE: copy source files to destination for debugging purposes only
                        src: ['**/*.*'],
                        dest: '<%= pkg.app.styles.dest %>',
                        filter: 'isFile'
                    }]
                },
                appJs: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.app.scripts.src %>', // DEVNOTE: copy source files to destination for debugging purposes only
                        src: ['**/*.*'],
                        dest: '<%= pkg.app.scripts.dest %>',
                        filter: 'isFile'
                    }]
                },
                //bootstrapPlugins_Scripts: {
                // DEVNOTE: use for individual script files as opposed to all-encompassing script file
                //    files: [{
                //        expand: true,
                //        cwd: '<%= pkg.bootstrapPlugins.dist.src %>',
                //        src: ['tab.*'],
                //        dest: '<%= pkg.bootstrapPlugins.dist.dest %>',
                //        filter: 'isFile'
                //    }]
                //},
                bootstrapScripts: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.bootstrap.dist.scripts.src %>',
                        src: ['*.*'],
                        dest: '<%= pkg.bootstrap.dist.scripts.dest %>',
                        filter: 'isFile'
                    }]
                },
                bootstrapStyles: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.bootstrap.dist.styles.src %>',
                        src: ['*.*'],
                        dest: '<%= pkg.bootstrap.dist.styles.dest %>',
                        filter: 'isFile'
                    }]
                },
                fontawesomeWebfonts: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.fontawesome.webfonts.src %>',
                        src: ['fa-brands-400.*', 'fa-regular-400.*', 'fa-solid-900.*'],
                        dest: '<%= pkg.fontawesome.webfonts.dest %>',
                        filter: 'isFile'
                    }]
                },
                //fontawesomeScripts: {
                //    files: [{
                //        expand: true,
                //        cwd: '<%= pkg.fontawesome.scripts.src %>',
                //        src: ['*.*'],
                //        dest: '<%= pkg.fontawesome.scripts.dest %>',
                //        filter: 'isFile'
                //    }]
                //},
                fontawesomeStyles: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.fontawesome.styles.src %>',
                        src: ['fontawesome.*', 'brands.*', 'regular.*', 'solid.*'],
                        dest: '<%= pkg.fontawesome.styles.dest %>',
                        filter: 'isFile'
                    }]
                },
                images: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.app.images.src %>',
                        src: ['*.*'],
                        dest: '<%= pkg.app.images.dest %>',
                        filter: 'isFile'
                    }]
                },
                //imageCarousels_ic0000001: {
                //    files: [{
                //        expand: true,
                //        cwd: '<%= pkg.app.imageCarousels.ic0000001.src %>',
                //        src: ['*.*'],
                //        dest: '<%= pkg.app.imageCarousels.ic0000001.dest %>',
                //        filter: 'isFile'
                //    }]
                //},
                jQuery: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.jQuery.scripts.src %>',
                        src: ['*.*'],
                        dest: '<%= pkg.jQuery.scripts.dest %>',
                        filter: 'isFile'
                    }]
                },
                jQueryValidation: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.jQueryValidation.scripts.src %>',
                        src: ['*.*'],
                        dest: '<%= pkg.jQueryValidation.scripts.dest %>',
                        filter: 'isFile'
                    }]
                },
                jQueryValidationUnobtrusive: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.jQueryValidationUnobtrusive.scripts.src %>',
                        src: ['*.*'],
                        dest: '<%= pkg.jQueryValidationUnobtrusive.scripts.dest %>',
                        filter: 'isFile'
                    }]
                }
            },
            // concatinate and minimize .css files
            cssmin: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1
                },
                // Step 1 - minify files from source directory into temp directory
                minify: {
                    files: [
                        {
                            expand: true,
                            cwd: '<%= pkg.app.styles.src %>',
                            src: ['**/*.css', '!**/*.min.css'],
                            dest: '<%= pkg.app.styles.temp %>',
                            ext: '.min.css',
                            filter: 'isFile'
                        }
                        // {
                        //    expand: true,
                        //    cwd: '<%= pkg.bootstrap.styles.src %>',
                        //    src: ['bootstrap.css', 'bootstrap-theme.css'],
                        //    dest: '<%= pkg.bootstrap.styles.dest %>',
                        //    ext: '.min.css',
                        //    filter: 'isFile'
                        //}, 
                    ]
                },
                // Step 2 - combine minified files and write to destination directory
                combine: {
                    files: [
                        { src: '<%= pkg.app.styles.temp %>*.min.css', dest: '<%= pkg.app.styles.dest %><%= pkg.name %>.min.css' }
                    ]
                }
            },
            // convert images into base64 encoded data URI strings
            imageEmbed: {
                images: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.app.images.src %>',
                        src: ['*.png', '*.jpg', '*.gif', '*.ico'],
                        dest: '<%= pkg.app.images.dest %>'
                    }]
                }
            },
            //// test suite
            //jasmine: {
            //    src: [],
            //    options: {
            //        vendor: [],
            //        specs: ''
            //    }
            //},
            // hint JS files
            jshint: {
                options: {
                    globals: {
                        jQuery: true,
                        '-W069': false
                    }
                },
                gruntfile: 'Gruntfile.js',
                appJs: {
                    src: '<%= pkg.app.scripts.src %>/**/*.js'
                }
                //bootstrap: {
                //    src: '<%= pkg.bootstrap.dist.scripts.src %>*.js'
                //},
                //jQuery: {
                //    src: '<%= pkg.jQuery.scripts.src %>*.js'
                //},
                //jQueryValidation: {
                //    src: '<%= pkg.jQueryValidation.scripts.src %>*.js'
                //},
                //jQueryValidationUnobtrusive: {
                //    src: '<%= pkg.jQueryValidationUnobtrusive.scripts.src %>*.js'

                //}
            },
            // lint JSON files
            jsonlint: {
                src: ['package.json']
            },
            // minify and concat JavaScript files
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                appJs: {
                    files: [
                        {
                            src: '<%= pkg.app.scripts.temp %><%= pkg.name %>.js',
                            dest: '<%= pkg.app.scripts.dest %>app/<%= pkg.name %>.min.js'
                        }
                    ]
                }
                //bootstrapPlugins: {
                //    files: {
                //        '<%= pkg.bootstrap.scripts.plugins.dest %>tab.min.js':
                //        '<%= pkg.bootstrap.scripts.plugins.src %>tab.js'
                //    }
                //}
            },
            watch: {
                options: {
                    event: ['all'],
                    interrupt: true,
                    spawn: true
                },
                gruntfile: {
                    files: 'Gruntfile.js',
                    tasks: ['default']
                },
                appJs: {
                    files: ['<%= pkg.app.scripts.src %>**/*.js'],
                    tasks: ['appJsTasks']
                },
                css: {
                    files: '<%= pkg.app.styles.src %>**/*.css',
                    tasks: ['cssTasks']
                }
                //test: {
                //    files: 'test.files',
                //    tasks: ['jshint.test', 'qunit']
                //} 
            }
            //// Unit tests.
            //nodeunit: {
            //  tests: ['test/*_test.js']
            //}
        });

        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-jsonlint');
        //grunt.loadNpmTasks('grunt-image-embed');
        //       
        //grunt.loadTasks('tasks'); // load custom tasks from external .js files.
        //grunt.registerTask('test', 'nodeunit'); // Whenever the "test" task is run, run some tests.
        //
        grunt.registerTask('appJsTasks', ['jsonlint', 'jshint', 'clean:js', 'copy:appJs', 'concat:appJs', 'uglify:appJs']);
        grunt.registerTask('cssTasks', ['clean:css', 'copy:appStyles', 'copy:bootstrapStyles', 'copy:fontawesomeStyles', 'cssmin']);
        grunt.registerTask('default', ['jsonlint', 'jshint', 'clean', 'copy', 'cssmin', 'concat', 'uglify']); /*, imageEmbed', */ // default: defines a group of tasks that will run when running Grunt without specifying a task to run.
    };
})();
