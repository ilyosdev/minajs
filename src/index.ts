import { Sync } from "./models/Sync"
import { User } from "./models/User"

// const user = new User({
// 	name: "Ilyos",
// 	age: 1
// })

// // user.set({name: "Ali"})
// // user.set({age: 44})

// user.save()


const user = new User({})
user.events.on('click', ()=>{
	console.log('asd')
})
user.events.trigger('click')
