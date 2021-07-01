addEventListener("fetch", (event)=>{
    const response = new Response("hello world!", {
        headers: {"content-type":"text/plain"},
    });
    event.respondWith(response)
});

//denodeploy: https://dash.deno.com/projects