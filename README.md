# Inqom Case Study
### A. Goal 
Automate using Playwright with JavasScript the following scenario, in e2e context :

1. Visit http://www.welcometothejungle.com/fr/me/settings/account
2. Click on "Se connecter" button
3. Fill "Email" and "Mot de Passe" inputs
4. Click on "Se connecter" button
5. Upload a "Photo de profil" file
6. Click on "Enregistrer" button

### B. Specification
From the test scenario, the use case provided by the product owner could be divided in two parts:
#### 1st Part :
While being on the account page as logged out of the "Welcome to the Jungle" website, the user should be able to 
connect by 
filling the email/password and by clicking on the connect button. The user should land on the account webpage (logged 
in).

Verify :
- The user land on the account page as logged in.

#### 2nd Part :
While being on the account page as logged in, user should be able to upload a profile picture whether one is already 
uploaded or not. 

Verify :
- A new profile picture is uploaded and correspond to the desired one.
- The top right picture correspond to the new uploaded picture.

### C. Execute Test
Execute following command from the `case-study` folder :
```
npx playwright test
```
Or to visualize test execution :
```
npx playwright test --headed 
```

### D. Notes

- Credentials could be saved in some sort of configuration file for multiple use of different test scenarios. In case 
  of more critical credentials, they should be set as environment variable in the CI tool and in a conf file listed 
  in .gitignore for local testing. 
- To improve maintenance and reusability, we could use POM (page object model) structure. Methods that interact with 
  the webpage are described in an object representing a specific page.
- To assert the upload picture, I choose a visual comparison method that allow us to verify the uploaded picture and 
  the top right icon at the same time.