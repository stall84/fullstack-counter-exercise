function increment() {
    axios.post("/increment")
      .then(function(response){
        console.log(response);
        document.getElementById("counter").innerHTML = response.data.num
      })
  }
  
  function decrement(response) {
    axios.post("/decrement")
    .then(function(response){
      console.log(response);
      document.getElementById("counter").innerHTML = response.data.num
    })
  
  }
  
  function reset(response) {
    axios.post("/reset")
    .then(function(response){
      console.log(response);
      document.getElementById("counter").innerHTML = response.data.num
    })
  }
  
  
  document.getElementById("increment").addEventListener("click", increment)
  
  document.getElementById("decrement").addEventListener("click", decrement)
  
  document.getElementById("reset").addEventListener("click", reset)