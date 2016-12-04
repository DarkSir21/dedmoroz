var critical = require('critical');

critical.generate({
    // Inline the generated critical-path CSS
    // - true generates HTML
    // - false generates CSS
    inline: true,

    // Your base directory
    base: './',

    // HTML source file
    src: './html/min/index.html',

    // Your CSS Files (optional)
    css: ['common.css'],

    // Viewport width
    width: 1300,

    // Viewport height
    height: 900,

    // Target for final HTML output.
    // use some CSS file when the inline option is not set
    dest: './html/index.html',

    // Minify critical-path CSS when inlining
    minify: true,

    // Extract inlined styles from referenced stylesheets
    extract: true,

    // Complete Timeout for Operation
    timeout: 30000,

    // Prefix for asset directory
    pathPrefix: '',

    // ignore CSS rules
    ignore: ['font-face'],

    // overwrite default options
    ignoreOptions: {}
});