# node mailer test

## 1 | Description

Testing the ability to send emails with Node.js.

## 2 | Roadmap

### 2.1 Minimal Viable Product (MVP)

**Status:** _Complete_

- [x] Send an email
  - [x] Email sent using existing email services
    - [x] Zoho compatible
    - [x] Gmail compatible
    - [x] Outlook compatible
  - [x] Simple html body
  - [x] Customizable Subject, sender name, etc.

### 2.2 Next Updates

**Status:** Not started

- [ ] Use send email triggered with POST request instead of automatic
  - [ ] Take in email
  - [ ] Send email to email posted
- [ ] Email template instead of HTML body

## 3 | Getting Started

### 3.1 Installing

Clone or download the repository.

Install dependencies in the root.

```
npm install || yarn
```

Create a `variables.env` file in the project root, add your credentials
there as seen in config.js.

```
// config.js
MAIL_USER = <your email>
MAIL_PASS = <email password>
COMPANY_NAME = <your name/company name>
```

In `./services/mail.service.js` specify the mailing client you are using to send
emails. Options include:
- `'gmail'`
- `'outlook'`
- `'zoho'`

### 3.2 Running

In the root, run `npm run dev` or `npm run start`.
