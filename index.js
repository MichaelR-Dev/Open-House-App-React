var thisUser = {username: "DensityMVR", dob: "07/20/99", email: "kmedrang@gmail.com", fullname: "Michael Reynolds", userProfilePic: "https://pbs.twimg.com/profile_images/897124006389702656/Fe4Gy7Ig_400x400.jpg"};
var doc = document;

var userDataFields = {userPic: doc.getElementById("profilePic"), userName: doc.getElementById("profileUsername")};
var logoutButton = doc.getElementById("logout");

logoutButton.onclick = () => {location = 'file:///C:/Users/kmedr/OneDrive/Desktop/OpenHouse%20Project/login.html'};





function setProfileData(pic, username){
    doc.getElementById("profilePic").setAttribute("src", pic);
    doc.getElementById("profileUsername").innerHTML = `@${username}`;
    doc.getElementById("ProfileLeftPanel").onclick = () =>{location = `https://www.twitter.com/${username}`};
}

setProfileData(thisUser.userProfilePic, thisUser.username);