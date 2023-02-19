# Twitter ライクな Web アプリ

## 作成動機

株式会社ゆめみさんのインターンシップにて、Twitter ライクな Web アプリを作成する課題が出されました。公開許可をいただいた上で展示しています。

## リンク

[展示](https://sns-app.na2na.dev)

[リポジトリ](https://github.com/na2na-p/sns-app)

[API 仕様](https://oas-sns-app.na2na.dev)

[発表スライド](https://na2na-sns-app-slide.pages.dev)  
矢印キーでスライド送りができます。

## 参考画像

実際の投稿画面
![投稿画面](https://misskey.na2na.dev/media/media/4c222d3e-98ba-407a-b1e7-cd9fce3547b0.png)
簡単なインフラ構成図
![インフラ構成図](https://misskey.na2na.dev/media/media/9f6070d8-a7f1-44bd-b4b5-4ec17eb6f931.png)
CI の様子
![CIの様子](https://misskey.na2na.dev/media/media/069b7a35-ca7b-4300-88d3-0542f6e7b22e.png)

## 利用技術

| 成果物         | Twitter ライクな Web アプリケーション                                    |
| -------------- | ------------------------------------------------------------------------ |
| エディタ       | IntelliJ IDEA Ultimate / VSCode                                          |
| バックエンド   | Laravel 9 + PHP 8.2.1 (sail 利用)                                        |
| ミドルウェア等 | Redis                                                                    |
| フロントエンド | React 18 + TypeScript 4.9.4                                              |
| データベース   | MySQL 8.0                                                                |
| インフラ       | AWS (IaC 利用、バックエンド) / Cloudflare (バックエンド, フロントエンド) |
| CI/CD          | Github Actions(GitHub-hosted)                                            |
| 認証           | Session Auth                                                             |

## 注力した点

### バックエンド構築

PHP/Laravel を利用してバックエンドを構築します。

構築の際、以下のことを考慮して行います。

- Web サーバー

  - laravel.test を魔改造して nginx + php-fpm コンテナの組み合わせで動くように
    - sail デフォルトの laravel.test はあくまで開発用で PHP ビルトインサーバーで動いており、並列リクエストをさばけないため。

- CORS 設定
  - 無意味に\*をつけないこと。開発中でも同じ
- 使用するフレームワークのお作法に乗っ取った設計をすること。
  - 例えば、バリデーションは FormRequest に移譲する等、コントローラが賢くなりすぎないように
  - Eloquent なら必要になるまで query や select を避ける。型の恩恵を最大限受けよう。
- テスタブルな実装をしよう
- 可能ならスキーマ駆動でやっていきたい。
  - 型の恩恵を最大限受けよう
- Linter 等の静的解析で防げるものは防ぎましょう

### フロントエンド構築

Vite/React + TypeScript を利用しています。

主に以下のことを考えています。

- 概念を増やしすぎない
  - 実装時に考慮すべき箇所が増えるため
- いわゆる責務の分離を徹底する
  - 親子になるコンポーネントがあったとして、親が子の状態を知っているべきかどうか、など
- テスタブルな実装をしよう

  - 例えばフック類をまとめたカスタムフック化して別ファイルに切り出すなど。
  - カスタムフックにコンポーネントを渡す際に`useHooks(props, Hoge)`と渡して、useHooks の中で以下のようにして呼び出すようにしよう。コンポーネントのモックができてお得です。

  ```tsx
  React.createElement(Hoge, {
    onClick: handleClick,
  });
  ```

- 可能ならスキーマ駆動で
  - 型の恩恵を最大限受けよう
- Linter 等の静的解析で防げるものは防ぎましょう

### インフラ構築

今回利用したのは AWS です。
以下のことを意識しています。

- ロールやポリシーを適切に扱いましょう
- 予算はしっかりと管理して、必要ならばアラートをかけましょう
- メトリクスの監視をして異常があれば通知を出しましょう
- IaC する場合は
  - tflint 等の静的解析で防げるものは防ぎましょう
  - tfstate を S3 に置く場合は、バージョニングを有効にしましょう。また、排他ロックもしましょう。
