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
                css: ['<%= pkg.app.styles.dest %>', '<%= pkg.app.styles.tempdirectory %>'],
                images: ['<%= pkg.app.images.dest %>'],
                js: ['<%= pkg.app.scripts.dest %>', '<%= pkg.app.scripts.tempdirectory %>'],
                fonts: ['<%= pkg.app.fonts.dest %>', '<%= pkg.fontawesome.webfonts.dest %>'],
                tempdirectory: ['<%= pkg.app.tempdirectory %>']
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
                        { src: '<%= pkg.app.scripts.src %>**/*.js', dest: '<%= pkg.app.scripts.tempdirectory %><%= pkg.app.scripts.filename %>.js' }
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
                        src: ['**/*.min.*'],
                        dest: '<%= pkg.app.styles.dest %>',
                        filter: 'isFile'
                    }]
                },
                appJs: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.app.scripts.src %>', // DEVNOTE: copy source files to destination for debugging purposes only
                        src: ['**/*.min.*'],
                        dest: '<%= pkg.app.scripts.dest %>',
                        filter: 'isFile'
                    }]
                },
                bootstrapScripts: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.bootstrap.dist.scripts.src %>',
                        src: ['*.min.*'],
                        dest: '<%= pkg.bootstrap.dist.scripts.dest %>',
                        filter: 'isFile'
                    }]
                },
                bootstrapStyles: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.bootstrap.dist.styles.src %>',
                        src: ['*.min.*'],
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
                fontawesomeStyles: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.fontawesome.styles.src %>',
                        src: ['fontawesome.min.css', 'brands.min.css', 'regular.min.css', 'solid.min.css'],
                        dest: '<%= pkg.fontawesome.styles.dest %>',
                        filter: 'isFile'
                    }]
                },
                images: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.app.images.src %>',
                        src: ['**/*.*'],
                        dest: '<%= pkg.app.images.dest %>',
                        filter: 'isFile'
                    }]
                },
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
                        src: ['**/*.*'],
                        dest: '<%= pkg.jQueryValidation.scripts.dest %>',
                        filter: 'isFile'
                    }]
                },
                jQueryValidationUnobtrusive: {
                    files: [{
                        expand: true,
                        cwd: '<%= pkg.jQueryValidationUnobtrusive.scripts.src %>',
                        src: ['*.min.*'],
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
                            dest: '<%= pkg.app.styles.tempdirectory %>',
                            ext: '.min.css',
                            filter: 'isFile'
                        }
                    ]
                },
                // Step 2 - combine minified files and write to destination directory
                combine: {
                    files: [
                        { src: '<%= pkg.app.styles.tempdirectory %>*.min.css', dest: '<%= pkg.app.styles.dest %><%= pkg.app.styles.filename %>.min.css' }
                    ]
                }
            },
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
                    src: '<%= pkg.app.scripts.src %>**/*.js'
                }
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
                            src: '<%= pkg.app.scripts.tempdirectory %><%= pkg.app.scripts.filename %>.js',
                            dest: '<%= pkg.app.scripts.dest %><%= pkg.app.scripts.filename %>.min.js'
                        }
                    ]
                }
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
            }
        });

        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-jsonlint');

        grunt.registerTask('appJsTasks', ['jsonlint', 'jshint', 'clean:js', 'copy:appJs', 'concat:appJs', 'uglify:appJs', 'clean:tempdirectory']);
        grunt.registerTask('cssTasks', ['clean:css', 'copy:appStyles', 'copy:bootstrapStyles', 'copy:fontawesomeStyles', 'cssmin', 'clean:tempdirectory']);
        grunt.registerTask('default', ['jsonlint', 'jshint', 'clean', 'copy', 'cssmin', 'concat', 'uglify', 'clean:tempdirectory']); // default: defines a group of tasks that will run when running Grunt without specifying a task to run.
    };
})();
