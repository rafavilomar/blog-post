import React from 'react'
import { useEffect } from 'react'
import {connect}  from 'react-redux'
import { getUsers } from '../actions/users_actions'

const Post = ({match, users}) => {

  const checkUsers = () => {
    //!users 
  }

  useEffect(() => {
    //!users 
  }, [])

  return(
    <div>
      {match.params.key}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users_reducers.users
  }
}

const mapDispatchToProps = {
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)