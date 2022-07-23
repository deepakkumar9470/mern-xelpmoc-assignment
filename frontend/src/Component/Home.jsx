import React,{useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import toast from 'react-hot-toast'

const Home = ({user}) => {
    const [value,setValue] = useState('')
    const [result,setResult] = useState('')
	const navigate = useNavigate()

    const handleLogout = () => {
		localStorage.removeItem("token");
		toast.success('Logout Successfully')
		navigate('/login')
		// window.location.reload();
	};

	const handleChange =(e) =>{
		setValue(e.target.value)
		setResult('')
	}

	
	const primeChecker = (num) =>{
		for (let i = 2; i < num; i++) {
			if(num % i === 0) return false	
		}

		return num >1

	}


	const checkPrimeNo =_=>{
		if(isNaN(value)){
			setResult('Error')
		}else{
			const res = primeChecker(parseInt(value, 10)) ? 'YES'  :'NO'
			setResult(res)
			
		}
	}


	let text = ""

	if(result === 'YES') {

		 text = `${value} is a prime no`

	}else{
		text = `${value} is not  a prime no`
	}


	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Xelpmoc App </h1>
                {!user ? 
				<>
				 <Link to="/login" className={styles.link}>
					Login
				</Link>
                <Link to="/register" className={styles.link}>
					Register
				</Link>
				</>: 
				<button className={styles.white_btn} onClick={handleLogout}>
				Logout
			</button>
				}
				
			</nav>

			<h1 className={styles.heading}>Welcome to Home</h1>
			{value && <h2 className={styles.result}> Result : {text}</h2>}

			  <div className={styles.input_div}>
				<input 
				   className={styles.input}
				   type="number" 
				   maxLength="4" 
				   required
				   value={value}
				   onChange={handleChange}
				   placeholder="Enter 4 digit no.."/>
				  <button className={styles.prime_btn} onClick={checkPrimeNo}>Click to Check</button> 
			  </div>
		</div>
	);
}

export default Home
