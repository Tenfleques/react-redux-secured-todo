import APIpoints from "./endpoints";
import errorController from "../Exceptions/errorController";

class RequestService {
    async getRequest(point, method){
        let opts = {
            cache: 'no-cache',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: method,
            //mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer'
        } 
    
        if(method.toUpperCase() === "POST"){
            opts["body"] = JSON.stringify(arguments[2]);
        }
        let id = "";
        if(method.toUpperCase() === "PUT"){
            opts["body"] = arguments[3];
            id =  "/" + arguments[2] ;
        }        
        if(method.toUpperCase() === "PUT" || method.toUpperCase() === "DELETE"){
            id = "/" + arguments[2];
        }
        if(method.toUpperCase() === "GET" && arguments[2]){
            id = "/" + arguments[2];
        }

        let data = await (await (fetch(APIpoints(point) + id, opts)
            .then(response => {
                return response.text().then(function(text) {
                    return text ? JSON.parse(text) : {}
                })
            })
            .catch(errorController)
        ))
        return data
    }
}
export default new RequestService()