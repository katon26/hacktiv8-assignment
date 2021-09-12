function TampilkanData()
{
    var x = document.getElementById("form-profil") ;
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

function FormValidate()
{
    var validate_letter = /^[a-zA-Z\s]*$/;
    var validate_number = /^[0-9]*$/;
    var validate_email = /[\w]+@[a-z.]+/;
    
    var name = document.getElementById("name").value
    console.log(validate_letter.test(name))

    var role = document.getElementById("role").value
    console.log(validate_letter.test(role))

    var avail = document.getElementById("avail").value
    console.log(validate_letter.test(avail))

    var age = document.getElementById("age").value
    console.log(validate_number.test(age))

    var location = document.getElementById("location").value
    console.log(validate_letter.test(location))

    var experience = document.getElementById("experience").value
    console.log(validate_number.test(experience))

    var email = document.getElementById("email").value
    console.log(validate_email.test(email))

    name = validate_letter.test(name)
    role  = validate_letter.test(role)
    avail = validate_letter.test(avail)
    age = validate_number.test(age)
    location = validate_letter.test(location)
    experience = validate_number.test(experience)
    email = validate_email.test(email)

    if (name == true) {
        if (role == true) {
            if (avail == true) {
                if (age == true) {
                    if (location == true) {
                        if (experience == true) {
                            if (email == true) {
                                alert("Success! Your data has been saved");
                                SimpanForm();
                            } else {
                                alert("Please enter a valid email address");
                            }
                        } else {
                            alert("Please enter a valid format for experience");
                        }
                    } else {
                        alert("Please enter a valid format for location");
                    }
                } else {
                    alert("Please enter a valid age");
                }
            } else {
                alert("Please enter a valid format for availability");
            }
        } else {
            alert("Role format must be a letter");
        }
    } else {
        alert("Name must be a letter");
    }
}