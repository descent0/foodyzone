import {React} from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0,


        }
    }
render(){
    return (
        <>
        <h1>This is class based component</h1>
        <h1>Name: {this.prop}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1,
            })
        }}></button>
        </>
    );
}
}
export default Profile;