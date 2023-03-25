import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts } from './database'
import { ACCOUNT_TYPE } from './types'
import { runInNewContext } from 'vm'

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
    try {
        const id = req.params.id
        const result = accounts.find((account) => account.id === id)

        if (!result) {
            res.status(404)
            throw new Error("Conta não encontrada. Verifique a 'id'.")
        }
        res.status(200).send(result)

    } catch (err) {
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(err.message)
    }
})

app.delete("/accounts/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id

        if (id[0] !== 'a'){
            res.status(400)
            throw new Error("'Id' inválido. Deve iniciar com a letra 'a'.")
        }

        const accountIndex = accounts.findIndex((account) => account.id === id)

        if (accountIndex >= 0) {
            accounts.splice(accountIndex, 1)
            res.status(200).send("Item deletado com sucesso")
        } else {
            res.status(404)
            throw new Error("Conta não encontrada. Verifique o 'id'.")
        }
 
    } catch(err){
        if (res.statusCode === 200){
            res.status(500)
        }
        res.send(err.message)
    }
})

app.put("/accounts/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const newId = req.body.id as string | undefined
        const newOwnerName = req.body.ownerName as string | undefined
        const newBalance = req.body.balance as number | undefined
        const newType = req.body.type as ACCOUNT_TYPE | undefined

        const account = accounts.find((account) => account.id === id)

        if (newBalance !== undefined) {
            if (typeof newBalance !== "number") {
                res.status(400)
                throw new Error("Balance deve ser um número.")
            }

            if (newBalance < 0) {
                res.status(400)
                throw new Error("Balance deve ser maior ou igual a 0.")
            }
        }

        if (newType !== undefined) {
            if (newType !== "Ouro" && newType !== "Platina" && newType !== "Black") {
                res.status(400)
                throw new Error("Type deve ser uma categoria válida.")
            }
        }

        if (newId !== undefined) {
            if (typeof newId !== "string") {
                res.status(400)
                throw new Error("'Id' inválido. Deve ser uma string.")
            }

            if (newId[0] !== 'a') {
                res.status(400)
                throw new Error("'Id' inválido. Deve iniciar com a letra 'a'.")
            }
        }

        if (newOwnerName !== undefined) {
            if (newOwnerName.length < 2) {
                res.status(400)
                throw new Error("Favor digitar um nome válido.")
            }
        }


        if (account) {
            account.id = newId || account.id
            account.ownerName = newOwnerName || account.ownerName
            account.type = newType || account.type

            account.balance = isNaN(newBalance) ? account.balance : newBalance

        }
        
        res.status(200).send("Atualização realizada com sucesso")

    } catch (err) {
        if (res.statusCode === 200){
            res.status(500)
        }
        res.send(err.message)

    }
})