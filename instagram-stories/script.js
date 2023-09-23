var arr = [
    {
        username:"random_user",
        dp:"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://plus.unsplash.com/premium_photo-1675159316424-4567a58d835f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        username:"mohit209",
        dp:"https://images.unsplash.com/photo-1630208232589-e42b29428b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1514439827219-9137a0b99245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        username:"jane.doe",
        dp:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://plus.unsplash.com/premium_photo-1664354956973-1dda98750a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlnaHQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        username:"therock",
        dp:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS8DxAOFrR9zmRLqyH6eGk-XEIfkcvafCKPNqR1YduokqF6tlCkZQEQ_EVJypF9uyekuU9S2aeC9wayhog",
        story:"https://images.unsplash.com/photo-1563844528129-067e06a638e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d3dlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
]

var clutter = ""
arr.forEach(function(elem,idx)
{
    clutter += `<div class="container">
                    <div class="story">
                        <img id="${idx}" src="${elem.dp}" alt="">
                    </div>
                    <h3>${elem.username}</h3>
                </div>`
})

var storiyan = document.querySelector("#storiyan")
var full = document.querySelector("#full-screen")

storiyan.innerHTML = clutter
storiyan.addEventListener("click",function(val)
{
    console.log(arr[val.target.id].story)
    full.innerHTML = `<img src="${arr[val.target.id].story}" alt="">`
    full.style.display = "block"

    setTimeout(function()
    {
        full.style.display = "none"
    },2000)

})

var con = document.querySelector("#post #container")
var love = document.querySelector("#post #container i")

con.addEventListener("dblclick",function()
{
    love.style.transform = "translate(-50%,-50%) scale(1)"
    love.style.opacity = 0.7
    setTimeout(function()
    {
        love.style.opacity = 0
        love.style.transform = "translate(-50%,-50%) scale(0)"
    },550)
})