import { io } from 'socket.io-client'

const socket = io('http://13.250.194.200:9000')

export default socket