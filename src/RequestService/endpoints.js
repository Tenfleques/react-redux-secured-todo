function GetEndpoint(point) {
    const urls = {
        "auth" : "http://localhost:3000/api/v1",
        "todos" : "http://localhost:3000/api/v1",
        "users" : "http://localhost:3000/api/v1"
    }
    const endpoints = {
        "me" : urls.auth + "/me",
        "login" : urls.auth + "/login",
        "logout" : urls.auth + "/logout" ,
        "todos": urls.todos + "/todos",
        "users" : urls.users + "/users",
        "_": urls.todos + "/"
    }
    return endpoints[point] || endpoints["_"];
}

export default GetEndpoint;