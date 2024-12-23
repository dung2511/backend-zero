const getHomePage = (req, res) => {
    // process data
    // call model
    res.send("Hello world !!")
}
const getExample = (req, res) => {
    res.render("example.ejs")
}
module.exports = {
    getHomePage,
    getExample
} 