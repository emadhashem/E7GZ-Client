import { createContext } from "react";
interface IRoleContext {
    role: string,
    setRole: (role: string) => void
}
export const RoleContext = createContext<IRoleContext>({
    role: 'user',
    setRole: () => { }
})