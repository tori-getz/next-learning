
import type { NormalColors } from "@nextui-org/react"

export interface IUser {
    name: string
    color: NormalColors
}

export interface IMessage {
    user: IUser,
    text: string
}
