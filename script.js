let books = [];
let size = 0;
function book(item ,title, author, pages, read) {
    this.item = item;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}   
let list = document.getElementById("list-books");
let form = document.getElementById("form");
document.getElementById("add").onclick = function(){
    list.style.display = "none";
    document.getElementById("add-screen").style.display = "flex";
};
function create_book(title, author, pages, read){
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    let isRead = document.createElement("button");
    let btn = document.createElement("button");

    h2.appendChild(document.createTextNode(title));
    li.appendChild(h2);

    let p = document.createElement("p");
    p.appendChild(document.createTextNode(author));
    p.appendChild(document.createElement("br"));
    p.appendChild(document.createTextNode(pages));
    p.appendChild(document.createElement("br"));
    li.appendChild(p);

    if(read == true) isRead.appendChild(document.createTextNode("Read"));
    else isRead.appendChild(document.createTextNode("Not Read"));
    li.appendChild(isRead);
    isRead.addEventListener("click", function(){
        if(isRead.innerText == 'Read') isRead.innerText = "Not Read";
        else isRead.innerText = "Read";
    })

    btn.appendChild(document.createTextNode("Remove"));
    btn.addEventListener("click", function(){
        books.splice(books.findIndex(book => { return book.title === title}), 1);
        btn.parentElement.remove();
    })
    li.appendChild(btn);

    return li;
}
form.addEventListener('submit', function(event){
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let box = create_book(title, author, pages, read);
    books.push(new book(box, title, author, pages, read));
    list.appendChild(box);
    list.style.display = "flex";
    document.getElementById("add-screen").style.display = "none";
    size++;
    form.reset();
})