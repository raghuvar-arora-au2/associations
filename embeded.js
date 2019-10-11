var mongoose=require("mongoose");
mongoose.connect("mongodb://raghuvar:qwert123@ds243418.mlab.com:43418/sample");

var postSchema=new mongoose.Schema({
	title:String,
	content:String
});

// var postSchema=new mongoose.Schema({
// 	title:String,
// 	content:String
// });

var userSchema=new mongoose.Schema({
	email:String,
	name:String,
	posts:[postSchema]
});

var User=mongoose.model("User", userSchema);


var Post=mongoose.model("Post", postSchema);

var newUser= new User({
	email:"rv@gmial.com",
	name:"rv",
});

newUser.posts.push({
	title:"dsdfs",
	content:"gibberish"});

newUser.save(function(err, user){
	if (err)
		{console.log(error);}
	else
		{console.log(user);}
});


var newPost= new Post({
	title:"title1",
	content:"randomstffs"
});

newPost.save(function(err, post){
	if(err){
		console.log(err);
	}
	else{
		console.log(post);
	}
});
