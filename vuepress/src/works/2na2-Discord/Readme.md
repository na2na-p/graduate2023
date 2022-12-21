# 2na2-Discord

コミュニケーションツールである Discord で利用できる Bot

## 主な機能

- サイコロ
- GPT3 を用いたテキスト生成
- WebAPI を利用した星座占い
- カラーコード自動生成
- 翻訳機能(バックエンドに DeepL を利用)
- クックパッドからランダムにメニュー提示

## 工夫した点

- CI/CD 完備
  - main に取り込まれるのに最低限 Linter と test の通過が必要
  - パッケージ類は Renovate による自動更新
  - main マージ後に AWS ECS へ自動デプロイ(AWS CodePipeline 利用)

## 成果物

[Github](https://github.com/na2na-p/2na2-Discord)
