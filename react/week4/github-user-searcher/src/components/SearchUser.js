import React, { useState, useEffect, createContext } from "react";
import UserList from "./UserList";
import SearchInput from "./SearchInput";

export const UserContext = createContext();
function SearchUser() {                //Parent
  const [username, setUsername] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${inputvalue}`,
    {
      headers: { Authorization: "Basic " + btoa("pugthenid:7eT28vVSfD") }
    })
      .then(res => res.json())
      .then(data => {
        setUsername(data.items);
        setLoading(!loading);
      })
      .catch(err => {
        setError("error");
      });
  }, [inputvalue]);
  return (
    <>
      <UserContext.Provider
        value={{ username, inputvalue, setInputValue, loading, error }}
      >
        <SearchInput />
        <UserList />
      </UserContext.Provider>
    </>
  );
}

export default SearchUser;








































/*import React, { useState,useEffect } from 'react'

function SearchUser() {

  const [username, setUsername] = useState([])
  const [inputvalue, setInputValue] = useState('')
  const [loading, setLoading] = useState(true);
  const[error,setError]=useState('')
  
  
  /*const GetUserNames = (querie) => {
    return (
      fetch(`https://api.github.com/search/users?q=${querie}`)
        .then(res => res.json())
    )  
  } */
 
  /*useEffect(() => {
  /* GetUserNames(inputvalue)*/
  /*fetch(`https://api.github.com/search/users?q=${inputvalue}`)
  .then(res => res.json())
          .then(data => {
            setUsername(data.items);
            setLoading(!loading);
          })
          .catch(err => {
            setError("error") ;
          });
      },[inputvalue])

  
      
  return (
    <>
      
        <input
          type="text"
          value={inputvalue}
        onChange={event => setInputValue(event.target.value)}
        placeholder="Search for user"
        required
      />
      <ul>
        {loading ? "loading...." :   
          username === undefined ? "No results" :
            username.map(item => <li key={item.id}>{item.login}</li>)}
      </ul>
</>
        
  )
  

}

export default SearchUser*/
