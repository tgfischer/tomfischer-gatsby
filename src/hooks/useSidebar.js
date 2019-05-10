import { useContext } from "react"

import { SidebarContext } from "../contexts/SidebarProvider"

export default () => {
  const [isOpen, setState] = useContext(SidebarContext)
  return [isOpen, () => setState(true), () => setState(false)]
}
