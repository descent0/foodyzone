import { render } from "@testing-library/react"
import NavBar from "../NavBar"

//test cases in react
test("Logo Should Load On Rendering Header",()=>{
   const header= render(<NavBar/>);
   console.log(header);
})