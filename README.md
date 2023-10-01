# bookApi-CURD-Operation
This is an api for managing books with MongoDB.

## Book model
` title:{type:String,required:true},`    
` isbn:{type:String,required:true},`  
` desc:{type:String},`  
` genre:{type:String,required:true},`  
` author:{type:String,required:true},`  
` pages:{type:Number}`

### To create book
` Post request ` on ` /api/books/ `

### To get book
` Get request ` on ` /api/books/ `

### To get a specific book
` Get request ` on ` /api/books/:id `

### To delete a book
` Delete request ` on ` /api/books/:id `

### To update book
` Put request ` on ` /api/books/:id `
