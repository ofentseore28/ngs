import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import background from './Nyc.jpg';

const rootElement = document.getElementById('root')
/*const Message = ({message}) =>{
return(
<div>
{message
? (
    <div>{message}</div>
)
:(
    <div>Wagafa there's NO message </div>
)
}
</div>)}

const tick = () =>{
    const time = new Date().toLocaleTimeString()
    const element = (
        <div>
            It is 
            <input value={time}/>
            <input value ={time}/>
        </div>
    )
    ReactDOM.render(element,rootElement)
}
ReactDOM.render(<Message message={null}/>,rootElement)
tick()
setInterval(tick,1000)*/

/*function Box ({style,className ='',...rest}) {
    return(
        <div
         className={`box ${className}`}
         style={{padding:20,...style}}
         {...rest}   
        />
    )
    
}
const element = (
    <div>
        <Box className="box--small" 
        style = {{backgroundColor:'red'}}>
            Manxane Box
        </Box>
        <Box className="box-medium" 
        style = {{backgroundColor:'green'}}>
            Manxane Box
        </Box>
        <Box className="box--large" 
        style = {{backgroundColor:'blue'}}>
            Manxane Box
        </Box>

        <p>
            There have been {state.eventCount} events.
        </p>
        <button onFocus={increment}></button>
    </div>
)
ReactDOM.render(element,rootElement)
class App extends React.Component{
    constructor(props){
        super(props)

        this.textInput = React.createRef();
        this.state ={
            value:''
        }
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.setState({value: this.textInput.current.value})
    };

    render(){
        return(
            <div>
                <h1>React Ref - createRef</h1>
                <h3>value: {this.state.value}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.textInput}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}*/

/*class App extends React.Component{
    constructor(props){
        super(props);
    
    this.username = React.createRef();
    this.password = React.createRef();
    this.state={
        errors:[]
    };    
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        const username = this.username.current.value;
        const password =this.password.current.value;
        const errors =this.handleValidation(username,password);
        
        if(errors.length > 0){
            this.setState({errors});
            return;
        }
    };

    handleValidation = (username,password)=>{
        const errors = [];
        if (username.length ===0){
            errors.push("Username cannot be empty");
        }
    if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }
    return errors;
    };

    render(){
        const {errors} = this.state;
        return(
            <div>
                <h1>React Ref Example</h1>
                <form onSubmit={this.handleSubmit}> 
                    {errors.map(error =><p key={error}>
                    {error}
                    </p>)}
                    
                    <div>
                        <label>Username:</label>
                        <input type="text" ref={this.username}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="text" ref={this.password}/>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>

            </div>
        )
    }

}

ReactDOM.render(<App/>,rootElement);
*/
class App extends React.Component{
       render() {
        return(
            <div>
                <Nav/>
                <Header/>
                <SideNav/>
                <Main/>
                <Footer/>
            </div>
        )
    
}
}

class Nav extends React.Component{
    render(){
        return(
            <nav className = "navbar navbar-expand-lg bg-dark">
                <a className ="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
};

class Header extends React.Component{
    render(){
        return(
            <div className="header main-hearder"> 
                <h1>G Services</h1>
            </div>
           
        )
    }
};

class SideNav extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            divWidth:{
                width: 200
            }
        };
    }
    
    render(){
        
        const style={
        width: this.state.divWidth
    }

        return(
            <div>
                <div id="mySidenav" className="sidenav">
                    <button href="javascript:void(0)" className="closebtn" onClick={this.setState.divWidth}>&times;</button>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
                <span style="font-size:30px;cursor:pointer" onClick={ this.setState.divWidth}>&#9776; open</span>
            </div>
        )
    }
}



//Background image for the main section for page
var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`
  };

class Main extends React.Component{
   
    render(){
        return(
<main> 
        <section id="section-1">
            <h1>Section 1</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
        </section>
        <section id="section-2">
            <h1>Section 2</h1>
            <p>Ratione nulla nam, ipsa dignissimos corrupti veniam nostrum, laudantium asperiores sequi numquam placeat velit voluptate in praesentium non labore unde incidunt laborum maxime quae magni.</p>
        </section>
        <section id="section-3">
            <h1>Section 3</h1>
            <p>Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat officia corrupti, aperiam fugit facere debitis repudiandae praesentium sapiente inventore repellendus, nemo commodi alias!</p>
        </section>
        <section id="section-4">
            <h1>Section 4</h1>
            <p>Aliquid aliquam magnam ducimus similique obcaecati, unde exercitationem laborum incidunt, quas in ipsum inventore nostrum? Blanditiis optio cumque earum iste odio! Alias sint accusamus repudiandae.</p>
        </section>
        <section id="section-5">
            <h1>Section 5</h1>
            <p>Officia ipsum fugit iure eaque quisquam error tempore earum enim illum, delectus officiis incidunt corrupti aliquid nam quas perspiciatis eveniet doloremque quod labore? Doloremque, ipsum?</p>
        </section>
        <section id="section-6">
            <h1>Section 6</h1>
            <p>Aperiam repellat dignissimos fugiat possimus esse, suscipit neque nisi libero alias obcaecati ipsam, porro illo corrupti nostrum reprehenderit unde, illum in laudantium impedit. Modi, veniam.</p>
        </section>
        <section id="section-7">
            <h1>Section 7</h1>
            <p>Cum asperiores temporibus itaque consequatur quod inventore, quia quis explicabo dicta esse minus voluptatem reiciendis eveniet animi, necessitatibus illum dolorem doloremque repellat placeat, dolores eaque.</p>
        </section>
        <section id="section-8">
            <h1>Section 8</h1>
            <p>Optio qui, omnis itaque rerum iusto molestiae necessitatibus deleniti quod tenetur id perspiciatis voluptatum dolorum quisquam eius ipsum non architecto labore! Distinctio, tenetur. Officiis, necessitatibus?</p>
        </section>
        <section id="section-9">
            <h1>Section 9</h1>
            <p>Rem iste iure blanditiis excepturi esse nisi corrupti sequi, illo, laborum quo quis quaerat assumenda perspiciatis quod fuga vel laudantium doloribus architecto tempora omnis earum!</p>
        </section>
</main>

        )
    }
}

class Footer extends React.Component{

    render(){
        return(
            <div className="footer" >
                <footer>
                    &copy;2018 Footer
                </footer>
            </div>
        )

    }


}


ReactDOM.render(<App/>,rootElement)
