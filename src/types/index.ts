import {z} from 'zod'

/* Auth & Users*/

const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    password_confirmation: z.string(),
    token: z.string()

})

type Auth = z.infer<typeof authSchema>
export type UserLoginForm = Pick<Auth, 'email' | 'password'>
export type UserRegistrationForm = Pick<Auth, 'name' | 'email' | 'password' | 'password_confirmation'>

export type ConfirmToken = Pick<Auth, 'token'>



/*Tasks*/

// type TaskStatus = "pending" | "onHold" | "inProgress" | "underReview" | "completed"

export const taskStatusShema = z.enum(["pending" , "onHold" , "inProgress" , "underReview" , "completed"])
export type TaskStatus = z.infer<typeof taskStatusShema >

export const taskShema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    project: z.string(),
    status: taskStatusShema,
    createAt: z.string(),
    updatedAt: z.string()
})

export type Task = z.infer<typeof taskShema>
export type TaskFormData = Pick<Task, 'name' | 'description'>


/* Projects */
export const projectShema = z.object({
    _id: z.string(),
    projectName: z.string(),
    clientName: z.string(),
    description: z.string(),
    

})

export const dashboardProjectSchema = z.array(
    projectShema.pick({
        _id: true,
        projectName: true,
        clientName: true,
        description: true

    })
)

export type Project = z.infer<typeof projectShema>
export type ProjectFormData = Pick<Project, 'clientName' | 'projectName' | 'description'>