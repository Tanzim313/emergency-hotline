# emergency-hotline

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:

getElementById():bring an element with specific id.
getElementsByClassName(): brings all elements same class(HTMLCollection).
querySelector(): brings the first element that matches a css selector.
querySelectorAll(): brings all elements that match a css selector as a NodeList.

2.How do you create and insert a new element into the DOM?
ans:  
 document.createElement() to create new element.then insert dom use appendChild().

3.What is Event Bubbling and how does it work?
ans:
Event Bubbling means when an event on a child element
like:click and step by step parent-grandparent-document

4.What is Event Delegation in JavaScript? Why is it useful?

ans:

Event Delegation means attaching  an event listener to a parent element so that events triggered on it child elements can also be handle.

do not need to add separate listeners to multiple child elements.lighter and efficient

5.What is the difference between preventDefault() and stopPropagation() methods?

ans: preventDefault() : default browser action off and
stopPropagation() : stop event bubbling or propagation.
