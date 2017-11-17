1.
2.
3.
4-7.class(Student){
    constructor(firstName,lastName,studentId){
        this.firstName=this.firstname
        this.lastName=this.lastName
        this.studentId=this.studentId
    }
    class(Assignment) extends student{
        constructor(studentId, URL,type){
            super(studentId)
            this.URL=this.URL
            this.type=this.type
        }
    }
    class(Gradebook){
        constructor(code,courseId,Instructor,Assignments){
            this.code=this.code
            this.courseId=this.courseId
            this.instructor=this.instructor
            this.assignments=this.assignments
      }
        addAssignments(assignments){
            return assignments.map((student)=>{
            })
        }
        getAverage(students){
          let count=0
          let stopper=students.length
          return students.reduce(function(acc,curr){
          count++
          if(count=== stopper){
              return (acc+curr)/stopper
          }
          if(count !== stopper){
              return (acc+curr)
          }
          })
    }
  }

8. Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side.

9. sessions consist of three phases:
The client establishes a TCP connection (or the appropriate connection if the transport layer is not TCP).
The client sends its request, and waits for the answer.
The server processes the request, sending back its answer, providing a status code and appropriate data.
A session token is a unique identifier that is generated and sent from a server to a client to identify the current interaction session. The client usually stores and sends the token as an HTTP cookie and/or sends it as a parameter in GET or POST queries.

10. The two things I have learned are what let and var mean and also the difference between them. And I also learned rest parameters
let- declares a block scope local variable, optionally initializing it to a value.
var- declares a variable, optionally initializing it to a value.
Rest parameters- represent an indefinite number of arguments as an array.