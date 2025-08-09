// Wait until DOM loads
document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector(".registration-form");

	// Inputs
	const nameInput = document.getElementById("nameInput");
	const emailInput = document.querySelector(".emailDiv input");
	const phoneInput = document.querySelector(".phoneDiv input");
	const ageInput = document.getElementById("ageInput");
	const dobInput = document.getElementById("DOBInput");

	// Error spans
	const nameError = nameInput.nextElementSibling;
	const emailError = document.getElementById("emailError");
	const phoneError = document.getElementById("phoneError");
	const ageError = document.getElementById("ageError");
	const dobError = document.getElementById("DOBError");

	// Regex for email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Helper to set error message
	function setError(input, errorSpan, message) {
		errorSpan.textContent = message;
		input.classList.add("error-border");
	}

	// Helper to clear error
	function clearError(input, errorSpan) {
		errorSpan.textContent = "";
		input.classList.remove("error-border");
	}

	// Validate Name
	function validateName() {
		const name = nameInput.value.trim();
		if (!name) {
			setError(nameInput, nameError, "Name is required.");
			return false;
		} else if (name.length < 3) {
			setError(nameInput, nameError, "Name must be at least 3 characters.");
			return false;
		}
		clearError(nameInput, nameError);
		return true;
	}

	// Validate Email
	function validateEmail() {
		const email = emailInput.value.trim();
		if (!email) {
			setError(emailInput, emailError, "Email is required.");
			return false;
		} else if (!emailRegex.test(email)) {
			setError(emailInput, emailError, "Enter a valid email address.");
			return false;
		}
		clearError(emailInput, emailError);
		return true;
	}

	// Validate Phone
	function validatePhone() {
		const phone = phoneInput.value.trim();
		if (!phone) {
			setError(phoneInput, phoneError, "Phone number is required.");
			return false;
		} else if (!/^\d{10}$/.test(phone)) {
			setError(phoneInput, phoneError, "Phone number must be 10 digits.");
			return false;
		}
		clearError(phoneInput, phoneError);
		return true;
	}

	// Validate Age (must be >=18)
	function validateAge() {
		const age = parseInt(ageInput.value, 10);
		if (!ageInput.value) {
			setError(ageInput, ageError, "Age is required.");
			return false;
		} else if (isNaN(age) || age < 18) {
			setError(ageInput, ageError, "Age must be 18 or older.");
			return false;
		}
		clearError(ageInput, ageError);
		return true;
	}

	// Validate DOB (must be a valid date and person must be 18+)
	function validateDOB() {
		if (!dobInput.value) {
			setError(dobInput, dobError, "Date of birth is required.");
			return false;
		}
		const dob = new Date(dobInput.value);
		const today = new Date();
		const ageDifMs = today - dob;
		const ageDate = new Date(ageDifMs);
		const age = Math.abs(ageDate.getUTCFullYear() - 1970);

		if (age < 18) {
			setError(dobInput, dobError, "You must be at least 18 years old.");
			return false;
		}
		clearError(dobInput, dobError);
		return true;
	}

	// Real-time validation listeners
	nameInput.addEventListener("input", validateName);
	emailInput.addEventListener("input", validateEmail);
	phoneInput.addEventListener("input", validatePhone);
	ageInput.addEventListener("input", validateAge);
	dobInput.addEventListener("input", validateDOB);

	// Form submit validation
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const isNameValid = validateName();
		const isEmailValid = validateEmail();
		const isPhoneValid = validatePhone();
		const isAgeValid = validateAge();
		const isDOBValid = validateDOB();

		if (
			isNameValid &&
			isEmailValid &&
			isPhoneValid &&
			isAgeValid &&
			isDOBValid
		) {
			alert("Registration successful!");
			form.reset();
		} else {
			alert("Please fix the errors in the form before submitting.");
		}
	});
});
