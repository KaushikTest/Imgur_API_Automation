import fs from 'fs';

function httpsRequest(request) {
    switch (request.method) {
        case "GET":
            return httpsGet(request);
        case "POST":
            return httpsPost(request);
        case "PUT":
            return httpsPut(request);
        case "PATCH":
            return httpsPatch(request);
        default:
            return httpsDelete(request);

    }
}

function httpsGet(request) {
    return request.url.get(request.path).send(request.body).query(request.queryparam).set(request.headers);
}

function httpsPost(request) {
    return request.url.post(request.path).send(request.body).query(request.queryparam).field(request.field).set(request.headers);
}

function httpsPut(request) {
    return request.url.put(request.path).send(request.body).query(request.queryparam).set(request.headers);
}

function httpsPatch(request) {
    return request.url.patch(request.path).send(request.body).query(request.queryparam).set(request.headers);
}

function httpsDelete(request) {
    return request.url.delete(request.path).send(request.body).query(request.queryparam).set(request.headers);
}


export async function getResponse(payload) {
    let response;
    await httpsRequest(payload).then(async (res) => {
        response = await res;
    }).catch((err) => {
        response = err;
    }
    );
    return response;
}

export function readImgurAccessToken() {
    const ACCESS_TOKEN = fs.readFileSync('token/token.txt', 'utf8', (err, data) => {
        if (err) throw err;
        return data;
    });
    return ACCESS_TOKEN;
}