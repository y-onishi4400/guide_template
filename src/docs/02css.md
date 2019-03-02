---
title: Template CSSガイド
---
This is the component library for [Template](http://Template.net/).

基本的にレビュー時の指標となる点に関して記載しています。  
すべてのコードは小文字で記述しましょう。

## クラス名は意味が伝わる命名にしましょう
意味のあるまたは一般的なIDとクラス名を使用する。 

参考(https://github.com/manabuyasuda/coding-guidelines/blob/master/css/css-naming-list.md)


<span style="color: #ff0000;">×bad</span>  
``/ *推奨しない：意味のない* / ＃yee-1901 {}``  
``/ *推奨しない：プレゼンテーション* / 。ボタン- 緑色{} 。クリア{}``

<span style="color: #4A90E2;">○OK</span>  
``/ *推奨：特定の* / #gallery {} #login {} ``　　

## 他の人に伝わらない命名はNG  

<span style="color: #ff0000;">×bad</span>  
``/ *推奨しない：#nav {}``  
<span style="color: #4A90E2;">○OK</span>  
``/ *推奨* /#navigation {} ``　　

## 単語はハイフンで分離しよう  
**ハイフン**でセレクタの単語を分離する  

<span style="color: #ff0000;">×bad</span>  
``/ *推奨しない：demoimage {}``  
``/ *推奨しない：error_status {}``  

<span style="color: #4A90E2;">○OK</span>  
``/ *推奨：＃video-id {} ``　


## 省略表現のプロパティを使用しよう  

<span style="color: #ff0000;">×bad</span>  
``/ *推奨しない：padding-bottom：2em;  
padding-left：1em;  
padding-right：1em;  
padding-top：0 ; ``  

<span style="color: #4A90E2;">○OK</span>  
``/ *推奨：padding: 0 0 0 0; ``　


## 0pxと書くのはやめよう  
0値の後の単位は使用しない。  

<span style="color: #ff0000;">×bad</span>  
``/ *推奨しない：0px;``  


<span style="color: #4A90E2;">○OK</span>  
``/ *推奨* 0;``  

## 小数の場合は0を省略しよう  

先頭に "0"を付けない。  

<span style="color: #ff0000;">×bad</span>  
``/ *推奨しない：width 0.9px;``  


<span style="color: #4A90E2;">○OK</span>  
``/ *推奨：width .9px;`` 

## カラーも小文字で表記しよう  

基本的にカラーは変数で記述しますが、追加する際は小文字で表記しましょう。

<span style="color: #ff0000;">×bad</span>  
``/ *推奨しない：color：#EEBBCC; ``  


<span style="color: #4A90E2;">○OK</span>  
``/ *推奨：color：#eebbcc;``  


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



　　





