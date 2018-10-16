import React, {Component} from 'react';
import '../App.css';
// import Api from '../utils';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            symptoms: [] 
        }
    }

    componentDidMount() {
        let self = this;
        fetch('/api/symptoms', {
            method: 'GET'
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            self.setState({symptoms: data});
        })
    }

    render(){
        return (
            <div>
                <div className='card'>
                    <div className='symptoms'>
                        <h1>What Symptoms are you feeling?</h1>
                        {this.state.symptoms.map(symptoms =>
                        <span key={symptoms.id}>
                            <button className = 'btn btn-primary'>{symptoms.symptom}</button>
                        </span>
                        )}
                    </div>
                </div>

                <div className='card'>
                    <div>
                        <h1>Diagnosis</h1>
                        <p>Result will be pulled from Database here</p>
                    </div>
                </div>
            </div>
        )
    }


}

// const Home = () => 
//     <div>
//         <div className='card'>
//             <div className='symptoms'>
//                 <h1>Symptoms</h1>
//             </div>
//         </div>
//         <div className='card'>
//             <div>
//                 <h1>Diagnosis</h1>
//                 <p>Result will be pulled from Database here</p>
//             </div>
        
//         </div>
//     </div>


export default Home;