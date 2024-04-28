import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.get("/about", (req,res) => {
    res.render("about.ejs");
});

app.get("/contact", (req,res) => {
    res.render("contact.ejs");
});

app.get("/site1", (req,res) => {
    res.render("site1.ejs");
});

app.get("/site2", (req,res) => {
    res.render("site2.ejs");
});
app.get("/site3", (req,res) => {
    res.render("site3.ejs");
});
app.get("/site4", (req,res) => {
    res.render("site4.ejs");
});
app.get("/site5", (req,res) => {
    res.render("site5.ejs");
});
app.get("/site6", (req,res) => {
    res.render("site6.ejs");
});
app.get("/site01", (req,res) => {
    res.render("site01.ejs");
});
app.get("/site02", (req,res) => {
    res.render("site02.ejs");
});
app.get("/site03", (req,res) => {
    res.render("site03.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});