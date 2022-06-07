# ストリーミングAPI

## 概要

ストリーミングAPIを用いることで、リアルタイムに様々な情報を受け取ったり、様々な操作を行うことができます。

## ストリームに接続する
ストリーミングAPIを利用するには、まずSurveinyanceが動作しているサーバにWebSocketで接続する必要があります。
以下の形式のURLにWebSocket接続します:
```
wss://{host}/streaming?token={token}
```
ここで、
- `{host}`はSurveinyanceが動作しているサーバのURLです。
- `{token}`はSurveinyanceで発行したトークンです。

::: warning
アクセストークンは必須です。存在しない場合は403エラーが返されます。
:::

