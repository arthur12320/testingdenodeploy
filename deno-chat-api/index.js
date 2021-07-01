addEventListener("fetch", (event)=>{
    const reponse = new Reponse("hello world!", {
        headers: {"content-type":"text/plain"},
    });
    event.respondWith(response)
});