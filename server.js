const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const {
  getComment,
  addComment,
  updateComment,
  removeComment,
} = require('./routes/comments')
const { getPosts, addPost, updatePost, removePost } = require('./routes/posts')

let store = {
  posts: [
    {
      name: '',
      url: '',
      text: '',
      comments: [
        {
          text: '',
        },
      ],
    },
  ],
}
app.use(bodyParser.json())

app.use((req, res, next) => {
  req.store = store
  next()
})

app.get('/posts', getPosts)
app.post('/posts', addPost)
app.put('/posts/:postId', updatePost)
app.delete('/posts/:postId', removePost)

app.get('/posts/:postId/comments', getComment)
app.post('/posts/:postId/comments', addComment)
app.put('/posts/:postId/comments/:commentId', updateComment)
app.delete('/posts/:postId/comments/:commentId', removeComment)
app.listen(2500)
