function validate()
{
var f=document.getElementById("fname");
var l=document.getElementById("lname");
var u=document.getElementById("USN");
var s=document.getElementById("sem");
var e=document.getElementById("email");
var p=document.getElementById("phone");
var a=document.getElementById("address");
var r1=document.getElementById("g1");
var r2=document.getElementById("g2");
var c1=document.getElementById("ch1");
var c2=document.getElementById("ch1");
var c3=document.getElementById("ch1");
var c4=document.getElementById("ch1");
var b=document.getElementById("branch");
var i=document.getElementById("image");
var usn=/^[1-4][a-zA-Z]{2}[0-9]{2}[a-zA-Z]{2}[0-9]{3}$/;
var sem=/^[1-8]$/;
var email=/[a-z][a-z0-9_]+@[a-z]+\.[a-z]+/;
var phone = /[0-9]{10}/;
if(f.value.length==0||l.value.length==0)
{
alert("please enter ur name");
f.focus();
return ;
}
if(u.value.length==0)
{
alert("USN field can not be empty");
u.focus();
return;
}
else
{
if(!u.value.match(usn))
{
alert("invalid USN");
u.focus();
return;
}
}
if(s.value.length==0)
{
alert("Semester field can not be empty");
s.focus();
return;
}
else
{
if(!s.value.match(sem))
{
alert("invalid Semester");
e.focus();
return;
}
}
if(e.value.length==0)
{
alert("Email ID field can not be empty");
e.focus();
return;
}
else
{
if(!e.value.match(email))
{
alert("invalid emailid");
e.focus();
return;
}
}
if(p.value.length==0)
{
alert("phone no field can not be empty");
p.focus();
return;
}
else
{
if(!p.value.match(phone))
{
alert("invalid phone no");
p.focus();
return;
}
}
if(a.value.length==0)
{
alert("please enter address");
a.focus();
return ;
}
if(r1.checked==false&&r2.checked==false)
{
alert("please select the gender");
return;
}
if(b.selectedIndex == 0)
{
alert("Please choose your branch");
return ;
}
if(i.value.length==0)
{
alert("please upload your photo");
i.focus();
return ;
}
alert("Student Registrtion Form submitted Successfully");
}
