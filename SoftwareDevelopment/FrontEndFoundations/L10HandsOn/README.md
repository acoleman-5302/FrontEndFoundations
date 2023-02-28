# My Website
The goal of this website is to show some of the skills I gained in the FrontEnd Foundations course. I applied knowledge of Bootstrap, AJAX, jquery, CSS, and javaScript. I have intentionally set this up so that I could modify it as my career grows. Below I will explain some functionaility of the website, and how I approached some problems.

---

## HTML / Bootstrap
The website is sectioned into top and bottom. The top half is in the div with a header-container class. The bottom half is in the body-container class. And then I have an additional footer class for the sticky footer. I used these to design the direct child divs, and thier position. I have listed them below, so you may see the website and understand each section.

**Header-Container**

- &emsp;Information
    -  &emsp;&emsp;Name
    - &emsp;&emsp;Icons
- &emsp;Skills
- &emsp;Image


**Body-Container**

- &emsp;Paragraph
- &emsp;Button

**Footer-Container**

............................................................................................................

<ins>Icons</ins>

The icons div holds the 4 icons under my name. These change in size when hovered over, and direct users to my profiles when clicked on. This required css and jQuery toggling.

<ins>Skills</ins>

A list of my Tech-related skills. I used bootstrap to design it.

<ins>Image</ins>

An image of me.

<ins>Paragraph</ins>

A small biography of myself. This was added to portray understanding of how to manipulate the sticky footer, if a page height goes beyond the footer.

<ins>Button</ins>

This grabs information from an API and loads it into a dropdown button. Each option in the drop down shows my repository names, and has a link to the related repository. If I were to create a new repo, it's name and link would automatically load onto this buttons drowdown list.

---

## CSS

My css file is organized like so:
1. All Icons
2. Header-container items 
3. Body-container-items
4. Footer styling


---
## JavaScript
The arrow function is used for switching css styles based on if user is hovering over the icons.

The jQuery function is accessing JSON objects through an API link for my gitHub repositories. It iterates through each object and finds each repos name, and a link to that repo. This function then creates a new element and appends it to its parent div in the HTML file with a corresponding bootstrap class. This just means that if a new repo is created on my gitHub, then it will appear as a new JSON object in the API, and will then be added to the html file through this function.

---
## What I would have done differently?

Primarily, I would like to expand on this project, and apply my knowledge on media queries, or bootstrap break-points to adjust the layout based on the users screen size. If you were to load this page on an iPhone, it would be a disaster, and this website on anything larger than a tablet is far too spaced out. 

Secondly, I learned that it is never too early to design the web-page. I think when I began, the idea of adding bootstrap was too complex, so I saved it for last, but then I ended up having more classes than nesecary, or having to re-define some classes in html, javaScript and css. I think this would have been resolved had I started with design, and then added functionalty upon that, using already existing classes.
