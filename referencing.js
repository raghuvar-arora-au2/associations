var mongoose=require("mongoose");

mongoose.connect("mongodb://raghuvar:qwert123@ds243418.mlab.com:43418/sample");

var postSchema=new mongoose.Schema({
	title:String,
	content:String
});

var Post=mongoose.model("post", postSchema);

var userSchema=new mongoose.Schema({
	email:String,
	name:String,
	posts:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"post"
	}]
});

var User=mongoose.model("User", userSchema);

// HELLL
// Post.create({
// 	title:"random title",
// 	content:"random stuffs"
// }, function(err, post){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{ User.find({email:"rv@gmial.com"}, function(err, foundUser){
// 		if(err){
// 			console.log(err);
// 		}
// 		else{
// 			foundUser[0].posts.push(post);
// 			foundUser[0].save(function(err, data){
// 				if (err)
// 					{console.log(err);}
// 				else
// 					{console.log(data);}
// 			})
// 		}
// 	})}
// })

(User.find({email:"rv@gmial.com"})).populate("posts").exec(function(err,user){
	if(err){
		console.log(err);
	} else{
		console.log(user[0]);
	}
});
// User.create({
// 	email:"rv@gmial.com",
// 	name:"ragi"
// })
