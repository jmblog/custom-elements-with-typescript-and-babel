According to the spec, Custom Elements must be ES6 classes.

|                                                                        | IE11+ | Chrome | Firefox | Safari | Chrome Android | Mobile Safari |
| ---------------------------------------------------------------------- | :---: | :----: | :-----: | :----: | :------------: | :-----------: |
| ES6                                                                    |   ?   |   ✓    |    ✘    |   ✓    |       ?        |       ?       |
| ES6 + babel-preset-env                                                 |   ?   |   ✘    |    ✘    |   ✘    |       ?        |       ?       |
| ES6 + babel-preset-env + custom-elements-es5-adapter.js                |   ?   |   ✓    |    ✘    |   ✓    |       ?        |       ?       |
| ES6 + babel-preset-env + babel-plugin-transform-custom-element-classes |   ?   |   ✓    |    ✘    |   ✓    |       ?        |       ?       |
| TS + ts-loader                                                         |   ?   |   ✘    |    ✘    |   ✘    |       ?        |       ?       |

## Babel を使った時の注意点

* ES5 にトランスパイルした場合、利用の際に `custom-elements-es5-adapter.js` を読み込むか、ビルドの際に
  `babel-plugin-transform-custom-element-classes` を利用する。

## TypeScript を使った時

* `compilerOptions` の `--target` は `es6` にする。
  * `es5` にすると、そのあと babel-plugin-transform-custom-element-classes でトランスパイルしても `Failed to construct
    'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.` のエラー
    になる。)
  * ただし custom-elements-es5-adapter.js を読み込めばエラーにはならない
