var booksJson = JSON.parse(books);
console.table(booksJson);


var doc = document.getElementById('result');

for(var i=0;i<booksJson.length;i++)
{
    doc.innerHTML += `<li><p>Title: ${booksJson[i].title} <br> Author: ${booksJson[i].author} </p><br></li>`;
    doc.innerHTML += `<img src="${booksJson[i].img}">`;


    // if document is read = change color
    if(booksJson[i].read == true)
    {
    document.getElementsByTagName('p')[i].style.backgroundColor = "red";
    }
}