async function getArea(){
    const resp = await fetch("https://official-joke-api.appspot.com/random_ten");
    const data  =await resp.json();
    console.log(data)
    giveAccsess(data);


}
function giveAccsess(jokes){
    var result = document.getElementById("result");
    result.innerHTML = " ";

    jokes.forEach((joke) =>{
        const {type , setup , punchline  } = joke;
        const jokesE1 = document.createElement("div");
        jokesE1.classList.add("joke");

        jokesE1.innerHTML = `<h4>${type}</h4>
       <h3>${setup}</h3>
       <h2>${punchline}</2> 
        `
        result.appendChild(jokesE1);
    });
}

