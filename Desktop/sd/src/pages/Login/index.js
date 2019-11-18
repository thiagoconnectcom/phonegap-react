import React, {Component} from 'react';
import './style.css';

export default class Login extends Component{
    Login(){
        this.props.history.push('Home');
    }
    render(){
        return(
            <div className='background'>
                <div className="container">
                    <div class="card">
                        <div class="card-body">
                            <div class="input-group mb-3">
                                <input type="text" className="input" placeholder="Email" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="password" className="input" placeholder="Senha" />
                            </div>
                            <div>
                                <button onClick={()=> this.Login()} className="button">Logar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}