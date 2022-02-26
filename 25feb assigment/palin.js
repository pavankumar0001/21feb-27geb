function checkPalindrom(s)
{
    let newString='';
    for(let i=s.length-1;i>=0;i--)
    {
        newString+=s[i];
    }
    if(s===newString)
    {
        document.write("string is palindrome")
    }
    else{
        document.write("string is not palindrome")
        
    }


}
let input=prompt("enter string")
let output=checkPalindrom(input)
