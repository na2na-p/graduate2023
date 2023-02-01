# 2na2-Discord

コミュニケーションツールである Discord で利用できる Bot

## テーマやコンセプト

- Discord Bot
- 機能をモジュールに分割し、機能追加等メンテナンス性の高い設計を目指す

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
  - ECR の設置に IaC 利用
  - main マージ後に AWS ECS へ自動デプロイ(AWS CodePipeline 利用)

![image](https://user-images.githubusercontent.com/49822810/209613051-88819772-3ecb-4ba1-a5cb-0bd6c8b31378.png)

## 今後の課題

- 機能を Class ベースで作成しており、どうにもテストしづらく感じています。関数ベースに作り直す予定があります。

## 成果物

[Github](https://github.com/na2na-p/2na2-Discord)
