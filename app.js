async function start() {
    const resp =  await fetch("./data/data.json");
    const data = await resp.json();
    console.log(data[500]);
}

start();

