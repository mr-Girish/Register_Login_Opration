const express=require('express');

const app=express();
const mysql=require('mysql');
const bodyParser=require('body-parser')
const cors=require('cors');

const db=mysql.createPool({
    host:'localhost',
    user:'girish', 
    password:'12345',
    database:'project'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


//DISPLALY DATA
app.get("/register",(req,res)=>{
    const sqlSelect="SELECT * FROM user";
    db.query(sqlSelect,(err,result)=>{
        // console.log(result);
        res.send(result);
    });
});


//FOR REGISTER USER
app.post("/register",(req,res)=>{

    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const status=req.body.status;
    db.query("INSERT INTO user (name,email,password,status) VALUES(?,?,?,1)",
    [name,email,password],
    (err,result)=>{
        console.log(err);
        res.send("successfull y submited");
    }
    );
});



//FOR LOGIN
app.post("/login",(req,res)=>{
 

    const email=req.body.email;
    const password=req.body.password;
    const status=req.body.status;
    // console.log(res.status);



    //TO dheck conditon
    db.query("SELECT * FROM  user WHERE email=? AND password = ?  ",
    [email,password],
    (err,result)=>{
        console.log(result[0].status);

        if(err)
         {
            res.send({err:err})
        }
        else{
            if(result.length>0 && result[0].status==1)
            {
                    
                    db.query("UPDATE user SET status=0");
                     res.send(result); 
                   
            }
            else if(result[0].status==0)
            {
                res.send(result);

            }
            
            else{
                res.send({message:"No user aviallabe by this name"});
            }
        }
    }
    );


});



app.put("/update",(req,res)=>{
    const u_password=req.body.password;
    const user_id=req.body.id;


    console.log("the id of use is:"+user_id);
    console.log("password is:"+u_password);

    const sqlUpdate="UPDATE  user SET password=? WHERE id=?";

    db.query(sqlUpdate,[u_password,user_id],(err,result)=>{
        if(err) {
            console.log(err);
        }
        else{
            // console.log(result);
            // alert(id)
        res.send(result);
        }
        
    });
});


app.listen(3001,()=>{
    console.log("runner onport 3001");
});