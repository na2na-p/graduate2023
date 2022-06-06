# Surveinyance

## これは何

就職作品プレゼンテーションで用いる、個人作品です。  
監視を意味する`Surveillance`から取った`Surveinyance`という名前です。

## 概要

さまざまな環境で実行できる(サーバー側:Node.js,Deno,PHP,Python,その他 || クライアント:Electron を使用する)サーバー監視ソフトです。  
あれば便利そう、一つのプロダクト内で完結してほしいものを混ぜ合わせました。

## 機能

### バックエンド

- クライアントアプリケーションとは、WebSocket を用いて通信をする。仕様は別に定める。
- バックエンドは、Node.js,Deno,PHP,Python,その他で実行できる。
- 機能は Node.js 版を最優先に開発する。
- 個人を識別するためにAPIキーを発行させる。これはインストール時に発行する。キーは複数発行することができるが、最初に発行したものを使用してサーバーに接続した上で作業する。

### クライアント

- ソフトウェアフレームワークである、Electron を使用する。
- 監視対象のサーバーとは WebSocket を用いて通信をする。仕様は別に定める。
- IP アドレスを入力すると、サブネットマスクを自動で計算して表示します。イメージとしては[これ](https://note.cman.jp/network/subnetmask.cgi)が近いです。これは、ライブラリを用いず自力で実装する。
- 各種操作は、監視対象のサーバー側で発行したAPIキーを用いて認証を済ませた上で行う。
- 監視対象のサーバーの各種リソース使用率について監視する。
- 監視対象のサーバーの nginx を始めとした各種アプリケーションのログ見られるようにする。
- 監視対象のサーバーの iptables を触ることができる。
- (余力あれば)Terraform/Kubernetes 関係で何か。

## メモ
- 認証はOAuth?(すでにある実装例としてはMiAuthあたり？)