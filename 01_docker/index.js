import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.json({message: "hello bully"});
});

app.get("/me", (req, res)=>{
	res.json({message: "heheheheheheh"})
});

app.listen(3000);
