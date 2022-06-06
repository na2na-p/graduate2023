# Gomamayo-Deno

## 前提知識

### 言葉遊びとしてのゴママヨ

詳しくは発案者の[ホームページ](https://thinaticsystem.com/glossary/gomamayo)にありますが、ここでは最低限の前提知識のみを扱います。

#### 定義

複合語を、構成する単語レベルに分割した際に n 語目の末尾と、n+1 語目の先頭が同じ音であることを、ゴママヨといいます。

## 制作動機

前述した「ゴママヨ」を、自動的に検出できたら面白そう、という理由だけです。既に発案者がすでに Node.js ですでに作られていたこと、TypeScript をそのまま実行できる Deno について興味を持っていたことが Deno を選んだ理由となります。

## 成果物

リポジトリは[こちら](https://github.com/na2na-p/gomamayo-deno)です。  
また、Deno の[サードパーティーモジュール](https://deno.land/x/gomamayo_deno@2.0.4)としても公開しております。  
デモ用に API を生やしました。展示期間中のみにはなりますが[こちら](#)のページからお試しいただけます。

## 技術的な詳細

### 使用したもの

- [Deno](https://deno.land/)
- [MeCab](https://taku910.github.io/mecab/)
