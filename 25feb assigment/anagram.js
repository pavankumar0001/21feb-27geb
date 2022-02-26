function Anagram_Checker(s1,s2)
{
    a1=s1.length;
    a2=s2.length;
    if(a1 !== a2)
    {
        document.write("not an anagram")
        return;
    }
    let str1=s1.split("").sort().join("");
    let str2=s2.split("").sort().join("");
    if(str1===str2)
    {
        document.write("it is an anagram");

    }
    else{
        document.write("it is not an anagaram");
    }
}
let inp1=prompt("enter an string")
let inp2=prompt("enter second string");
let output=Anagram_Checker(inp1,inp2);