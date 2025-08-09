# Community Event Registration Form

This project is a registration form for a community event, built using HTML, CSS, and JavaScript with real-time form validation.

---

## Form Fields & Validation Rules

| Field         | Required | Validation Rules                              | Error Message Examples                                             |
| ------------- | -------- | --------------------------------------------- | ------------------------------------------------------------------ |
| Full Name     | Yes      | Minimum 3 characters                          | "Name is required.", "Name must be at least 3 characters."         |
| Email         | Yes      | Valid email format (regex)                    | "Email is required.", "Enter a valid email address."               |
| Phone Number  | Yes      | Exactly 10 digits                             | "Phone number is required.", "Phone number must be 10 digits."     |
| Age           | Yes      | Number, minimum 18                            | "Age is required.", "Age must be 18 or older."                     |
| Date of Birth | Yes      | Valid date, must correspond to age ≥ 18 years | "Date of birth is required.", "You must be at least 18 years old." |

---

## Features

- Real-time validation with instant feedback on each input field.
- Error messages displayed below inputs with red text.
- Invalid fields are highlighted with a red border.
- Form submission blocked if any validation fails.
- Alerts to confirm successful registration or to fix errors.
- Responsive design (via your CSS) to ensure good user experience.

---

## How to Use

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Fill out the form fields.
4. The form will validate your input as you type.
5. Click "Register" to submit — only succeeds if all validations pass.

---

## Deployment

You can deploy this form easily with GitHub Pages:

- Push your code to a GitHub repository.
- Go to the repo settings -> Pages.
- Select the branch (usually `main`) and the root directory.
- Save and wait for the URL.
- Share the live link with your community.

---

## Notes

- Phone number validation assumes a 10-digit number without country code or formatting.
- Age and DOB validations are linked — either field alone can be used to verify age, but both must be consistent.
- You can customize the CSS classes for error styling in your `style2.css`.

---
