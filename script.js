function placeInfo(imgSource, placeName, placeDesc) {
    let info = document.getElementById("place-display");
    let contents = document.getElementById("contents");
    contents.style.overflow = "hidden";
    document.addEventListener('mousemove', displayFollowCursor);
    info.style.left = event.clientX + 5 + "px";
    info.style.top = event.clientY + 5 + "px";
    info.innerHTML = "<div id = 'wrapper'><img id = 'imgid' src = '" + imgSource + "'>" + "<p id='place'>" + placeName + "</p>" + "<p id='details'>" + placeDesc + "</p></div>";
}
    
function displayFollowCursor() {
    let info = document.getElementById('place-display');
    info.style.left = event.clientX + 8 + "px";
    info.style.top = event.clientY + -150 + "px";
}
    
function removeSceneryBox() {
    let info = document.getElementById("place-display");
    let contents = document.getElementById("contents");
    info.removeAttribute('style');
    contents.removeAttribute('style');
    document.removeEventListener('mousemove', displayFollowCursor);
    info.removeChild(info.childNodes[0]);
}