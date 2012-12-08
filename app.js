var listen_port = 3000;	// 待ち受けるポート番号を設定します
var express = require('express');
var app = express();
var io = require('socket.io').listen(app.listen(listen_port));	// 設定したポート番号で待ち受けを開始します

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');	// クライアントにindex.htmlを返します
});
io.sockets.on('connection', function(socket){	// クライアントが接続してきた際の処理
	console.log('client connected');	// クライアントが接続してきた旨、ログに出力します
	socket.emit('handshake_first', {status: 'accepted'});	// クライアントにhandshake_firstメッセージを送信します
	
	socket.on('handshake_second', function(response){	// クライアントからhandshake_secondメッセージを受信した際の処理
		if(response.response === 'continue'){	// クライアントから受信したメッセージのresponseがcontinueの場合
			console.log('connection established');	// 接続が確立された旨、ログに出力します
		}
	});
	
	socket.on('client_send_message', function(message){	// クライアントからclient_send_messageメッセージを受信した際の処理
		console.log(message.name + " " + message.color + " " + message.message);	// 受信したメッセージの内容をログに出力します
		socket.broadcast.emit('server_broadcast_message', message);	// メッセージをブロードキャストします
	});
});
