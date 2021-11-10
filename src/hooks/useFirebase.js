import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";

//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.replace('/');
                const newUser = { email, displayNmar: name }
                setuser(newUser);
                //save user to database
                saveUser(email, name, 'POST');
                //send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                setAuthError('');
            })
            .catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage);

            })
            .finally(() => setIsLoading(false));

    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
        ;
    }
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                //save user to database
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination);

                setAuthError('');
            }).catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }
    //observe user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                setuser(user);
                getIdToken(user)
                    .then(idToken => {
                        console.log(idToken);
                        setToken(idToken);
                    })

            } else {
                // User is signed out
                // ...
                setuser('');
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    useEffect(() => {
        fetch(`https://lit-forest-68710.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user.email]);

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));

    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://lit-forest-68710.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    return {
        user,
        admin,
        token,
        registerUser,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;