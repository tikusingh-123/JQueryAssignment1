$(document).ready(
    ()=>{
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/photos",
            method: "GET",
            success:(x)=>{

                x.forEach(data=>{
                    var name=data.title;
                    var img= data.thumbnailUrl;
                    var card = `<div id='inrBox'>
                    <img src="${img}" alt="" height="100px" width="100px"/>
                    <p>${name.substring(0,25)}</p>
                    <button>add to cart</button>
                    </div>`;
                    $('#Box').append(card);
                });                
                
            },
            error:(e)=>{
                alert("Error: ",e);
            }
        });

        
    }
);