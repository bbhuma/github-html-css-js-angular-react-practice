
        function openTab(evt, tabName) {
            if (evt.currentTarget.classList.contains("disabled")) return;

            let tabcontent = document.getElementsByClassName("tab-content");
            for (let i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            let tablinks = document.getElementsByClassName("tab-link");
            for (let i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }

            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.classList.add("active");
        }

        function submitForm1(event) {
            event.preventDefault();
            const name = document.getElementById("name1").value;
            const mobile = document.getElementById("mobile1").value;
            const email = document.getElementById("email1").value;
            const hobbies = document.getElementById("hobbies1").value;

            const form1Details = `
                <h3>Form 1 Details:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Hobbies:</strong> ${hobbies}</p>
            `;

            document.getElementById("form1Details").innerHTML = form1Details;

            document.getElementById("form1").style.display = "none";
            document.getElementsByClassName("tab-link")[0].classList.add("disabled");
            document.getElementsByClassName("tab-link")[0].disabled = true;
            document.getElementsByClassName("tab-link")[1].classList.remove("disabled");
            document.getElementsByClassName("tab-link")[1].disabled = false;
            document.getElementsByClassName("tab-link")[1].click();
        }

        function submitForm2(event) {
            event.preventDefault();
            const favGames = document.getElementById("favGames").value;
            const favHobbies = document.getElementById("favHobbies").value;
            const favInterests = document.getElementById("favInterests").value;
            const favMovies = document.getElementById("favMovies").value;

            const form2Details = `
                <h3>Form 2 Details:</h3>
                <p><strong>Favorite Games:</strong> ${favGames}</p>
                <p><strong>Favorite Hobbies:</strong> ${favHobbies}</p>
                <p><strong>Favorite Interests:</strong> ${favInterests}</p>
                <p><strong>Favorite Movies:</strong> ${favMovies}</p>
            `;

            const combinedDetails = document.getElementById("form1Details").innerHTML + form2Details;
            document.getElementById("combinedDetails").innerHTML = combinedDetails;

            document.getElementById("form2Content").style.display = "none";
            document.getElementById("allDetails").style.display = "block";
        }

        function resetForms() {
            document.getElementById("form1Content").reset();
            document.getElementById("form2Content").reset();
            document.getElementById("form1").style.display = "block";
            document.getElementById("form2Content").style.display = "block";
            document.getElementById("allDetails").style.display = "none";
            document.getElementById("form1Details").innerHTML = "";
            document.getElementById("combinedDetails").innerHTML = "";

            document.getElementsByClassName("tab-link")[0].classList.remove("disabled");
            document.getElementsByClassName("tab-link")[0].disabled = false;
            document.getElementsByClassName("tab-link")[1].classList.add("disabled");
            document.getElementsByClassName("tab-link")[1].disabled = true;
            document.getElementsByClassName("tab-link")[0].click();
        }

        // Set the default open tab
        document.addEventListener('DOMContentLoaded', (event) => {
            document.getElementsByClassName('tab-link')[0].click();
        });
