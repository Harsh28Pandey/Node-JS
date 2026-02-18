export default function login() {
    return `<form action="/submit" method="POST">
            <input type="text" placeholder="Enter your name"/>
            <input type="password" placeholder="Enter your password"/>
            <button>Login</button>
        </form> <a href="/">Home Page</a>`
}