import { object, string,number } from "yup";


//file size schema
export function checkIfFileAreTooBig(files?:[File]):boolean{
  let valid=true;
  if(files){
    files.map(file=>{
      const size=file.size/1024/1024
      if(size>10){
        valid=false;
      }
    })
  }
  return valid;
}
//file type schema
export function checkIfFilesAreCorrectType(files?:[File]):boolean{
  let valid=true;
  if(files){
    files.map(file=>{
      if(!['image/jpeg', 'image/png'].includes(file.type)){
        valid=false;
      }
    })
  }
  return valid;
}
export const loginSchema = object().shape({
  username: string()
    .required("Username is Required")
    .min(4, "Username length must be at least 4")
    .matches(/^[aA0-zZ9\s]+$/, "Only alphabets are allowed for username"),
  password: string().min(6, "Password Length must be at least 6"),
});

export const registrationSchema = object().shape({
  username: string()
    .required("Username is Required")
    .min(4, "Username length must be at least 4")
    .matches(/^[aA0-zZ9\s]+$/, "Only alphabets are allowed for username"),
  email: string().required("Email is required").email("Email is not valid"),
  password: string()
    .required("Password is required")
    .min(6, "Password Length must be at least 6"),
  repassword: string()
    .required("Password is required")
    .min(6, "Password Length must be at least 6"),
});

export const uploadSchema =()=>object().shape({
  movie_title: string()
  .min(5,"movie title minimum 5 characters")
  .max(200,"movie title maximum 200 characters"),
  movie_poster: string()
  .required("movie poster required")
  // .test('is-correct-file','VALIDATION_FIELD_FILE_BIG',checkIfFileAreTooBig)
  ,
  movie_length : number()
  .min(30,"minimum length of the movie 30")
  .max(180,"maximum length of the movie 180"),
  movie_genre: string()
  .min(3,"genre length minimum 3"),
  movie_trailer: string()
  .required("movie trailer is required")

  // .test('is-correct-file','VALIDATION_FIELD_FILE_BIG',checkIfFileAreTooBig)
  ,
  movie_desc:string()
  .min(10,"movie description length must be 10 characters")
  .max(2000,"movie description length must be 2000 characters")
});

