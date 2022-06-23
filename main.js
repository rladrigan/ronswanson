
function ronWisdom(){
fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      let arr = data
      document.querySelector('h2').innerText = arr[0]
    })
    .catch(err => {
        console.log(`error ${err}`)
    }); 
}
ronWisdom()