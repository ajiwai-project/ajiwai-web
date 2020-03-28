# AJIWAI - native application
## 環境
* node: v12.4.0
* yarn: 1.19.1

## 初期設定
### nodeのインストール
nodebrewをインストールする。

`$ brew install nodebrew`

pathを通すため、bashrc等に以下を記述

`export PATH=$HOME/.nodebrew/current/bin:$PATH`

設定を読み直す

`$ source ~/.bashrc`

nodeのインストール

`$ nodebrew install v12.4.0`

確認

```
$ node -v
v12.4.0
```

### yarnのインストール
yarnをインストールする

`$ npm install -g yarn@1.19.1`

※正直最新の安定版でもいいかも

確認

```
$ yarn -v
1.19.1
```

## 依存パッケージのインストール

```
$ yarn install
```

## 起動

`$ yarn start`

### スマホでの確認
1. androidに[expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=ja)というアプリを入れる
2. pcと同じwifiにつなぐ
3. `yarn start`で起動
4. `http://localhost:19002/`で開かれた画面のconnectionをlocalにする
5. expoアプリで表示されたqrコードを読み込む

### webでの確認
1. `yarn start`で起動
2. 起動後ターミナルで`w`を押す

※現状いっぱいimportエラーが出てるけど、起動はできる


