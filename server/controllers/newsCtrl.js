module.exports = {
    getNews: async (req, res) => {
        const db = req.app.get('db')
        db.get_news().then(news => res.status(200).send(news))
    }
}