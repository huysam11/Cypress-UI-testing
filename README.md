# CypressTesting On [saucedemo.com](https://www.saucedemo.com
Created 6 test cases 
1. Test Case: Verify if standard user/problem user can add and remove items
> Preconditions: User is logged in as a standard user or a problem user.
- Steps:
- Navigate to the product page.
- Click on the "Add to Cart" button for a specific item.
- Verify that the item is added to the user's cart.
- Click on the "Remove" or "Delete" button for the item.
> Verify that the item is removed from the user's cart.

2. Test Case: Verify if standard user can login, add an item, and check out successfully
> Preconditions: User is not logged in as a standard user.
- Steps:
- Navigate to the login page.
- Enter valid credentials for a standard user.
- Click on the "Login" button.
- Verify that the user is successfully logged in.
- Navigate to the product page.
- Click on the "Add to Cart" button for a specific item.
- Verify that the item is added to the user's cart.
- Proceed to the checkout page.
> Verify that the checkout process is successful.
3. Test Case: Verify if error messages display correctly when users login with wrong credentials or a locked user

> Preconditions: User is on the login page.
- Steps:
- Enter invalid credentials for a user (either wrong username/password or locked user).
- Click on the "Login" button.
> Verify that the appropriate error message is displayed indicating incorrect credentials or a locked user.

4. Test Case: Verify if users can log in and log out successfully

> Preconditions: User is not logged in.
- Steps:
- Navigate to the login page.
- Enter valid credentials for a user.
- Click on the "Login" button.
- Verify that the user is successfully logged in.
- Click on the "Logout" button or navigate to the logout page.
> Verify that the user is successfully logged out.

5. Test Case: Verify if clicking on Title or Image loads the product page properly

> Preconditions: User is on the home page or a product listing page.
- Steps:
- Locate a product title or image on the page.
- Click on the product title or image.
> Verify that the product page is loaded successfully with the relevant details.

6. Test Case: Verify if social icons are clickable and lead to the correct URLs

> Preconditions: User is on a page where social icons are displayed.
- Steps:
- Locate the social icons (e.g., Facebook, Twitter, Instagram).
- Click on each social icon.
> Verify that the respective social media page or website is opened in a new tab and the correct URL is loaded.

Overall results: 
![image](https://github.com/huysam11/CypressTesting/assets/99052999/b4331497-cf97-41c8-8851-c43fbaeaad1c)
 
 Description:
- Executed these test cases manually and confirmed that case 1 failed because users were not able to click add or remove on certain items
- In this case as QA, we should report this issue with evidences and expected behavior to developers and fix.
