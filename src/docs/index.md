---
title: Template HTML / CSSスタイルガイド
---
This is the component library for [Template](http://Template.net/).

このドキュメントでは、HTMLとCSSの書式とスタイルの規則を定義。

## ガイドラインの目的  

**■ クオリティの向上**  
最適だと思われるルールをガイドラインとして制定することで、クオリティの向上を図る。

**■ クオリティの均一化**  
担当者によって制作物のバラつきを防ぐ。  
レビューの基準にする。

**■ 制作の効率化**  
ルールがあることでタイムロスを防ぐ。  
ルールを決めておくことで、無駄なチェック・修正の工数を削減する。  

**上記目的を達成するために、常に見直し・更新を行ない、ガイドラインの制定と共有を図る。**

## htmlとcssの記述に共通すること

### 1.インデントは半角2つ  
・body内の要素には、構造に合わせて適切にインデントを施し、視認性の高いソースコードを実現する。  
・インデントには**半角スペース2つ**を使用し、タブ、全角を使用しない。  
・各テキストエディタで設定しましょう。  

### 2.すべてのコードは小文字  
すべてのコードは小文字で。  
HTML要素名、属性、属性値（ただしを除くtext/CDATA）、CSSセレクタ、プロパティ、プロパティ値（文字列を除く）に適用。

**html**

``<！-推奨しない- > <A HREF = "/"> ホーム</A>``  
``<！-推奨-> <img src = "google.png" alt = "Google" >``

**css**

``/ *推奨しない* /
色：＃E5E5E5;``  
``/ *推奨* /
色：＃e5e5e5; ``


## ガイドラインの見本と基準  

**Google HTML / CSSスタイルガイド**  
https://google.github.io/styleguide/htmlcssguide.html

迷ったらここを基準にしましょう。

<style type="text/css">

html, body {
  height: 100%;
  margin: 0;
  padding: 0; }

body {
  word-wrap: break-word;
  color: #eee;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue","ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  font-size: 14px;
  line-height: 1.6; }

a {
  color: #eee; }

a,
a:active {
  text-decoration: none; }

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal; }

ul,
ol,
dl {
  margin: 0;
  padding: 0;
  list-style: none; }

button,
input,
select,
textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  outline: none;
  background: none; }

button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: none; }

input {
  border: none; }

img {
  max-width: 100%;
  height: auto; }

::selection {
  background: #349844;
  /* Safari */
  color: #fff; }

::-moz-selection {
  background: #349844;
  /* Firefox */
  color: #fff; }

html {
  font-size: 100% !important; }

body {
  color: #000;
  font-family: "Helvetica Neue","Hiragino Kaku Gothic ProN","メイリオ", sans-serif;
  font-size: 16px !important; }

.Document {
  max-width: 960px;
  margin: 0 auto; }

.Document h2,
.Document h3,
.Prose h3 {
  color: #000; }

.Document-title,
.Navigation .Tree-title,
.Navigation .Tree-item {
  color: #222;
  font-family: "Helvetica Neue","Hiragino Kaku Gothic ProN","メイリオ", sans-serif; }

.Document-content a,
.Tree-entityLink {
  color: #338BF1; }

.Document p {
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 24px; }

.gradient-primary {
  background: -webkit-linear-gradient(225deg, #ffcf00 0%, #ffe700 100%);
  background: linear-gradient(-135deg, #ffcf00 0%, #ffe700 100%); }

.Preview-resizer {
  background: #2a2c32; }


</style>



