        function validate() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === "" || password === "") {
                alert("Username and Password fields cannot be empty");
                return false;
            }
            else if (username === "admin" || password === "password") {
                alert("Username and Password fields cannot be empty");
                return true;
            }
            else{
                alert("Invalid username or password. Please try again.");
                return false;
            }
            
        }
