import React, { useState } from 'react'
import { IComponent } from '../../global/types'
import { RoleContext } from './rolecontext'

function RoleContextProvider({children} : IComponent) {
    const [role, setrole] = useState('admin')
  return (
    <RoleContext.Provider value={{role, setRole : setrole}}>
        {children}
    </RoleContext.Provider>
  )
}

export default RoleContextProvider