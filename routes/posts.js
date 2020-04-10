module.exports = {
  getPosts(req, res) {
    res.status(200).send(req.store.posts)
  },
  addPost(req, res) {
    let newPost = {}
    newPost = req.body
    req.store.posts.push(newPost)
    res.status(201)
    res.end()
  },
  updatePost(req, res) {
    let post = {}
    post = req.body
    req.store.posts[req.params.postId] = post
    res.status(200)
    res.end()
  },
  removePost(req, res) {
    req.store.posts.splice(req.params.postId, 1)
    res.end()
  },
}
