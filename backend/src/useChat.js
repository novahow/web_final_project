import { useState, useEffect } from 'react'
import { useQuery, useMutation, useLazyQuery} from '@apollo/client'
import {
  USERS_QUERY,
  CREATE_USER_MUTATION,
  USERS_SUBSCRIPTION
} from './graphql'
// import { w3cwebsocket as W3CWebSocket } from 'websocket'

// const client = new W3CWebSocket('ws://localhost:4000')
//const client = new WebSocket('ws://localhost:4000')

const useChat = () => {
  const {loading, data, subscribeToMore} = useQuery(USERS_QUERY)
  //console.log(data)
  const [ creatUser ] = useMutation(CREATE_USER_MUTATION)
  const [ allUsers, setAllUsers] = useState([])
  //const [users, setUsers] = useState([])

  
  useEffect(() => {
    if(data){
      //console.log('aaa')
      //console.log(data.users)
      //console.log('bbb')
      setAllUsers(data.users)
    }
  }, [data])
  useEffect(() => {
    subscribeToMore({
      document: USERS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if(!subscriptionData.data) return prev
        const newAllUsers = subscriptionData.data.user.data
        return {
          ...prev,
          users: [...prev.users, newAllUsers]
        }
      }
    })
  }, [subscribeToMore])
  
  
  const getUsers = async (reqdepartment) => {
    //console.log(allUsers.filter(({department})=>department === reqdepartment))
    return allUsers.filter(({department})=>department === reqdepartment)
  }

  const addUser = (user) => {
    const user_created = creatUser({
      variables: {
        name: user.name,
        age: user.age,
        department: user.department,
        FB: user.FB,
        IG: user.IG,
        birthday: user.birthday,
        photo: user.photo,
      }
    })
    return user_created
  }
  return {
    getUsers,
    addUser,
  }
}

export default useChat

