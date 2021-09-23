function populate_List(){
    var Microsoft = ["Windows XD","Windows 7", "Windows 10"];
    var Apple = ["Macbook","Iphone", "Ipad"];
    var open_source = ["Audacity","Firefox","System 76"];
    var new_element = "<select id='second_list' onChange='Show_List();'>";
    
    if (document.Enzo_fORM.list.value == 'Microsoft')
    {
      for(var i = 0; i< Microsoft.length; i++)
      {
        new_element += "<option value='"+Microsoft[i]+"'>"+Microsoft[i]+"'></option>";
      }
      new_element += "</select>";
      document.getElementById("NewList").innerHTML=new_element
    }

    else if (document.Enzo_fORM.list.value == 'Apple')
    {

      for(var i = 0; i< Apple.length; i++)
      {
        new_element += "<option value='"+Apple[i]+"'>"+Apple[i]+"'></option>";
      }
      new_element += "</select>";
      document.getElementById("NewList").innerHTML=new_element
    }

    else if (document.Enzo_fORM.list.value == 'open_source')
    {
      for(var i = 0; i< open_source.length; i++)
      {
        new_element += "<option value='"+open_source[i]+"'>"+open_source[i]+"'></option>";
      }
      new_element += "</select>";
      document.getElementById("NewList").innerHTML=new_element
    }
    else
      document.getElementById("NewList").innerHTML="<br>"
  }
  function Show_List()
  {
    document.getElementById("NewList").innerHTML=document.getElementById("second_list").value;
  }