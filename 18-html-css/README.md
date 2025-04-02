# HTML - CSS

- HTML is the skeleton/ backbone of any web page/ app
- DOCTYPE - tells browser which version of html to render/ show (Most recent is v5)
- `html` is the most important part of the document
- what is a tag? `html` element - `<html></html>`. Element consists of tags
    - A tag in HTML is a keyword or label enclosed in angle brackets (< >) that defines elements in a web page's structure. Tags usually come in pairs, like `<p>` and `</p>`, to indicate the start and end of an element. Some tags, like `<img>`, are self-closing.

- `head` - Everything that is not visible to user

- `meta` - A `<meta>` tag in HTML provides metadata about the webpage, such as description, keywords, author, and character encoding. It helps with SEO, browser settings, and improving user experience. For example, it can specify the character set or viewport settings for responsive design.

`<meta charset="UTF-8">`
This tag specifies the character encoding for the document, ensuring that special characters (like accents or symbols) are displayed correctly. There’s no need to close the <meta> tag, as it is self-closing.

- `body` - Everything that is visible to users
    -`headings` - text elements with tags from h1 to h6
    -`p` - paragraphs
    - `strong` - bold text
    - `em` - italic text
    - `hr` - horizontal line
    - `br` - break
    -`div` -  block-level element used to group content and structure a webpage. It's often used as a container for other elements, allowing you to apply CSS styles or JavaScript functions to a specific section of the page.
        - It has no inherent styling or meaning; it simply groups content.
        - It's often used in conjunction with CSS for layout purposes.
        - It's a versatile tag that can be used for creating sections, columns, or wrappers in a webpage.

    - *** Semantic Elements ***


** Nesting: Render element inside anotehr element


## Styling
1. inline Styling: apply CSS styles right inside the element itself (in that braket)
    -fastest one
    - it can get ugly/ crowded
    - ideally you want to separate your html and css logic, it can get harder to read, maintain and change
    - overrides internal styling

2. internal styling: Styles are inside the head section
- CSS specificity: inline stiling > internal styling

##Element atributes:
- `img` - href, alt, width, height
- `a` - href, target

- `id`: unique identifier
- `class` - common class selector


MORE ABOUT META TAGS:

In the <meta> tag, you can include several other attributes to improve the website's SEO, accessibility, and functionality. Here are some common ones:

Description:
Provides a brief description of the page's content, often shown in search results.
<meta name="description" content="Your page description here.">

Author:
Specifies the author of the document.
<meta name="author" content="Author Name">

Viewport:
Helps with responsive design, controlling layout on mobile devices.
<meta name="viewport" content="width=device-width, initial-scale=1">

Robots:
Directs search engines on how to index the page (e.g., follow links or not).
<meta name="robots" content="noindex, nofollow">

Charset:
Defines the character encoding for the page (e.g., UTF-8).
<meta charset="UTF-8">

Refresh:
Automatically refreshes the page after a specified time or redirects to another URL.
<meta http-equiv="refresh" content="30"> <!-- Refresh every 30 seconds -->

Open Graph (for social media sharing):
Specifies how the page should appear when shared on social platforms like Facebook.
<meta property="og:title" content="Title of the page">
<meta property="og:image" content="image-url">

Twitter Cards (for Twitter sharing):
Similar to Open Graph but specifically for Twitter.
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:image" content="image-url">



# Day 2
## HTML tables
- Table: html element (used to display tabular data)
    - `table` - parent element
    - <tr> - table row element
    - <th> - table heading
    - <td> - table data cell

<!--Opttional elements --->
    -`thead` - group head elements
    - `tbody` - group content of table data
    - `tfoot` -  group footer content in a table
    - <td colspan="2">Footer</td> - colspan is like "merge" in excel, you tell it how many cells to merge


## HTML Forms
- `form` element
- `input` - used to take user information
- text
-  email

- <button>


