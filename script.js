<script>
        function checkPattern() {
            var userInput = document.getElementById("password").value; 
            var pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/; 

            if (pattern.test(userInput)) {
                alert("login successful");
            } else {
                alert("login failed"); 
                return false; 
            }
        }
    </script>