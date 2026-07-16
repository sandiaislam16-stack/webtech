let totalCount = 0;

function registration() {

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const sid = document.getElementById("sid").value;
    const email = document.getElementById("email").value;
    const credit = document.getElementById("credit").value;
    const department = document.getElementById("department").value;

    let hasFnameError = true;
    let hasLnameError = true;
    let hasSidError = true;
    let hasEmailError = true;
    let hasCreditError = true;
    let hasDepartmentError = true;

    // First Name Validation
    if (!fname) {
        document.getElementById("fnameError").innerHTML =
            "First Name can not be empty";
        document.getElementById("fnameError").style.color = "red";
        hasFnameError = true;
    }
    else {
        document.getElementById("fnameError").innerHTML = "";
        hasFnameError = false;
    }

    // Last Name Validation
    if (!lname) {
        document.getElementById("lnameError").innerHTML =
            "Last Name can not be empty";
        document.getElementById("lnameError").style.color = "red";
        hasLnameError = true;
    }
    else {
        document.getElementById("lnameError").innerHTML = "";
        hasLnameError = false;
    }

    // Student ID Validation
    if (!sid) {
        document.getElementById("sidError").innerHTML =
            "Student ID is required";
        document.getElementById("sidError").style.color = "red";
        hasSidError = true;
    }
    else if (!sid.includes("-")) {
        document.getElementById("sidError").innerHTML =
            "Student ID must contain -";
        document.getElementById("sidError").style.color = "red";
        hasSidError = true;
    }
    else {
        document.getElementById("sidError").innerHTML = "";
        hasSidError = false;
    }

    // Email Validation
    if (!email) {
        document.getElementById("emailError").innerHTML =
            "Email is required";
        document.getElementById("emailError").style.color = "red";
        hasEmailError = true;
    }
    else if (!email.includes("@student.aiub.edu")) {
        document.getElementById("emailError").innerHTML =
            "Email must contain @student.aiub.edu";
        document.getElementById("emailError").style.color = "red";
        hasEmailError = true;
    }
    else {
        document.getElementById("emailError").innerHTML = "";
        hasEmailError = false;
    }

    // Credit Validation
    if (credit == "") {
        document.getElementById("creditError").innerHTML =
            "Credit is required";
        document.getElementById("creditError").style.color = "red";
        hasCreditError = true;
    }
    else if (credit < 0 || credit >= 148) {
        document.getElementById("creditError").innerHTML =
            "Credit must be between 0 and 147";
        document.getElementById("creditError").style.color = "red";
        hasCreditError = true;
    }
    else {
        document.getElementById("creditError").innerHTML = "";
        hasCreditError = false;
    }

    // Department Validation
    if (!department) {
        document.getElementById("departmentError").innerHTML =
            "Department is required";
        document.getElementById("departmentError").style.color = "red";
        hasDepartmentError = true;
    }
    else {
        document.getElementById("departmentError").innerHTML = "";
        hasDepartmentError = false;
    }

    // Add Student into Table
    if (!hasFnameError &&
        !hasLnameError &&
        !hasSidError &&
        !hasEmailError &&
        !hasCreditError &&
        !hasDepartmentError) {

        totalCount++;

        document.getElementById("totalRegistrations").innerHTML = totalCount;

        const table = document.getElementById("studentTable");

        let row = table.insertRow(-1);

        row.insertCell(0).innerHTML = fname;
        row.insertCell(1).innerHTML = lname;
        row.insertCell(2).innerHTML = sid;
        row.insertCell(3).innerHTML = email;
        row.insertCell(4).innerHTML = credit;
        row.insertCell(5).innerHTML = department;

    
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("sid").value = "";
        document.getElementById("email").value = "";
        document.getElementById("credit").value = "";
        document.getElementById("department").value = "";
    }

    return false;
}