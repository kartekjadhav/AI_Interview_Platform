'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { SidebarOptions } from "@/services/Constants"
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const path = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className='flex items-center' > 
        <Image src={'/logo.png'} width={150} height={20} alt="logo" className="rounded-lg" />
        <Link  href={'/dashboard/createInterview'}>
          <Button className="mt-2 w-full cursor-pointer">
            <Plus/>  Create New Interview
          </Button>
        </Link>
      </SidebarHeader>
      <SidebarContent>
       <SidebarGroup>
          <SidebarMenu className='p-3'>
            {SidebarOptions.map((option, index) => (
              <SidebarMenuItem key={index} className='mt-3'>
                <SidebarMenuButton asChild className='w-full' >
                  <Link href={option.path} className={`flex items-center gap-3 ${path === option.path ? "bg-blue-200":""} `}>
                    <option.icon width={30} height={30} />
                    <span className={`font-medium text-lg ${path === option.path ? "text-blue-800":""}`} >{option.name}</span>
                  </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            ))}
          </SidebarMenu>
       </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
