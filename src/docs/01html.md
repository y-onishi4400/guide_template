---
title: Template HTMLガイド
---
This is the component library for [Template](http://Template.net/).

基本的にレビュー時の指標となる点に関して記載しています。

## プロトコル  
埋め込みリソースにHTTPSプロトコルを使用。  
https:それぞれのファイルがHTTPS上で利用可能でない限り、イメージやその他のメディアファイル、スタイルシート、およびスクリプトには常にHTTPSプロトコル（）を使用。 

<span style="color: #ff0000;">×bad</span>  
``<！-推奨されていません：プロトコルを省略します - > <script src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js" > </ script>``  
``<！-推奨されていません：HTTPプロトコルを使用します - > <script src = "http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js" > </ script>``

<span style="color: #4A90E2;">○OK</span>  
``<script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js" > </ script>``  


## type属性 

typeスタイルシートとスクリプトの属性は省略。  

**css**

<span style="color: #ff0000;">×bad</span>  
``<link rel = "stylesheet" href = "https://www.google.com/css/maia.css" type = "text / css" >``

<span style="color: #4A90E2;">○OK</span>  
``<link rel = "stylesheet" href = "https://www.google.com/css/maia.css" >``


**javascript**

<span style="color: #ff0000;">×bad</span>  
``<script src = "https://www.google.com/js/gweb/analytics/autotrack.js" type = "text / javascript" > </ script>``

<span style="color: #4A90E2;">○OK</span>  
``<script src = "https://www.google.com/js/gweb/analytics/autotrack.js" > </ script>``



## 宣言  
**HTML5を使用**  
HTML5（HTML構文）は、すべてのHTML文書で推奨。  
```<!DOCTYPE html>```

**XHTMLは使用しない**   
ブラウザおよびインフラストラクチャサポートの両方への配慮から。   

## 文字コード  
UTF-8。    


## HTMLの妥当性  
テストにはW3C HTMLバリデーターなどのツールを使用する。  
https://validator.w3.org/nu/ 


<hr>


以下はレビュー時の指標になり得る箇所を抜粋してます。


## アクセシビリティ  
アクセシビリティ、再利用、コード効率の理由から、目的に応じてHTMLを使用しましょう。  
<span style="color: #ff0000;">×bad</span>  
```<！ - 推奨しない - > <div onclick = " goToRecommendations （）; " > すべてのおすすめ情報</ div>```  

<span style="color: #4A90E2;">○OK</span>  
```<！ -推奨- > <a のhref = "recommendations/"> すべての推奨する</a>```  

## パスはルート相対パス  
サイト内リンク/画像のリンク共に、指定がない場合は原則としてルート相対パス。  
```<a href="/company/index.html">企業情報</a>```

## タグ記述のルール  

**■body**  
システム上全ページ共通で使用するためページ固有のIDを振ったりせず、bodyのみで使用する。
<span style="color: #ff0000;">×bad</span>  
```<body id="pageID_top" class=”style”>```

<span style="color: #4A90E2;">○OK</span>  
```<body>```

**■hタグ**  

文書の論理構造に合わせて、必ず見出し要素を使用する。  
h1の次にh3が来たりする場合はレビュー時にチェックを。  

**■imgタグ**   

**1.imgタグには画像サイズ属性の記述はいりません。**  
レスポンシブ対応のため。 

**2.imgは必ずpやliに内包しましょう。**  
レスポンシブ対応のため。  

**3.alt属性にて画像の代替となるテキストをつけましょう。**  
※特に指定が無い場合は、その画像の簡易説明をaltの内容とする。  
※装飾用の画像など、相応しい代替テキストが存在しない画像の場合には、「alt=""」と設定する。  
（装飾用の画像はできるだけ背景にする）

## エンティティの参照  
「<」「>」……などの記号は「エンティティ（Entity）」と呼ばれる特殊文字を利用して、表示しましょう。

例えば、記号「<」を表示する場合には以下のように記述しましょう。  
``&lt;`` ``&#60;``

エンティティ一覧  
https://webkaru.net/html5/html-entities-list/  
 


## HTML引用符  

属性値を引用するときはダブルクォーテーションを使用。  

<span style="color: #ff0000;">×bad</span>  
``<！ -推奨しない- > <a クラス='maia-button maia-button-secondary'> ログインする</a>``

<span style="color: #4A90E2;">○OK</span>  
``<！ -推奨- > <a クラス= "maia-button maia-button-secondary"> ログインする</a>``  


## 末尾の空白  

末尾の空白は削除します。  

<span style="color: #ff0000;">×bad</span>  
``<！ - 推奨しない - > <p> 何？_``

<span style="color: #4A90E2;">○OK</span>  
``<！ - 推奨 - > <p> はい。	``  


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








