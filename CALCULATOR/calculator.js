function display(num)
{
    result.value+=num
    // if(result.value==)
    if(result.value.length==10)
    {
        alert("maximum character reached")
    }
}
function evaluation()
{
    p="="
    exp=result.value;
    op=eval(exp);
    // output.value=op;

    if(result.value!=0)
    {
       output.value="="+op;
    }
}
function clearNum()
{
    result.value=" "
    output.value=0;
}
function back()
{
    result.value=result.value.slice(0,-1)
}