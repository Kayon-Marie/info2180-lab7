window.onload = () =>{
    const searchField = document.getElementById('country');
    const searchButton = document.getElementById('lookup');
    const result = document.getElementById('result');
    let httpRequest = new XMLHttpRequest();
    let url = "https://info2180-lab7-kayonmarie.c9users.io/world.php";
    
    searchButton.addEventListener('click', findCountry);
    
    function findCountry(){
        let data = searchField.value;
        let ext = '?country='+data;
        httpRequest.onreadystatechange = doSomething;
        httpRequest.open('GET', url+ext, true);
        httpRequest.send();
    }
    
    function doSomething(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                let response = httpRequest.responseText;
                alert(response);
            }
            else{
                alert('There is a problem with the request');
            }
        }
    }
}