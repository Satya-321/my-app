import React from 'react';
import data from "../data/data.json";
import person from '../person.svg';

export default function Resume(props) {
	fetch("https://jsonplaceholder.typicode.com/posts")
	.then(res=>res.json())
	.then(data=>console.log(data))

	let info = data.profiles[props.location.profilesData.i]
	console.log(info.basic)

	return (
        <div className="row justify-content-center">
            <div className="col-lg-3 m-2">
            <div className="card">
                <div className="card-body">
                    <img src={person} alt="profile Icon" style={{width:200}}/>
                    <h1>{info.basic.name}</h1>
                    <p>{info.basic.role}</p>
                    <p>{info.basic.phone}</p>
                    <p>{info.basic.email}</p>
                    <p>{info.basic.address}</p>
                    <h2>{info.basic.career}</h2>
                    <p>{info.basic.detail}</p>
                    <h3>{info.basic.hob}</h3>
                    <p>{info.basic.hobbies}</p>
                </div>

           </div>
           </div>
        <div className="col-lg-8 m-2">
            <div className="card">
            <div className="card-body">
                <h2>Educational Qualification:</h2>
                <p>"institute":vignan's institute of engineering for women</p>
                <p>"degree":B-tech</p>
                <p>"passoutyear":"2022"</p>
                <p>"percentage":"-"</p>

                <h2>Technical skills:</h2>
                <p>->C</p>
                <p>->C++</p>
                <p>->JAVA</p>
                <p>->PYTHON</p> 

                <h2>Achievments</h2>
                <p>Participated various Technical Events in college</p>

                <h2>Declaration</h2>
                <p>I here by declare that the above mentioned information is correct up to my Knowlwdge and 
                I bear the responsibility for the correctness of the above mentionsed particulars.</p>




            </div>
            </div>
        </div>
        </div>

		)
}