let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount();
    checkCountValue();
}

function resetcount(){
    count = 0;
    checkCountValue();
    displayCount();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
    if (count % 10==0) {
      alert(`Your Instagram post gained anoter 10 followers! Congratulations! Toatl followers : ${count}`);
    }
    else if (count==0){
        alert("Your follower count has been reset to 0 !");
    }
  }