## GET STARTED

### ビルドに必要なもの 

* bundler (rubyのパッケージマネージャです)

```bash

# sprocketsをインストール
bundle install --vendor/bundle
# ビルド実行 -> build直下にespruino.jsが作成される
. build

```

#### 確認

`build/espruino.js`の内容が`src/part.js`と`src/main.js`を連結したものになっていればOKです。
