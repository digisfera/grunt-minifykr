# grunt-minifykr

Grunt plugin to concatenate and minify krpano XML files

No tests, shamefully.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-minifykr`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-minifykr');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation

    minifykr: {
      test1: "main_pt.xml",
      test2: [ "main_pt.xml", "main_en.xml" ],
      test3: { inputFile: "main_pt.xml", outputFile: "zzz.xml"},
      test4: { inputFile: "main_pt.xml", outputFile: "zzz.xml", encrypt: false },
      test4: { inputFile: "main_pt.xml", outputFile: "zzz.xml", minify: false },
      test5: { inputFile: "main_pt.xml", outputFile: "zzz.xml", encrypt: true },
      test6: [ { inputFile: "main_pt.xml", outputFile: "zzz.xml", encrypt: true }, { inputFile: "main_en.xml", outputFile: "zzz_en.xml", encrypt: false } ],
      test7: [ { inputFile: "main_pt.xml" }, { inputFile: "main_en.xml", encrypt: false } ]
    }

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Manuel Cabral  
Licensed under the MIT license.
