import {createBot, createFlow, MemoryDB, createProvider, addKeyword} from '@bot-whatsapp/bot'

import {BaileysProvider, handleCtx} from '@bot-whatsapp/provider-baileys'




const flowBienvenida = addKeyword('Hola').addAnswer('Buenas Tardes')


const main = async ()=>{


    const provider = createProvider(BaileysProvider)

    provider.initHttpServer(3002)
    provider.http?.server.post( '/send-message', handleCtx(async(bot, req, res)=>{

        const body= req.body
        const message =body.message
        const mediaURL = body.mediaURL

    await bot.sendMessage('573017173175', message,{ media:mediaURL})

res.end('esto es del server polka')
    }))



   

await createBot({

    flow: createFlow([flowBienvenida]),
database: new MemoryDB(),

provider

})

}

main()