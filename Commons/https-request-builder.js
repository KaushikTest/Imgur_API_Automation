
class  HttpRequest{
    constructor(url,path,method,headers,body,field,queryparam,params){
        this.url = url;
        this.path = path;
        this.method = method;
        this.headers = headers;
        this.body = body;
        this.field=field;
        this.queryparam=queryparam;
        this.params = params;
    }

    }

export class HttpRequestBuilder{

    setURL(url){
        this.url = url;
        return this;
    }

    setPath(path){
        this.path = path;
        return this;
    }

    setMethod(method){
        this.method = method;
        return this;
    }

    setHeaders(headers){
        this.headers = headers;
        return this;
    }

    setBody(body){
        this.body = body;
        return this;
    }

    setField(field){
        this.field=field;
        return this;
    }

    setQueryParam(queryparam){
        this.queryparam = queryparam;
        return this;
    }

    setParams(params){
        this.params = params;
        return this;
    }

    build(){
        return new HttpRequest(this.url,this.path,this.method,this.headers,this.body,this.field,this.queryparam,this.params);
    }

}