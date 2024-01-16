import  bs58 from "bs58";
import * as fs from 'fs';

const env = ''
const bytes = bs58.decode(env)

const Uint8bytes =bs58.decode(env);

const bytelist : number[]=[]
for(let byte of Uint8bytes ){

   bytelist.push(byte);
}

fs.writeFile("./newid_.json",JSON.stringify(bytelist),  (err)  =>  {

    if(err){
        console.error(err);
        
        return;
    };
    console.log("File Created");
});
