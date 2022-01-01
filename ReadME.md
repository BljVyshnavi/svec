# Frontend technologies
- html
- CSS
- Javascript
- BootStrap framework
- Angular framework

# backend technologies
+ Node.js
	- express.js
 	- nodemoon
 	- cors
 	- dote
- PHP
- C#
- javascript
- PYTHON

# databases 
- MongoDb
- Mysql
- Firebase
- Postgressql
- ORACLE
- VCS or Source code management
  Distributed VCS-Git,Mecurial
  Remote VCS(central)-Github,Bitbucket

  ## git
  - git init
  - git add filename
  - git add filename1 filename2
  - git add . or git add--all
  - git status
  - git configurations (user.name and user.gmail)
  - commit data with commit message
  - Push the code into github

  # HTML5
  - hyper text markup language
  - semantic elements
      - header
	  - section
	  - article
	  - aside
	  - footer
	  - table
  - blocklevel elements
      - h1 to h6
	  - paragraph
	  - div
	  - text will strat from new line
	  - all sematic elements

  - Inline elements
      - span
	  - image
	  - a
	  - nav
	  - all form elements
	  - input
	  - text area
	  - legend
	  - sup
	  - sub
	  - nav
	    - ul
		- ol

### css
+ cascading style sheets 
+ inline CSS
+ internal CSS
+ external CSS

# syntax for css
...
selector{
	css properties
}
...
# selectors
+ simple selectors
- by element name
- grouping elements(,)
- class selector
- id selector
+ combinators
 + descendent selector( )
 + child selector(>)(styles r applicalble to only child)
 + adjacent selector(+)(styles r applicable to adjacent lines)
 + general sibling selector(~)(after div 4 all styles r applied)
+ pseudo class selector(:)
+ pseudo element selector(::)
+ attribute selector

# box model
- margin
- border
- padding
  - padding: 10px(all sides)
  - padding: 10px 30px (t&b,l&r)
  - padding: 10px 30px 50px (t,l&r,b)
  - padding: 10px 30px 50px 4px(t,r,b,l)
- width
- rem=16px

# respnsive web design 

# flex box
- display property
- flex
  + flex-wrap
  + justify-content
  + flex-directiom
  + flex-flow
- none
- inline
- block
- inline-block
- position
 - static
 - relative
 - absolute
 - fixed 
 - sticky
- allign content
- allign items
- allign self

# media quries
- extra small(mobiles)
   - max width:600px
- small(large phones,tabs)
   - min-width:600px
   - 768px
- medium(small laptops)
  - min-width:768px
- large(large laptops)
  - min-width:992px
- extra large(big screens)
  - min-width:1200px
... 
@media only screen(min-width:320px) and (max-width:500px)
  {
  css code
}
 ...
# boostrap 4.6 framework
- it is a css framework
- module(collection of functions and classes)
- package(collection of modules)
- library(collection of packages)
- framework(collection of libraries)
-  module -->package --> library -->framework

# types of boostrap modes
- offline
- online 
  - CDN links
- background colour- colour -bg
- text-white
+ margin in boostrap
    - 0 --> 0rem
    - 1 --> 0.25rem (4px)
    - 2 --> 0.5rem (8px)
    - 3 --> 1rem (12px)
    - 4 --> 1.5rem (24px)
    - 5 --> 3rem (48px)  
+ ml-5 (margin left)
+ m-(margin all directions)
+ mr-(margin right)
+ mt-(margin top)
+  mb-(margin bottom)
+ padding(padding-left --> pl-5)
+ colors
  - primary
  - secondary
  - info
  - success
  - warning
  - danger
  - light
  - dark
  - white
+ we can use color classes for
- buttons(btn btn-primary)
- text(text-white)
- background(bg-secondary)
- alerts(alert alert-primary)

# task3:
- nav bar with responsive

# grid system
- syntax: col-sm-12
- sm(small devices)
- md(medium )
- lg(large devices)
- xl(extra large)

#  javascript
- 1995 'brenden eich' introduced javascript(ES-262)
- javascript loosely touple and dynamic lang
- text based programming language and we can run client-side and server-side(node.js) for dynamic web applications
- ECMA-script (ES-6).some functions are:
  - let & const
  - map
  - arrow
  - classes
+ datatypes
- Number
- BibInt(2^53-1)
- string
- boolean
- undefined
- null
- object
- arrays

+ variables 
- var,let,const
- scope
  - function level --> var
  - block level --> let & const
- redefined  --> let,var
- redeclare  --> var only
+ typeof()
+ Object
...
{
  name="vaish"
}...
+ Array
# alerts
 - to generate notification 
  - alert
  - prompt(to take input from user)
  - confirm

- console statements
  - console.log()
  - console.info()
  - console.warn()
  - console.error()

+ spread operator
- to change array elements from 1 aray to other
...
    ...var name
...

+ rest parameter
  + to handle function parameter
  ...
    ...paramter
  ...

+ destructuring of array & objects

+ functions
- function with func name
...
function demo(x,y){
  return x+y
}
demo()
...
- Anonymous function
... 
let demo= function(x,y)
{
  return x+y
}
...
let demo= (x,y) => {
    return x*y
}
console.log(demo(3,4))
...
- for in
  - to get no.of elements
- for of
  - to get elements
- for each -->(ES-5)
- map -->(ES-6)

# DOM
- Document Object Model
- document
- history
- window
- navigator(pwa-progressive web applications)
+ DOM methods
  - `getElementById()(to call only id)` 
  - `querySelector(to call any ele)`
  - `nertext `
  - `textcontent`
  - `append`
  - `appendchild`
  - `innerHTML`
  - `setAttribute()`
  - `classList`
  - `style`
  - `src`

 - (difference b/w innertext and textcontent?)

 # JSON
 - javascript object notation
 - to exchange info between application and server
 ...
 {
  "name":"vaish",
  "age":"18",
  "phno":1234
 }
 ...
+ Ajax call or promises(fetch API) or axios

# frontend with React JS
- It is a library
- it followa component based architecture
  - Function
  - class
  - higher order
- it provides Virtual DOM
- it provides jsx(javascript and XML)
- unidirectional data flow
- SinglePage applications

+ props
- to pass data from 1 component to other
- they are immutable

+ unionbank(Functional)
  - andhra bank(Functional)
  - corportion banK(Class)

+ States
- in react to maintain info we will use states
- we can maintain class states in class components(before react16.8 )
- to take state react ,try to create constructor above render and inside of class component.
...
constructor(){
  super();
  this.states={

  }
}...
- to update the state info in class component by`setState()`
- to update the info in class component we have to use these
  - `componentWillRecieveProps()`
  - `componentWillMount()`
  - `componentWillUnmount()`
  - `componentWillUpdate()`
  - `componentDidMount()`etc
# Hooks
- from rect16.8 Hooks are introduced
- Parent --> child1 --> child2
- `useState()`
- `useEffect()`
- `useMemo()`
- `useRef()`
- `useContext()` 


+ Project environment setup
    - [downloadNODE.JS](https://nodejs.org/en/download/)
    - install node js and check version of `node`and`npm`
      - `node -v`
      - `npm -v`
    - `webpack` and `babel`
    - `create-react-app`
      - `npm install ccreate-react-app`(node package manager)
       - `create-react-app projeactname`
      - `npx create-react-app projectname`(node package runner)
+ Index.html
+ Index.js
+ App.js
  + Indexpage
  - nav.js
  - body.js
  - footer.js

  + Home.js
  - nav
  - body
  - footer

  + Login.js
  - register
  - about
  - contact

# Event handling & Form handling
- `onchange`
- `onsubmi`
- `preventdefault`

# routing
- to navigate from 1 component to another
  - install react-router-dom package buy using
  - `npm install react-router-dom`
  -  `BrowserRouter`
  - `Routes`
  - `Route`
  - `path`
  - `element`
  
# reference links
- [flaticon](https:/flaticon);[svgicons]
- [colorcodes]
- [contrastchecker]

# html elements
- audio
- video
- canvas
- progress
- meter
- datalist
- select


