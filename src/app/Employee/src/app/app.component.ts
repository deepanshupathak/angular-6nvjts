import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee';
  id1: any;
  name1: any;
  sal1: any;
  dept1: any;
  flag: boolean = false;
  flag2: boolean=false;
  array: any[]=[]
    idu:any;
    nameu:any;
     salu:any;
     deptu:any;
     errorId:any;
     errorName:any;
     errorSal:any;
     errorDept:any;
  public add() {
    //alert(this.id1 + " " + this.name1 + " " + this.sal1 + " " + this.dept1);
    if(this.add1==true)
    {
      if(this.id1==null)
      {
        alert("Please enter the Id");
        return 0;
      }
     else if(this.name1==null)
      {
        alert("Please enter the Name");
        return 0;
      }
     else if(this.sal1==null)
      {
        alert("Please enter the Salary");
        return 0;
      }
      else if(this.dept1==null)
      {
        alert("Please enter the Department");
        return 0;
      }
      else
      {
    let obj = new Object();
    obj["id1"] = this.id1;
    obj["name1"] = this.name1;
    obj["sal1"] = this.sal1;
    obj["dept1"] = this.dept1;
    this.array.push(obj);
      }
  }
  }
  v:any;
  j:any;
  public update(event)
  { 
    console.log(event);
    this.flag2=true;
    this.empidn=event;
    
    for(var i=0;i<this.array.length;i++)
    { 
      if(this.array[i].id1==event)
      {
        this.j=i;
        break;
      }
    }
  }
  public empidn:any;
    public delete(id)
    {
      
      for(var i=0;i<this.array.length;i++)
      {
        if(this.array[i].id1==id)

        {
          this.array.splice(i,1);
          
        }
      }

    }
    //

  public add2(empid)
  {
    if(this.empidn==null)
      {
        alert("Please enter the Id");
        return 0;
      }
     else if(this.nameu==null)
      {
        alert("Please enter the Name");
        return 0;
      }
     else if(this.salu==null)
      {
        alert("Please enter the Salary");
        return 0;
      }
      else if(this.deptu==null)
      {
        alert("Please enter the Department");
        return 0;
      }
      else
      {
    let obj = new Object();
    obj["id1"] = this.empidn;
    obj["name1"] = this.nameu;
    obj["sal1"] = this.salu;
    obj["dept1"] = this.deptu;
    this.array.splice(this.j,1);
    this.array.push(obj);
    this.flag2=false;
    }
  }

  constructor(private http:HttpClient)
  {
    http.get('./assets/data.json').pipe().subscribe((data:any)=>{this.array=data;})
  }

  sortid:boolean=false;
  sortname:boolean=false;
  sortsal:boolean=false;
  sortdept:boolean=false;
  sortData(data)
  {
    if(data=="id")
    {
      if(this.sortid)
      {
        this.array.sort((n1,n2)=>n1.id1-n2.id1);
        this.sortid=false;
      }
      else
      {
        this.array.sort((n1,n2)=>n2.id1-n1.id1);
        this.sortid=true;
      }
    }
  else if(data=="name")
    {
      if(this.sortname)
      {
        this.array.sort((n1,n2)=>n1.name1.localeCompare(n2.name1));
        this.sortname=false;
      }
      else
      {
        this.array.sort((n1,n2)=>n2.name1.localeCompare(n1.name1));
        this.sortname =true;
      }
    }
    else if(data=="sal")
    {
      if(this.sortsal)
      {
        this.array.sort((n1,n2)=>n1.sal1-n2.sal1);
        this.sortsal=false;
      }
      else
      {
        this.array.sort((n1,n2)=>n2.sal1-n1.sal1);
        this.sortsal =true;
      }
    }
    
    else
    {
      if(this.sortdept)
      {
        this.array.sort((n1,n2)=>n1.dept1.localeCompare(n2.dept1));
        this.sortdept=false;
      }
      else
      {
        this.array.sort((n1,n2)=>n2.dept1.localeCompare(n1.dept1));
        this.sortdept =true;
      }
    }
    
  }
  public add1:boolean=false;
  a()
  {
    this.add1=true;
  }
}