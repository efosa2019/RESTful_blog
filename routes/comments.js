module.exports = {
  getComment(req, res) {
    res.status(200).send(req.store.posts[req.params.postId].comments)
  },
  addComment(req, res) {
    let comment = {}
    comment = req.body
    req.store.posts[req.params.postId].comments.push(comment)
    res.status(201)
    res.end()
  },
  updateComment(req, res) {
    let comment = {}
    comment = req.body
    req.store.posts[req.params.postId].comments[req.params.commentId] = comment
    res.status(201)
    res.end()
  },
  removeComment(req, res) {
    req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(200)
    res.end()
  },
}
