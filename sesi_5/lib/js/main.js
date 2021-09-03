function TampilkanData()
{
    var x = document.getElementById("form") ;
    if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

    // document.getElementById("form").scrollIntoView();
}

function SimpanForm()
{
    var name = document.getElementById("name").value
    var role = document.getElementById("role").value
    var avail = document.getElementById("avail").value
    var age = document.getElementById("age").value
    var location = document.getElementById("location").value
    var experience = document.getElementById("experience").value
    var email = document.getElementById("email").value

    document.getElementById("profile_name").innerHTML = name
    document.getElementById("profile_role").innerHTML = role
    document.getElementById("profile_avail").innerHTML = avail
    document.getElementById("profile_age").innerHTML = age
    document.getElementById("profile_location").innerHTML = location
    document.getElementById("profile_experience").innerHTML = experience
    document.getElementById("profile_email").innerHTML = email


    window.scroll({top: 0})
}