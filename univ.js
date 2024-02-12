

let univ = {
   
    fetchList: (country) => {
        let url = "http://universities.hipolabs.com/search?country="+country;
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
           
            // for(let i = 0; i<data.length; i++){
            //     document.querySelector("ul").innerHTML = "<li>"+data[i]["name"]+"</li><br>";
            // }

            data.forEach(element => {
                document.write("<li>"+element["name"]+"</li><br>");
            });
            
        });
    }
    //displayResult: function (data) {
    //    return document.querySelector("li").innerHTML = data[0]["name"];
    // }

}

const getData = () => {
    var country = document.querySelector("#cn").value
    univ.fetchList(country)
};

document.querySelector("button").addEventListener("click", getData)