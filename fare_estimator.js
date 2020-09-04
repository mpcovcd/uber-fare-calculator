let rFare = 0
document.getElementById('car').onclick = function () {
    rFare = 1
}
document.getElementById('horse').onclick = function () {
    rFare = 2
}
document.getElementById('plane').onclick = function () {
    rFare = 3
}

document.addEventListener('submit', function(event){
    event.preventDefault()

    const rDistance = document.getElementById("rDistance").value;
    const rTime = document.getElementById("rTime").value;
    calculatedFare = (rDistance * rTime * rFare)

    let fareWidget = document.getElementsByClassName("fareWidget")[0]
    let resultsDiv = document.getElementsByClassName("resultsDiv")[0]

    resultsDiv.innerHTML = `Your estimated fare is $${calculatedFare}`
    resultsDiv.style.display = "block";
    
})