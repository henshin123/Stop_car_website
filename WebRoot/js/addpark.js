function load(msg)
{
	if(msg!=null)
	{
		if(msg==0)
		{
			alert("修改失败")	
		}
		else
		{
			alert("修改成功")
		}
	}
}
function lookpark(parkid,path)
{
	with(document.forms[0])
	{
		action=path+"/e1001.html?ca001="+parkid;
		submit();
	}
}