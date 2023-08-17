// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Why so JavaScript and Java have similar name?",
    answer: "JavaScript’s syntax is loosely based on Java’s",
    options: [
      
       "JavaScript is a stripped-down version of Java",
       "JavaScript’s syntax is loosely based on Java’s",
       "They both originated on the island of Java",
       "None of the above"
    ]
  },
    {
    numb: 2,
    question: "Which type of JavaScript language is ___",
    answer: "Object-Based",
    options: [
      

      "Object-Oriented",
      "Object-Based",
      "Assembly-language",
      "High-level"
    ]
  },
    {
    numb: 3,
    question: "______ JavaScript is also called client-side JavaScript.?",
    answer: "Navigator",
    options: [
      
      "Microsoft",
      "Navigator",
      "LiveWire",
      "Native"
    ]
  },
    {
    numb: 4,
    question: "What are variables used for in JavaScript Programs?",
    answer: "Storing numbers, dates, or other values",
    options: [
      
   "Storing numbers, dates, or other values",
   "Varying randomly",
   "Causing high-school algebra flashbacks",
   "None of the above"
    ]
  },
    {
    numb: 5,
    question: "__________ JavaScript is also called server-side JavaScript.",
    answer: "LiveWire",
    options: [

    "Microsoft",
   "Navigator",
    "LiveWire",
    "Native"
    ]
  },
  {
    numb: 6,
    question: "Which of the following can’t be done with client-side JavaScript?",
    answer: "Storing the form’s contents to a database file on the server",
    options: [
     "Validating a form",
      "Sending a form’s contents by email",
      "Storing the form’s contents to a database file on the server",
      "None of the above"
    ]
  },
  {
    numb: 7,
    question: " _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    answer: "Client-side",
    options: [
     
       "Client-side",
       "Server-side",
       "Local",
       "Native"
    ]
  },
  {
    numb: 8,
    question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    answer: "The User’s machine running a Web browser",
    options: [
      
     "The User’s machine running a Web browser",
     "The Web server",
      "A central machine deep within Netscape’s corporate offices",
      "None of the above"
    ]
  },
  {
    numb: 9,
    question: "  Which of the following are capabilities of functions in JavaScript?",
    answer: "Accept parameters",
    options: [
    
       "Return a value",
       "Accept parameters and Return a value",
       "Accept parameters",
       "None of the above"
    ]
  },
  {
    numb: 10,
    question: "In JavaScript, Window.prompt() method return true or false value ?",
    answer: "False",
    options: [    
      "False",
      "True"
    ]
  },
  {
    numb: 11,
    question: "What is mean by “this” keyword in javascript?",
    answer: "It refers current object",
    options: [
      
 "It refers current object",
 "It referes previous object",
 "It is variable which contains value",
 "None of the above"
    ]
  },
  {
    numb: 12,
    question: "Choose the client-side JavaScript object:",
    answer: "FileUpLoad",
    options: [
     
       "Database",
       "Cursor",
       "FileUpLoad",
       "Client"
       
    ]
  },
  {
    numb: 13,
    question: "Which best explains getSelection()?",
    answer: "Returns the value of cursor-selected text",
    options: [
     "Returns the VALUE of a selected OPTION.",  
     "Returns document.URL of the window in focus.",
     "Returns the value of cursor-selected text",
     "Returns the VALUE of a checked radio input."
    ]
  },
  {
    numb: 14,
    question: "Scripting language are",
    answer: "High Level Programming language",
    options: [
      
       "High Level Programming language",
       "Assembly Level programming language",
       "Machine level programming language"
    ]
  },
  {
    numb: 15,
    question: "Is it possible to nest functions in JavaScript?",
    answer: "True",
    options: [
      
       "True",
       "False"
    ]
  },
  {
    numb: 16,
    question: "The syntax of close method for document object is ______________",
    answer: "Close()",
    options: [
      
       "Close(doC.",
       "Close(object)",
       "Close(val)",
       "Close()"
    ]
  },
  {
    numb: 17,
    question: "The syntax of capture events method for document object is ______________",
    answer: "eXtensible Markup Language",
    options: [
      
       "captureEvents()",
       "captureEvents(args eventType)",
       "captureEvents(eventType)",
       "captureEvents(eventVal)"
    ]
  },
  {
    numb: 18,
    question: "The syntax of a blur method in a button object is ______________?",
    answer: "Blur()",
    options: [
     "Blur()",
     "Blur(contrast)",
     "Blur(value)",
     "Blur(depth)"
    ]
  },
  {
    numb: 19,
    question: " To open a dialog box each time an error occurs, which of the following is added to prefs.js?",
    answer: "user_pref(“javascript.classic.error_alerts”, true);",
    options: [
     "user_pref(“javascript.classic.error_alerts”, true);",

     "user_pref(“javascript.classic.error_alerts “, false);",
     "user_pref(“javascript.console.open_on_error “, true);",
     "user_pref(“javascript.console.open_on_error “, false);"
    ]
  },
  {
    numb: 20,
    question: "The JavaScript exception is available to the Java code as an instance of __________?",
    answer: "netscape.javascript.JSException",
    options: [
      
   "netscape.javascript.JSObject",
   "netscape.javascript.JSException",
   "netscape.plugin.JSException",
   "None of the above"
    ]
  },
  {
    numb: 21,
    question: "A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript .",
    answer: "JavaClass",
    options: [
      
         "JavaArray",
         "JavaClass",
         "JavaObject",
         "JavaPackage"
    ]
  },
  {
    numb: 22,
    question: "_________ is a wrapped Java array, accessed from within JavaScript code.",
    answer: "JavaArray",
    options: [
      
   "JavaArray",
   "JavaClass",
   "JavaObject",
   "JavaPackage"
    ]
  },
  {
    numb: 23,
    question: "_______ class provides an interface for invoking JavaScript methods and examining JavaScript properties.",
    answer: "JSObject",
    options: [
      
   "ScriptObject",
   "JSObject",
   "JavaObject",
   "Jobject"
    ]
  },
  {
    numb: 24,
    question: "When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ___________",
    answer: "JSObject",
    options: [
      
       "ScriptObject",
       "JSObject",
       "JavaObject",
       "Jobject"
    ]
  },
  {
    numb: 25,
    question: "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
    answer: "a wrapper",
    options: [
      
   "a wrapper",
   "a link",
   "a cursor",
   "a form"
    ]
  },
  {
    numb: 26,
    question: " To enable data tainting, the end user sets the _________ environment variable.",
    answer: "NS_ENABLE_TAINT",
    options: [
     
         "ENABLE_TAINT",
         "MS_ENABLE_TAINT",
         "NS_ENABLE_TAINT",
         "ENABLE_TAINT_NS"
    ]
  },
  {
    numb: 27,
    question: "____________ is the tainted property of a window object.",
    answer: "Defaultstatus",
    options: [
      
         "Pathname",
         "Protocol",
         "Defaultstatus",
         "Host"
    ]
  },
  {
    numb: 28,
    question: "Which tag(s) can handle mouse events in Netscape?",
    answer: "<A>",
    options: [
      
         "<IMG>",
         "<A>",
         "<BR>",
         "None of the above",
    ]
  },
  {
    numb: 29,
    question: "To set up the window to capture all Click events, we use which of the following statement?",
    answer: "window.captureEvents(Event.CLICK);",
    options: [
      
         "window.captureEvents(Event.CLICK);",
         "window.handleEvents (Event.CLICK);",
         "window.routeEvents(Event.CLICK );",
         "window.raiseEvents(Event.CLICK );",
    ]
  },
  {
    numb: 30,
    question: "The _______ method of an Array object adds and/or removes elements from an array.",
    answer: "Splice",
    options: [
      
         "Reverse",
         "Shift",
         "Slice",
         "Splice"
    ]
  },
  {
    numb: 31,
    question: " How to create a Date object in JavaScript?",
    answer: "dateObjectName = new Date([parameters])",
    options: [
     
         "dateObjectName = new Date([parameters])",
         "dateObjectName.new Date([parameters])",
         "dateObjectName := new Date([parameters])",
       "dateObjectName Date([parameters])"
    ]
  },
  {
    numb: 32,
    question: " Which of the following is the structure of an if statement?",
    answer: "if (conditional expression is true) {then execute this code>->}",
    options: [
     
   "if (conditional expression is true) thenexecute this codeend if",
   "if (conditional expression is true)execute this codeend if",
   "if (conditional expression is true) {then execute this code>->}",
   "if (conditional expression is true) then {execute this code}"
    ]
  },
  {
    numb: 33,
    question: " Using _______ statement is how you test for a specific condition.",
    answer: "If",
    options: [
   "Select",
   "If",
   "Switch",
   "For"
    ]
  },
  {
    numb: 34,
    question: " JavaScript is interpreted by _________",
    answer: "Client",
    options: [
     
         "Client",
         "Server",
         "Object",
         "None of the above"
    ]
  },
  {
    numb: 35,
    question: " Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
    answer: "onblur",
    options: [
         "onfocus",
         "onblur",
         "onclick",
         "ondblclick"
    ]
  },
  {
    numb: 36,
    question: "The syntax of Eval is ________________",
    answer: "[objectName.]eval(string)",
    options: [
      
   "[objectName.]eval(numeriC.",
   "[objectName.]eval(string)",
   "[EvalName.]eval(string)",
   "[EvalName.]eval(numeriC."
    ]
  },
  {
    numb: 37,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  {
    numb: 38,
    question: "______method evaluates a string of JavaScript code in the context of the specified object.",
    answer: "Eval",
    options: [
      
       "Eval",
       "ParseInt",
       "ParseFloat",
       "Efloat"
    ]
  },
  {
    numb: 39,
    question: "Which of the following is not considered a JavaScript operator?",
    answer: "this",
    options: [
      
   "new",
   "this",
   "delete",
   "typeof"
    ]
  },
  {
    numb: 40,
    question: "Choose the client-side JavaScript object?",
    answer: "FileUpLoad",
    options: [    
   "Database",
   "Cursor",
   "Client",
   "FileUpLoad"
    ]
  },
  {
    numb: 41,
    question: " Choose the server-side JavaScript object?",
    answer: "File",
    options: [
     
         "FileUpLoad",
         "Function",
         "File",
         "Date"
    ]
  },
  {
    numb: 42,
    question: "Which of the following best describes JavaScript?",
    answer: "an object-oriented scripting language.",
    options: [
      
         "a low-level programming language.",
         "a scripting language precompiled in the browser.",
         "a compiled scripting language.",
         "an object-oriented scripting language."
    ]
  },
  {
    numb: 43,
    question: "JavaScript entities start with _______ and end with _________.",
    answer: "Ampersand, semicolon",
    options: [    
   "Semicolon, colon",
   "Semicolon, Ampersand",
   "Ampersand, colon",
   "Ampersand, semicolon"
    ]
  },
  {
    numb: 44,
    question: " If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
    answer: "para1.value=”New Text”;",
    options: [
     
         "“New Text”?",
         "para1.value=”New Text”;",
         "para1.firstChild.nodeValue= “New Text”;",
         "para1.nodeValue=”New Text”;"
    ]
  },
  {
    numb: 45,
    question: " What does the <noscript> tag do?",
    answer: " Enclose text to be displayed by non-JavaScript browsers.",
    options: [
     
        " Enclose text to be displayed by non-JavaScript browsers.",
         "Prevents scripts on the page from executing.",
         "Describes certain low-budget movies.",
         "None of the above"
    ]
  },
  {
    numb: 46,
    question: " Which of the following navigator object properties is the same in both Netscape and IE?",
    answer: "navigator.appCodeName",
    options: [
         "navigator.appCodeName",
         "navigator.appName",
         "navigator.appVersion",
         "None of the above"
    ]
  },
  {
    numb: 47,
    question: "Which types of image maps can be used with JavaScript?",
    answer: "eXtensible Markup Language",
    options: [
       "Server-side image maps",
       "Client-side image maps",
       "Server-side image maps and Client-side image maps",
       "None of the above",
    ]
  },
  {
    numb: 48,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  {
    numb: 49,
    question: "Inside which HTML element do we put the JavaScript?",
    answer: "<script>",
    options: [
      
         "<js>",
         "<scripting>",
         "<script>",
         "<javascript>"
    ]
  },
  {
    numb: 50,
    question: "What is the correct JavaScript syntax to write “Hello World”?",
    answer: "document.write(“Hello World”)",
    options: [
      
         "System.out.println(“Hello World”)",
         "println (“Hello World”)",
         "document.write(“Hello World”)",
         "response.write(“Hello World”)"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];