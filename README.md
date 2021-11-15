git # Zanyo Company Website

## Overview

This project is a company website for Zanyo which focuses on chemical engineering field and mainly targets industries/factories.

In the past, most of Zanyo's marketing and sales strategies are done with the "word of mouth" and with its intention to expand, 
the goal for this website is to provide a platform for both people in the same industry and for clients who are interested
in their products to know better about Zanyo's culture.



## Data Model

The application will store:

* username
* user's company name/personal name
* user's email address
* user's contact number -> mobile number
* hash for each user's password authentication
* an array of reference to the urls that user chose to "save for later" reading

An Example User:

```javascript
{
  username: "zanyo_ltd", 
  name: "Shanghai Zanyo Biotechnology Co. Ltd",
  email: "zhenquan.jin@zanyo.com",
  phone: "+86 13705077700",
  hash: ,// a password hash,
  readlist: // an array reference to the readList 
}
```

An Example List with Embedded Items:

```javascript
{
  user: // a reference to a User object
  items: [
    {url: "www.zanyo.com/article/about-zanyo"},
    {url: "www.zanyo.com/article/hilton-products"},
  ]
}
```

## [Link to Commented First Draft Schema](db.js) 

## Wireframes
/ - page about Zanyo Company

![Homepage_about](documentation/about-company.png)

/signup - page for user signup

![Signup](documentation/signup.png)

/signin - page for log in

![Signin](documentation/signin.png)

/client - page for client culture information

![client](documentation/client.png)

/articles - user saved urls for later reading articles

![articles](documentation/articles.png)

/contact - contact page

![contact](documentation/contact.png)

## Site map

![sitemap](documentation/site-map.png)

## User Stories or Use Cases

(___TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://www.mongodb.com/download-center?jmp=docs&_ga=1.47552679.1838903181.1489282706#previous)_)

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can read the company and client articles
4. as a user, I can send email through the portal
5. as a user, I can view all of my past saved readings

## Research Topics

* (5 points) Integrate user authentication
    * using passport for user authentication
    * account has been made for testing
    * see <code>cs.nyu.edu/~jversoza/ait-final/register</code> for register page
    * see <code>cs.nyu.edu/~jversoza/ait-final/login</code> for login page
* (5 points) react.js
    * used react.js as the frontend framework;
* (2 points) Use a CSS framework for my site
    * use Boostrap to create the styling for all the Pomodoro Sites
10 points total out of 8 required points


## [Link to Initial Main Project File](app.js) 

(___TODO__: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js_)

## Annotations / References Used

(___TODO__: list any tutorials/references/etc. that you've based your code off of_)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)

