var xml = new XMLHttpRequest();
console.log(xml);
var links = {
    actors: "http://mysafeinfo.com/api/data?list=bestactors1&format=json",
    books: "http://mysafeinfo.com/api/data?list=bestnovels&format=json",
    nobel: "http://mysafeinfo.com/api/data?list=nobelwinners&format=json"
}
var ul = document.getElementsByTagName('ul')[0];
ul.addEventListener('click', function(e) {
    e.preventDefault();
    var link = e.target.getAttribute('href');
    xml.open('get', links[link]);
    xml.onreadystatechange = function() {
        if (xml.readyState == 4 && xml.status == 200) {
            displayData(link);
        };
    }
    xml.send();
})

function displayData(heading) {
    var data = JSON.parse(xml.responseText);
    var first = data[0];
    // TODO 
    // nastaviti tako sto ces napraviti h2 naslon (heading arg)
    //  loop za thead
    // loop za tbody
}