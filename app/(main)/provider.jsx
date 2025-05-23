import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {AppSidebar} from './dashboard/_components/AppSidebar'
import WelcomeBoard from './dashboard/_components/WelcomeBoard'

const DashBoardProvider = ({children}) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar/>
        <div className='w-full p-3' >
          <SidebarTrigger className='mb-2 cursor-pointer' />
          <WelcomeBoard/>
          {children}        
        </div>
      </SidebarProvider>        
    </div>
  )
}

export default DashBoardProvider