document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friend-container');

    const div = document.createElement('div');
    div.className = 'friend';
    div.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Lorem ipsum dolor sit amet.</p>
    `;

    friendContainer.appendChild(div);
});


document.getElementById('apply-bg').addEventListener('click', function(){
    const friends =  document.getElementsByClassName('friend');
    
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }

    this.style.backgroundColor = "orange";
});