// use a phone number to authenticate a user unqiue to the app
// this is a one time use code type beat

// user must have a phone number to sign up


// user gets text code each time they log in, or withdraw money

// only 1 user can have 1 phone number

// success message that user has been logged in

import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async () => {
        await createUserWithEmailAndPassword(auth, email, password)

        return (
            <div>
                <input
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={signUp}>Sign Up</button>
            </div>
        );
    }
};
