---
title: Template COLORガイド
---
This is the component library for [Template](http://Template.net/).

以下のカラーコードを使用し、変数管理しています。カラーをsassファイルに記述する際は変数で記述するようにしましょう。

### プライマリーカラー  
<div class="flex">
	<div class="card">
		<div class="card__color -primaryColor"></div>
		<div class="inner">
			<div class="card__variables">$primary-color</div>
			<div class="card__code">#ffe700</div>
		</div>
	</div>
</div>

### セカンダリーカラー  
<div class="flex">
	<div class="card">
		<div class="card__color -secondaryColor"></div>
		<div class="inner">
			<div class="card__variables">$secondary-color</div>
			<div class="card__code">#ffcf00</div>
		</div>
	</div>
</div>

### グラデーションプライマリーカラー  
<div class="flex">
	<div class="card">
		<div class="card__color gradient-primary"></div>
		<div class="inner">
			<div class="card__variables">グラデーション</div>
			<div class="card__code">@include gradient-primary</div>
		</div>
	</div>
</div>


### ホワイトとブラックとレッドに関して  

白と黒はカラーコードが単純なためSassの変数は持たない
（単純なカラーコードのグレーを変数で持ってるのはサイトで使われるグレーを統一するため）

<div class="flex">
	<div class="card">
		<div class="card__color" style="background: #000;"></div>
		<div class="inner">
			<div class="card__code">#000</div>
		</div>
	</div>
	<div class="card">
		<div class="card__color" style="background: #fff; border: 1px solid #f1f1f1;"></div>
		<div class="inner">
			<div class="card__code">#fff</div>
		</div>
	</div>
</div>


### グレーカラー  
<div class="flex">
	<div class="card">
		<div class="card__color -color-gray-1"></div>
		<div class="inner">
			<div class="card__variables">$color-gray-1</div>
			<div class="card__code">#1d1e22</div>
		</div>
	</div>
	<div class="card">
		<div class="card__color -color-gray-2"></div>
		<div class="inner">
			<div class="card__variables">$color-gray-2</div>
			<div class="card__code">#2a2c32</div>
		</div>
	</div>
	<div class="card">
		<div class="card__color -color-gray-6"></div>
		<div class="inner">
			<div class="card__variables">$color-gray-6</div>
			<div class="card__code">#666</div>
		</div>
	</div>
	<div class="card">
		<div class="card__color -color-gray-c"></div>
		<div class="inner">
			<div class="card__variables">$color-gray-c</div>
			<div class="card__code">#ccc</div>
		</div>
	</div>
	<div class="card">
		<div class="card__color -color-gray-e"></div>
		<div class="inner">
			<div class="card__variables">$color-gray-e</div>
			<div class="card__code">#eee</div>
		</div>
	</div>
</div>

### snsカラー  
<div class="flex">
	<div class="card">
		<div class="card__color -facebookcolor"></div>
		<div class="inner">
			<div class="card__variables">$facebook-color</div>
			<div class="card__code">#359</div>
		</div>
	</div>
	<div class="card">
		<div class="card__color -twittercolor"></div>
		<div class="inner">
			<div class="card__variables">$twitter-color</div>
			<div class="card__code">#5ae</div>
		</div>
	</div>
	<div class="card">
		<div class="card__color -linecolor"></div>
		<div class="inner">
			<div class="card__variables">$line-color</div>
			<div class="card__code">#0b0</div>
		</div>
	</div>
</div>


### アラートカラー  
<div class="flex">
	<div class="card">
		<div class="card__color -alert--success"></div>
		<div class="inner">
			<div class="card__variables">$success-color</div>
			<div class="card__code">#4cb</div>
		</div>
	</div>
	<div class="card">
		<div class="card__color -alert--warning"></div>
		<div class="inner">
			<div class="card__variables">$warning-color</div>
			<div class="card__code">#fc2</div>
		</div>
	</div>
	<div class="card">
		<div class="card__color -attention-color"></div>
		<div class="inner">
			<div class="card__variables">$attention-color</div>
			<div class="card__code">#ff5533</div>
		</div>
	</div>
</div>


### テキストカラー  
<div class="flex">
	<div class="card">
		<div class="card__color -text"></div>
		<div class="inner">
			<div class="card__variables">text-color</div>
			<div class="card__code">#eee</div>
		</div>
	</div>
</div>

### リンクカラー  
<div class="flex">
	<div class="card">
		<div class="card__color -link--primary"></div>
		<div class="inner">
			<div class="card__variables">$link-color--primary</div>
			<div class="card__code">#ffcf00</div>
		</div>
	</div>
	<div class="card">
		<div class="card__color -link--secondary"></div>
		<div class="inner">
			<div class="card__variables">$link-color--secondary</div>
			<div class="card__code">#eee</div>
		</div>
	</div>
</div>

### アクセントカラー  
<div class="flex">
	<div class="card">
		<div class="card__color -accent--primary"></div>
		<div class="inner">
			<div class="card__variables">$accent-color--primary</div>
			<div class="card__code">#ff6d6d</div>
		</div>
	</div>
</div>


<style type="text/css">

.flex {
	display: flex;
	flex-wrap: wrap;
}
.card {
  width: 200px;
  max-height: 240px;
  padding-right: 8px;
}
.card__color {
  width: 100%;
  height: 100px;
}
.inner {
  padding: 8px 0 16px;
  font-size: 13px;
}
.-primaryColor {
  background: #ffe700;
}
.-secondaryColor {
  background: #ffcf00;
}
.-color-gray-1 {
  background: #1d1e22;
}
.-color-gray-2 {
  background: #2a2c32;
}
.-color-gray-6 {
  background: #666;
}
.-color-gray-c {
  background: #ccc;
}
.-color-gray-e {
  background: #eee;
}

.-twittercolor {
  background: #5ae;
}
.-facebookcolor {
  background: #359;
}
.-linecolor {
	background: #0b0;
}

.-alert--success {
	background: #4cb;
}

.-alert--warning {
	background: #fc2;
}

.-attention-color {
	background: #ff5533;
}

.-text {
	background: #eee;
}

.-link--primary {
	background: #ffcf00;
}

.-link--secondary {
	background: #eee;
}
.-accent--primary {
	background: #ff6d6d;
}

</style>

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
