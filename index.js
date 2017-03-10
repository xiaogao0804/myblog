var http = require('http');
var fs = require('fs');
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var jsonParse=bodyParser.json({'Content-Type':'application/json'});
app.use(bodyParser.urlencoded({extended: false}));
app.use(jsonParse);
app.use(express.static('public'));
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var leaveWordSchema=new Schema({
	content:String,
	time : String,
	name : String,
});
var leaveWord = mongoose.createConnection('localhost','smallstar');
app.get('/',function(req,res){
	res.writeHead(302,{Location:'http://www.smallstar.club/myBlog/dist/index.html'})
	res.end();
})

app.post('/get_leave_word/*',function(req,res){
	var leaveWord_model = leaveWord.model('leaveWord',leaveWordSchema);
		leaveWord_model.find({}).sort({'_id':'-1'}).exec(function(err,data){
			if(err) throw err;
			res.send({
				code:"800",
				msg:"成功",
				data
			});
			res.end();
		})
})
app.post('/add_leave_word/*',function(req,res){
	var obj = {
		content:req.body.content,
		time : new Date(),
		name:req.body.name
	}
	var leaveWord_model = leaveWord.model('leaveWord',leaveWordSchema);
	var leaveWord_obj = new leaveWord_model(obj)
	leaveWord_obj.save(function(err,data){
		if(data){
			res.send({
				code:"800",
				msg:"成功",
				data
			});
			res.end();
		}
	})	
}) 
var server=app.listen(80,'10.135.136.31',function(){
})

