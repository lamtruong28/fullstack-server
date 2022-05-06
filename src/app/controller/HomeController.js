
class HomeController {
    getHome(req, res) {
        res.send('Hello home page!');
    }
}
export default new HomeController();