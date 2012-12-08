WebSocket Chat Sample
======================
node.jsとsocket.ioを使って、そこそこ実用的なチャットを作ってみようというモチベーション。

ファイル構成
------
以下のファイル構成となっています。  
* app.js  
サーバ側のJavaScriptコード
* index.html  
クライアント側のHTMLファイル
* package.json
* README.md

動作環境
------
node v0.8.15、express 3.0.4、socket.io 0.9.11を使用して開発しました。  
もしかしたらnodeやsocket.ioのバージョンが変わると動かないかもしれません。

使い方
------
nodeの導入については省略します。  
正しくnodeが動作する環境で、任意のディレクトリにapp.js、index.html、package.jsonを設置します。  
ファイルを設置したディレクトリに移動し、以下のコマンドを入力します。
```
npm install
```
エラーが発生していないことを確認後、index.htmlをテキストエディタで開き、12行目を環境に合わせて修正します。ここでは接続先URLが「http://localhost:3000」の場合の例を示します。
```
（元）var connect_url = 'http://examples.com:3000';	// 接続先URLを指定します  
（例）var connect_url = 'http://localhost:3000';	// 接続先URLを指定します
```
修正が完了したら、以下のコマンドを入力します。
```
node app.js
```
「info  - socket.io started」とコンソールに表示されたことを確認後、socket.io等に対応したブラウザを開き、先に設定した接続先URLを開きます。

ライセンス
------

```
Copyright 2012 Muzeria Lushe

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```