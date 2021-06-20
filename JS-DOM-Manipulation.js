<html>
    <head>
        <title>
            DOM Manipulation
        </title>
        <script>
            function buttonClick(){
                alert("Hello i am button");
                //below Line is to change the text Random Text to Anchit 
                //as we clicked on the button 
                document.getElementById("heading").innerHTML="Anchit";
            }
            function buttonClick2(){
                //storing the value and then alert it 
                var x=document.getElementById("heading").innerHTML;
                alert(x);
            }
            function inputFunction(){
                var name=document.getElementById("text1").value;
                var password=document.getElementById("text2").value;
                if(name==password) alert("Matched");
                else alert("Different");
            }
            function radiofunction(){
                var radio1=document.getElementById("radio1");
                var radio2=document.getElementById("radio2");
                if(radio1.checked==true) alert(radio1.value);
                else if(radio2.checked==true) alert(radio2.value);
                else alert("No button checked");
            }
            function selectBoxfunction(){
                var select=document.getElementById("selectbox");
                //alert("Hello");
                alert(select.options[select.selectedIndex].value);
            }
            function Stylingfunction(){
                var para=document.getElementsByTagName("p");
                para[0].style.fontSize="34";
                para[1].style.fontStyle="italic";
                para[2].style.color="red";
                para[3].style.fontWeight="Bold";
                para[4].style.backgroundColor="pink";
            }
            function classfunction(){
                var para=document.getElementsByClassName("class1");
                for(var i=0;i<para.length;i++){
                    para[i].style.color="red";
                }
            }
            function setNewImage(){
                document.getElementById("img").src="nature.jpg";
            }
            function setOldImage(){
                document.getElementById("img").src="Anchit.jpeg";
            }
        </script>
    </head>
    <body>
        <button onclick="buttonClick()">Button 1</button>
        <button onclick="buttonClick2()">Button 2</button>
        <h1 id="heading">Random Text</h1>

        <!-- writing a code to get input form users and check if  -->
        <!-- the user has given same usename and password or not -->
        <input id="text1" placeholder="username" >
        <!-- <br> -->
        <input type="password"  id="text2" placeholder="password">
        <!-- <br> -->
        <button onclick="inputFunction()">Click me</button><br>

        <!-- taking input from Radiobuttons -->
        <!-- <br> -->
        <input type="radio" name="radio" id="radio1" value="Javascript">Javascript</input>
        <!-- <br> -->
        <input type="radio" name="radio" id="radio2" value="Java">Java</input>
        <!-- <br> -->
        <button onclick="radiofunction()">Click me</button>

        <!-- Taking input from Select Box -->
        <!-- <br> -->
        <select id="selectbox">
            <option value="javascript">Javascript</option>
            <option value="java">Java</option>
            <option value="DSA">DSA</option>
        </select>
        <!-- <br> -->
        <button onclick="selectBoxfunction()">Click me</button>

        <!-- Use of getElementbyTagName -->
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
        <p>Paragraph 4</p>
        <p>Paragraph 5</p>
        <button onclick="Stylingfunction()">Click me</button> 

        <!-- Use of getElementbyClassName -->
        <p class="class1">Paragraph 1</p>
        <p>Paragraph 2</p>
        <p class="class1">Paragraph 3</p>
        <p>Paragraph 4</p>
        <p class="class1">Paragraph 5</p>
        <button onclick="classfunction()">Click me</button> 

        <!-- Mouseover and MouseOut events -->
        <br>
        <img id="img" onmouseover="setNewImage()" onmouseout="setOldImage()" src="Anchit.jpeg" width="300" height="300">

    </body>
</html>
