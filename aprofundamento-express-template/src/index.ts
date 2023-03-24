import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts } from './database'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

app.get("/accounts/:id", (req: Request, res: Response) => {
    const {id} = req.params // const id = req.params.id 
    const result = accounts.find((accounts) => accounts.id === id)   // const result = accounts.filter((account) => { return account.id === id}) 
    res.status(200).send(result)
})

app.delete("/accounts/:id", (req: Request, res: Response) => {
    const {id} = req.params
    const accountResult = accounts.findIndex((account) => {
        return account.id === id
    })

    accountResult < 0 ? res.status(404).send("Esse item não existe.") : 
    (accounts.splice(accountResult, 1),res.status(200).send("Item deletado com sucesso."))

    /*
    if(accountResult < 0) {
        res.status(404).send("Esse item não existe.")
    } else {
        accounts. splice(accountResult, 1)
        res.status(200).send("Item deletado com sucesso.") 
    }*/      
})

app.put("/accounts/:id", (req: Request, res: Response) => {
    const {id} = req.params
    const newId = req.body.id
    
    const {ownerName, balance, type} = req.body
    /*const newOwnerName = req.body.ownerName
    const newBalance = req.body.balance
    const newType = req.body.type*/

    const accountFind = accounts.find((account) => {
        return account.id === id
    })

    if (accountFind) {
        accountFind.id = newId || accountFind.id
        accountFind.ownerName = ownerName || accountFind.ownerName // = newOwnerName || accountFind.ownerName
        accountFind.balance = balance || accountFind.balance // = newBalance || accountFind.balance
        accountFind.type = type || accountFind.type // = newType || accountFind.type
    }
    res.status(200).send("Atualização realizada com sucesso!")
})

