
class PostController {
    getPost = (req, res) => {
        return res.send('Hello  Post site')
    }
}

export default new PostController();